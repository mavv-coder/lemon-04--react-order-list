import React from "react";
import classComponents from "./order-detail.styles";
import { HeaderComponent } from "../../layout/components/header";
import { ProductListComponent } from "../../layout/components/product-list";
import { ProductVm } from "./order-detail.vm";

interface Props {
  productList: ProductVm[];
  totalCost: number;
  setProductList: (product: ProductVm[]) => void;
  updateProductCost: (id: string, value: number) => void;
}

export const OrderDetailComponent: React.FC<Props> = (props) => {
  const { productList, setProductList, updateProductCost, totalCost } = props;
  const { Heading } = classComponents;
  return (
    <>
      <Heading>Pedido a proveedor</Heading>
      <HeaderComponent totalCost={totalCost} />
      <ProductListComponent
        productList={productList}
        setProductList={setProductList}
        updateProductCost={updateProductCost}
      />
    </>
  );
};
