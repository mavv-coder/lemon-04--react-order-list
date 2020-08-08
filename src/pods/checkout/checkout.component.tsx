import React from "react";
import { HeadingContainer } from "../../layout/components/heading";
import classComponents from "./checkout.styles";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/router";
import { ProductVm } from "../../core/context";

interface Props {
  productList: ProductVm[];
}

export const CheckOutComponent: React.FC<Props> = (props) => {
  const { productList } = props;
  const {
    Container,
    List,
    ListItem,
    ItemDesc,
    ItemCost,
    HiddenContainer,
    ButtonConfirm,
    ButtonBack,
  } = classComponents;

  return (
    <>
      <HeadingContainer title="Confirmar pedido" />
      <Container>
        Detalles Pedido, Lista de productos, Coste total
        <List>
          {productList.map((product) => (
            <ListItem key={product.id}>
              <ItemDesc>{product.description}</ItemDesc>
              <ItemCost>{product.cost.toFixed(2)}</ItemCost>
            </ListItem>
          ))}
        </List>
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
