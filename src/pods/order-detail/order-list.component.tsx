import React from "react";
import classComponents from "./order-list.styles";
import { HeaderComponent } from "../../layout/components/header";

export const OrderDetailComponent: React.FC = () => {
  const { Heading } = classComponents;
  return (
    <>
      <Heading>Pedido a proveedor</Heading>
      <HeaderComponent />
    </>
  );
};
