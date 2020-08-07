import React from "react";
import classComponents from "./header.styles";

interface Props {
  totalCost: number;
}

export const HeaderComponent: React.FC<Props> = (props) => {
  const { totalCost } = props;
  const {
    Container,
    FlexContainer,
    InputField,
    InputReadOnly,
    Input,
    Label,
    Button,
  } = classComponents;
  return (
    <Container>
      <form>
        <FlexContainer>
          <InputField>
            <Label>Número</Label>
            <Input type="text" id="number" />
          </InputField>
          <InputField>
            <Label>Proveedor</Label>
            <Input type="text" />
          </InputField>
          <InputField>
            <Label>Fecha</Label>
            <Input type="date" />
          </InputField>
        </FlexContainer>
        <FlexContainer>
          <InputField>
            <Label>Importe total</Label>
            <InputReadOnly type="number" value={totalCost} readOnly />
          </InputField>
          <InputField>
            <Label>Estado</Label>
            <InputReadOnly type="text" readOnly />
          </InputField>
          <InputField>
            <Button type="submit">Enviar</Button>
          </InputField>
        </FlexContainer>
      </form>
    </Container>
  );
};
