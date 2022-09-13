import React from "react";
import useAmountDetailsHook from "../useAmountDetailsHook";

// This one doesn't do much, just displays the already calculated values
export default function ShowTransferInfo() {
  const { conversionAmount, senderAmount, senderCurrency,recipientCurrency, rate, fee } =
    useAmountDetailsHook();

  return (
    <div
      className={`flex pl-3 h-${
        senderAmount ? "auto" : "0"
      } overflow-hidden items-center`}
    >
      <div className="flex flex-col items-center justify-center"> 
         <div className="h-4 w-0.5 bg-gray-200" />
         1  {senderCurrency} =  
        <div className="h-4 w-0.5 bg-gray-200" />
      </div>
      
      <div className="ml-3 text-gray-500 text-sm"> 
        <div className="flex font-semibold text-purple-900">
          <p className="w-28">{rate} {recipientCurrency}</p>
          <p>Today rate</p>
        </div>
      </div>
    </div>
  );
}
