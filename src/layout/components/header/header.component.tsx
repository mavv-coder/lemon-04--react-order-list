import React, { MouseEvent } from "react";
import { useHistory } from "react-router-dom";
import { switchRoutes } from "../../../core/router";
import classComponents from "./header.styles";
import { ProductVm } from "../../../core/context";
import { useAppContext } from "../../../core/context";

interface Props {
  totalCost: number;
  orderState: number;
  productList: ProductVm[];
  handleProductState: (action: boolean) => void;
}

export const HeaderComponent: React.FC<Props> = (props) => {
  const { formData, setFormData } = useAppContext();
  const history = useHistory();
  const { totalCost, orderState, productList, handleProductState } = props;

  // const [formData, setFormData] = React.useState<FormData>({
  //   orderNum: "",
  //   provider: "",
  //   date: "",
  // });

  const [stateSuccess, setStateSuccess] = React.useState<boolean>(false);
  const [orderNumSuccess, setOrderNumSuccess] = React.useState<boolean>(false);
  const [providerSuccess, setProviderSuccess] = React.useState<boolean>(false);
  const [dateSuccess, setDateSuccess] = React.useState<boolean>(false);

  const {
    Container,
    FlexContainer,
    InputField,
    InputReadOnly,
    Input,
    Label,
    Button,
    InputSuccess,
    InputStateSuccess,
  } = classComponents;

  React.useEffect(() => {
    setStateSuccess(isReadyOrderStateToSubmit());
    refreshAllInputStyleOnLoad();
  }, [handleProductState]);

  const handleFormData = (value: string, type: string): void => {
    const newFormData = { ...formData, [type]: value };
    setFormData(newFormData);
  };

  const isReadyFormDataToSubmit = (): boolean =>
    formData.orderNum && formData.provider && formData.date ? true : false;

  const isReadyOrderStateToSubmit = (): boolean =>
    productList.every((x) => x.state);

  const navigateToCheckout = (): void => {
    history.push(switchRoutes.checkout);
  };

  const handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();
    isReadyOrderStateToSubmit() && isReadyFormDataToSubmit()
      ? navigateToCheckout()
      : console.log("Datos incorrectos");
  };

  const refreshAllInputStyleOnLoad = () => {
    formData.orderNum ? setOrderNumSuccess(true) : setOrderNumSuccess(false);
    formData.provider ? setProviderSuccess(true) : setProviderSuccess(false);
    formData.date ? setDateSuccess(true) : setDateSuccess(false);
  };

  const handleNumberInputStyle = (value: string, type: string): void => {
    handleFormData(value, type);
    value ? setOrderNumSuccess(true) : setOrderNumSuccess(false);
  };

  const handleProviderInputStyle = (value: string, type: string): void => {
    handleFormData(value, type);
    value ? setProviderSuccess(true) : setProviderSuccess(false);
  };

  const handleDateInputStyle = (value: string, type: string): void => {
    handleFormData(value, type);
    value ? setDateSuccess(true) : setDateSuccess(false);
  };

  console.log(formData);

  return (
    <Container>
      <form>
        <FlexContainer>
          <InputField>
            <Label>Número</Label>
            {orderNumSuccess ? (
              <InputSuccess
                type="text"
                id="orderNum"
                defaultValue={formData.orderNum}
                onBlur={(e) =>
                  handleNumberInputStyle(e.target.value, e.target.id)
                }
              />
            ) : (
              <Input
                type="text"
                id="orderNum"
                onBlur={(e) =>
                  handleNumberInputStyle(e.target.value, e.target.id)
                }
              />
            )}
          </InputField>
          <InputField>
            <Label>Proveedor</Label>
            {providerSuccess ? (
              <InputSuccess
                type="text"
                id="provider"
                defaultValue={formData.provider}
                onBlur={(e) =>
                  handleProviderInputStyle(e.target.value, e.target.id)
                }
              />
            ) : (
              <Input
                type="text"
                id="provider"
                onBlur={(e) =>
                  handleProviderInputStyle(e.target.value, e.target.id)
                }
              />
            )}
          </InputField>
          <InputField>
            <Label>Fecha</Label>
            {dateSuccess ? (
              <InputSuccess
                type="date"
                id="date"
                defaultValue={formData.date}
                onBlur={(e) =>
                  handleDateInputStyle(e.target.value, e.target.id)
                }
              />
            ) : (
              <Input
                type="date"
                id="date"
                onBlur={(e) =>
                  handleDateInputStyle(e.target.value, e.target.id)
                }
              />
            )}
          </InputField>
        </FlexContainer>
        <FlexContainer>
          <InputField>
            <Label>Importe total</Label>
            <InputReadOnly
              type="text"
              value={`${totalCost.toFixed(2)} €`}
              readOnly
            />
          </InputField>
          <InputField>
            <Label>Estado</Label>
            {stateSuccess ? (
              <InputStateSuccess
                type="text"
                value={`${orderState}%`}
                readOnly
              />
            ) : (
              <InputReadOnly type="text" value={`${orderState}%`} readOnly />
            )}
          </InputField>
          <InputField>
            <Button type="submit" onClick={(e) => handleSubmit(e)}>
              Enviar
            </Button>
          </InputField>
        </FlexContainer>
      </form>
    </Container>
  );
};
