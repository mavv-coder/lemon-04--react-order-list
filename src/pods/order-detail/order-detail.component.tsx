import React from "react";
import { ProductVm } from "../../core/context";
import { HeadingContainer } from "../../layout/components/heading";
import { HeaderContainer } from "../../layout/components/header";
import { ProductListComponent } from "../../layout/components/product-list";

interface Props {
  productList: ProductVm[];
  setProductList: (product: ProductVm[]) => void;
  handleProductCost: (id: string, value: number) => void;
  toggleCheckboxValue: (product: ProductVm) => void;
  handleProductState: any;
  orderState: number;
}

export const OrderDetailComponent: React.FC<Props> = (props) => {
  const {
    productList,
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
        productList={productList}
        handleProductState={handleProductState}
      />
      <ProductListComponent
        productList={productList}
        setProductList={setProductList}
        handleProductCost={handleProductCost}
        toggleCheckboxValue={toggleCheckboxValue}
        handleProductState={handleProductState}
      />
    </>
  );
};
