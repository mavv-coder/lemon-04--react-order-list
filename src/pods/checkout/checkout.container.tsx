import React from "react";
import { CheckOutComponent } from "./checkout.component";
import { useAppContext } from "../../core/context";

export const CheckoutContainer: React.FC = () => {
  const { productList, formData, totalCost } = useAppContext();
  return (
    <CheckOutComponent
      productList={productList}
      formData={formData}
      totalCost={totalCost}
    />
  );
};
