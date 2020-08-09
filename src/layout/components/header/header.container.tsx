import React from "react";
import { useHistory } from "react-router-dom";
import { switchRoutes } from "../../../core/router";
import { HeaderComponent } from "./header.component";
import { useAppContext, ProductVm } from "../../../core/context";

interface Props {
  orderState: number;
  productList: ProductVm[];
  handleProductState: (action: boolean) => void;
}

export const HeaderContainer: React.FC<Props> = (props) => {
  const { totalCost, formData } = useAppContext();
  const { orderState, productList, handleProductState } = props;
  const history = useHistory();

  const isReadyFormDataToSubmit = (): boolean =>
    formData.orderNum && formData.provider && formData.date ? true : false;

  const isReadyOrderStateToSubmit = (): boolean =>
    productList.every((x) => x.state);

  const navigateToCheckout = (): void => {
    history.push(switchRoutes.checkout);
  };

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    isReadyOrderStateToSubmit() && isReadyFormDataToSubmit()
      ? navigateToCheckout()
      : alert("Completa el formulario y valida los productos");
  };

  return (
    <HeaderComponent
      isReadyOrderStateToSubmit={isReadyOrderStateToSubmit}
      handleSubmit={handleSubmit}
      totalCost={totalCost}
      orderState={orderState}
      productList={productList}
      handleProductState={handleProductState}
    />
  );
};
