import React from "react";
import classComponents from "./order-detail.styles";
import { HeaderComponent } from "../../layout/components/header";
import { ProductListComponent } from "../../layout/components/product-list";
import { ProductVm } from "./order-detail.vm";

interface Props {
  productList: ProductVm[];
  totalCost: number;
  setProductList: (product: ProductVm[]) => void;
  handleProductCost: (id: string, value: number) => void;
  toggleCheckboxValue: (product: ProductVm) => void;
}

export const OrderDetailComponent: React.FC<Props> = (props) => {
  const {
    productList,
    setProductList,
    handleProductCost,
    totalCost,
    toggleCheckboxValue,
  } = props;
  const { Heading } = classComponents;
  return (
    <>
      <Heading>Pedido a proveedor</Heading>
      <HeaderComponent totalCost={totalCost} />
      <ProductListComponent
        productList={productList}
        setProductList={setProductList}
        handleProductCost={handleProductCost}
        toggleCheckboxValue={toggleCheckboxValue}
      />
    </>
  );
};
