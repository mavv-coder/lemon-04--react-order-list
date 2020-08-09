import React from "react";
import { ProductVm } from "../../core/context";
import { HeadingContainer } from "../../layout/components/heading";
import { HeaderContainer } from "../../layout/components/header";
import { ProductListContainer } from "../../layout/components/product-list";

interface Props {
  setProductList: (product: ProductVm[]) => void;
  handleProductCost: (id: string, value: number) => void;
  toggleCheckboxValue: (product: ProductVm) => void;
  handleProductState: any;
  orderState: number;
}

export const OrderDetailComponent: React.FC<Props> = (props) => {
  const {
    setProductList,
    handleProductCost,
    toggleCheckboxValue,
    handleProductState,
    orderState,
  } = props;
  return (
    <>
      <HeadingContainer title="Pedido a proveedor" />
      <HeaderContainer
        orderState={orderState}
        handleProductState={handleProductState}
      />
      <ProductListContainer
        setProductList={setProductList}
        handleProductCost={handleProductCost}
        toggleCheckboxValue={toggleCheckboxValue}
        handleProductState={handleProductState}
      />
    </>
  );
};
