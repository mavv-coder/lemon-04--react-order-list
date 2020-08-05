import React from "react";
import classComponents from "./header.styles";

export const HeaderComponent: React.FC = () => {
  const { Container, InputField, Input, Label } = classComponents;
  return (
    <Container>
      <InputField>
        <Label>Número</Label>
        <Input type="text" />
      </InputField>
    </Container>
  );
};
