import React from "react";
import classComponents from "./order-detail.styles";
import { HeaderComponent } from "../../layout/components/header";
import { ProductListComponent } from "../../layout/components/product-list";
import { ProductVm } from "./order-detail.vm";

interface Props {
  productList: ProductVm[];
  setProductList: (product: ProductVm[]) => void;
}

export const OrderDetailComponent: React.FC<Props> = (props) => {
  const { productList, setProductList } = props;
  const { Heading } = classComponents;
  return (
    <>
      <Heading>Pedido a proveedor</Heading>
      <HeaderComponent />
      <ProductListComponent
        productList={productList}
        setProductList={setProductList}
      />
    </>
  );
};
