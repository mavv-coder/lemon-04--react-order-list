import React, { MouseEvent } from "react";
import classComponents from "./header.styles";
import { FormData } from "./header.vm";
import { ProductVm } from "../../../pods/order-detail";

interface Props {
  totalCost: number;
  orderState: number;
  productList: ProductVm[];
  handleProductState: (action: boolean) => void;
}

export const HeaderComponent: React.FC<Props> = (props) => {
  const { totalCost, orderState, productList, handleProductState } = props;
  const [formData, setFormData] = React.useState<FormData>({
    orderNum: "",
    provider: "",
    date: "",
  });

  const [stateSuccess, setStateSuccess] = React.useState<boolean>(false);

  const {
    Container,
    FlexContainer,
    InputField,
    InputReadOnly,
    Input,
    Label,
    Button,
    InputSuccess,
  } = classComponents;

  React.useEffect(() => {
    setStateSuccess(isReadyOrderStateToSubmit());
  }, [handleProductState]);

  const handleFormData = (value: string, type: string): void => {
    const newFormData = { ...formData, [type]: value };
    setFormData(newFormData);
  };

  const isReadyFormDataToSubmit = (): boolean =>
    formData.orderNum && formData.provider && formData.date ? true : false;

  const isReadyOrderStateToSubmit = (): boolean =>
    productList.every((x) => x.state);

  const handleSubmit = (e: MouseEvent): void => {
    e.preventDefault();
    isReadyOrderStateToSubmit() && isReadyFormDataToSubmit()
      ? console.log("Correcto")
      : console.log("Datos incorrectos");
  };

  return (
    <Container>
      <form>
        <FlexContainer>
          <InputField>
            <Label>Número</Label>
            <Input
              type="text"
              id="orderNum"
              onBlur={(e) => handleFormData(e.target.value, e.target.id)}
            />
          </InputField>
          <InputField>
            <Label>Proveedor</Label>
            <Input
              type="text"
              id="provider"
              onBlur={(e) => handleFormData(e.target.value, e.target.id)}
            />
          </InputField>
          <InputField>
            <Label>Fecha</Label>
            <Input
              type="date"
              id="date"
              onBlur={(e) => handleFormData(e.target.value, e.target.id)}
            />
          </InputField>
        </FlexContainer>
        <FlexContainer>
          <InputField>
            <Label>Importe total</Label>
            <InputReadOnly type="number" value={totalCost} readOnly />
          </InputField>
          <InputField>
            <Label>Estado</Label>
            {stateSuccess ? (
              <InputSuccess type="text" value={`${orderState}%`} readOnly />
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
