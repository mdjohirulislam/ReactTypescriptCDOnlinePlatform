import { IPaymentDetailsProps } from "./types";
const accessToken = sessionStorage.getItem("access_token") as string; 
export const allPaymentStages = ["Amount", "Recipient", "Review", "Pay"];
export const BASE_API_URL = "/api/v1/rates/?token="+accessToken+"&pair=";

//export const BASE_API_URL = "https://v6.exchangerate-api.com/v6/7df3dc092ddf0f737355b2bb/latest";

export const initialPaymentDetails: IPaymentDetailsProps = {
  senderAmount: "100",
  recipientAmount: "",
  senderCurrency: "GBP",
  recipientCurrency: "EUR",
  insideEurope: true,
  fee:0.000001, // I assumed a static fee of 3.69 of whatever the sender currency is
  rate: 0,
  recipientName: "",
  recipientEmail: "",
  iban: "",
  swiftCode: "",
};