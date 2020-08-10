import React from "react";
import { useHistory } from "react-router-dom";
import { useAppContext } from "../../../core/context";
import { switchRoutes } from "../../../core/router";
import { HeaderComponent } from "./header.component";

interface Props {
  orderState: number;
  handleProductValidate: (action: boolean) => void;
}

export const HeaderContainer: React.FC<Props> = (props) => {
  const history = useHistory();
  const { totalCost, formData, setFormData, productList } = useAppContext();
  const { orderState, handleProductValidate } = props;
  const [stateSuccess, setStateSuccess] = React.useState<boolean>(false);

  // Checks if input fields have any value
  const isReadyFormDataToSubmit = (): boolean =>
    formData.orderNum && formData.provider && formData.date ? true : false;

  // Checks if all the products have been validated
  const isReadyOrderStateToSubmit = (): boolean =>
    productList.every((x) => x.state);

  // Goes to Checkout page
  const navigateToCheckout = (): void => {
    history.push(switchRoutes.checkout);
  };

  // Checks if everything is ready to submit and go to Checkout page
  const handleSubmit = (e: React.MouseEvent<HTMLElement>): void => {
    e.preventDefault();
    isReadyOrderStateToSubmit() && isReadyFormDataToSubmit()
      ? navigateToCheckout()
      : alert("Completa el formulario y valida los productos");
  };

  // Updates form properties with values from inputs
  // Then set FormData with new values
  const handleOnBlur = (value: string, type: string): void => {
    const newFormData = { ...formData, [type]: value };
    setFormData(newFormData);
  };

  React.useEffect(() => {
    setStateSuccess(isReadyOrderStateToSubmit());
  }, [handleProductValidate]);

  return (
    <HeaderComponent
      handleOnBlur={handleOnBlur}
      handleSubmit={handleSubmit}
      totalCost={totalCost}
      formData={formData}
      orderState={orderState}
      stateSuccess={stateSuccess}
    />
  );
};
