import React from "react";
import { HeadingContainer } from "../../layout/components/heading";
import classComponents from "./checkout.styles";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/router";

export const CheckOutComponent: React.FC = (props) => {
  const {
    Container,
    List,
    HiddenContainer,
    ButtonConfirm,
    ButtonBack,
  } = classComponents;
  return (
    <>
      <HeadingContainer title="Checkout" />
      <Container>
        <List></List>
      </Container>
      <HiddenContainer>
        <Link to={switchRoutes.orderList}>
          <ButtonBack>Volver atrás</ButtonBack>
        </Link>
        <ButtonConfirm>Confirmar</ButtonConfirm>
      </HiddenContainer>
    </>
  );
};
