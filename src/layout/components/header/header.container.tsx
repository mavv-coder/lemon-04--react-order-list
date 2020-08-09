import React from "react";
import { HeaderComponent } from "./header.component";
import { useAppContext, ProductVm } from "../../../core/context";

interface Props {
  orderState: number;
  productList: ProductVm[];
  handleProductState: (action: boolean) => void;
}

export const HeaderContainer: React.FC<Props> = (props) => {
  const { totalCost } = useAppContext();
  const { orderState, productList, handleProductState } = props;

  return (
    <HeaderComponent
      totalCost={totalCost}
      orderState={orderState}
      productList={productList}
      handleProductState={handleProductState}
    />
  );
};
