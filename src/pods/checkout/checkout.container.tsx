import React from "react";
import { CheckOutComponent } from "./checkout.component";
import { useAppContext } from "../../core/context";

export const CheckoutContainer: React.FC = () => {
  const { productList } = useAppContext();
  return <CheckOutComponent productList={productList} />;
};
