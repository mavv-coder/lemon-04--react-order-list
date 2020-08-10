import React from "react";
import classComponents, { classes } from "./header.styles";
import { FormData } from "../../../core/context";

interface Props {
  formData: FormData;
  totalCost: number;
  orderState: number;
  stateSuccess: boolean;
  handleOnBlur: (value: string, type: string) => void;
  handleSubmit: (e: React.MouseEvent<HTMLElement>) => void;
}

export const HeaderComponent: React.FC<Props> = (props) => {
  const {
    formData,
    totalCost,
    orderState,
    stateSuccess,
    handleSubmit,
    handleOnBlur,
  } = props;

  const {
    Container,
    FlexContainer,
    InputField,
    InputReadOnly,
    Label,
    Button,
    InputStateSuccess,
  } = classComponents;

  return (
    <Container>
      <form>
        <FlexContainer>
          <InputField>
            <Label>Número</Label>
            <input
              type="text"
              id="orderNum"
              className={classes.input}
              defaultValue={formData.orderNum}
              onBlur={(e) => {
                handleOnBlur(e.target.value, e.target.id);
                e.target.className = e.target.value
                  ? classes.inputSuccess
                  : classes.inputError;
              }}
            />
          </InputField>
          <InputField>
            <Label>Proveedor</Label>
            <input
              type="text"
              id="provider"
              className={classes.input}
              defaultValue={formData.provider}
              onBlur={(e) => {
                handleOnBlur(e.target.value, e.target.id);
                e.target.className = e.target.value
                  ? classes.inputSuccess
                  : classes.inputError;
              }}
            />
          </InputField>
          <InputField>
            <Label>Fecha</Label>
            <input
              type="date"
              id="date"
              className={classes.input}
              defaultValue={formData.date}
              onBlur={(e) => {
                handleOnBlur(e.target.value, e.target.id);
                e.target.className = e.target.value
                  ? classes.inputSuccess
                  : classes.inputError;
              }}
            />
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
