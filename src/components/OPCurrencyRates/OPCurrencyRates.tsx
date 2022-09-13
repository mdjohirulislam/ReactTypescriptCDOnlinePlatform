import React, { ChangeEvent, useState } from "react";
import { IPaymentDetailsProps, PaymentStages } from "../../utils/types";
import { initialPaymentDetails } from "../../utils/constants";
import { PaymentProvider } from "../../utils/context";

import OPCurrencyConverter from '../OPCurrencyConverter/OPCurrencyConverter';

function OPCurrencyRates () { 
    const [paymentDetails, setPaymentDetails] = useState<IPaymentDetailsProps>(
        initialPaymentDetails
      ); // Here, we initialize the transfer payment details
    
      const [paymentStage, setPaymentStage] = useState<PaymentStages>(
        PaymentStages.AMOUNT
      ); // And the payment stage is initialized too
    
      const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPaymentDetails({ ...paymentDetails, [name]: value });
      }; // This is the onChange handler for input fields
    
      return (

        <PaymentProvider
        value={{
          paymentStage,
          setPaymentStage,
          paymentDetails,
          handleChange,
          setPaymentDetails,
        }}
      >
        <OPCurrencyConverter/>
        </PaymentProvider> 
      );
   
  }
  
   
  export default  OPCurrencyRates;
