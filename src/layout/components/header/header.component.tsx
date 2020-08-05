import React from "react";
import classComponents from "./header.styles";

export const HeaderComponent: React.FC = () => {
  const {
    Container,
    FlexContainer,
    InputField,
    Input,
    Label,
    Button,
  } = classComponents;
  return (
    <Container>
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
          <Input type="number" />
        </InputField>
        <InputField>
          <Label>Estado</Label>
          <Input type="text" />
        </InputField>
        <Button>Enviar</Button>
      </FlexContainer>
    </Container>
  );
};
