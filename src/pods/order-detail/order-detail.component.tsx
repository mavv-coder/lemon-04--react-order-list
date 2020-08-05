import React from "react";
import classComponents from "./order-detail.styles";
import { HeaderComponent } from "../../layout/components/header";
import { ProductListComponent } from "../../layout/components/product-list";

export const OrderDetailComponent: React.FC = () => {
  const { Heading } = classComponents;
  return (
    <>
      <Heading>Pedido a proveedor</Heading>
      <HeaderComponent />
      <ProductListComponent />
    </>
  );
};
