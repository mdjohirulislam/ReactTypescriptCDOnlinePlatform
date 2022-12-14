/* eslint-disable react-hooks/exhaustive-deps */
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Axios from "axios";

import { usePaymentContext } from "../../utils/context";
import { PaymentStages } from "../../utils/types";
import staticRates from "../../utils/rates.json";
import {
  getUpdatedRecipientAmount,
  getConversionAmount,
  getUpdatedSenderAmount,
} from "../../utils/helpers";
import { BASE_API_URL } from "../../utils/constants";
///api/rates/?token=74be5d75-9314-4c96-bd75-6574842eae31&pair=GBPEUR
const accessToken = sessionStorage.getItem("access_token") as string; 
//const BASE_API_URL_V1 = "/api/v1/rates/?token="+accessToken+"&pair=GBPEUR";
 
interface IAllRateProps {
  [currency: string]: number;
}
 
const useAmountDetailsHook = () => {
  const { paymentDetails, setPaymentDetails, handleChange, setPaymentStage } =
    usePaymentContext();

  const {
    senderAmount,
    recipientAmount,
    senderCurrency,
    recipientCurrency,
    rate,
    fee,
  } = paymentDetails;

  const [allRates, setAllRates] = useState<IAllRateProps>({});
  const BASE_API_URL_V1 = "/api/v1/rates/?token="+accessToken+"&pair="+recipientCurrency;
  const fetchRates = () => {
    console.log("Currency called to API : "+ recipientCurrency);
  Axios.get(`${BASE_API_URL}${recipientCurrency}`) 
      .then(({ data }) => {
         
        if (data) {
    //      setAllRates(data.conversion_rates);
    setAllRates(data);
        } else {
          // If there was an error,
          setAllRates(staticRates); // Populate the rates with static rates in rates.json
        }
      })
      .catch(({ response }) => {
        // Or If CORS blocked the request (which is most likely on the production mode),
        console.log(response);
        setAllRates(staticRates); // Also, Populate the rates with static rates in rates.json
      });
  }; // Fetch all rates

  useEffect(() => {
    fetchRates();
  }, [recipientCurrency]);

  useEffect(() => {
    const updatedRecipientAmount = getUpdatedRecipientAmount(
      senderAmount.replace(/,/g, ""),
      fee,
      allRates[senderCurrency]
    ); // calculate the updated recipient amount based on new the rate

    setPaymentDetails({
      ...paymentDetails,
      rate: allRates[senderCurrency],
      recipientAmount: updatedRecipientAmount,
    });
  }, [senderCurrency, allRates]); // anytime the sender currency changes, update the rate and the recipient amount also

  const handleSubmitAmountDetails = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPaymentStage(PaymentStages.RECIPIENT); // Move to the next stage
  };

  const onChangeAmount = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value: valueWithStrings } = event.target;

    const value = valueWithStrings.replace(/,/g, ""); //remove commas before making calculations

    if (!value || value.match(/^-?\d*\.?\d*$/)) {
      // Unless empty, Allow only numbers to be inputed
      const updatedAmounts = () => {
        if (name === "senderAmount") {
          return {
            senderAmount: value,
            recipientAmount: getUpdatedRecipientAmount(value, fee, rate), // calculate the respective recipientAmount
          };
        } else if (name === "recipientAmount") {
          return {
            recipientAmount: value,
            senderAmount: getUpdatedSenderAmount(value, fee, rate), // calculate the respective senderAmount
          };
        }
      };

      setPaymentDetails({
        ...paymentDetails,
        ...updatedAmounts(),
      }); // update the payment details
    }
  };

  const conversionAmount = getConversionAmount(senderAmount, fee); // get the conversion amount

  return {
    senderCurrency,
    rate,
    fee,
    recipientCurrency,
    allRates,
    senderAmount,
    recipientAmount,
    conversionAmount,
    onChangeAmount,
    handleChange,
    handleSubmitAmountDetails,
  } as const;
};

export default useAmountDetailsHook;
