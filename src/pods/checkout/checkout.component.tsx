import React from "react";
import { HeadingContainer } from "../../layout/components/heading";
import classComponents from "./checkout.styles";
import { Link } from "react-router-dom";
import { switchRoutes } from "../../core/router";
import { ProductVm, FormData } from "../../core/context";

interface Props {
  productList: ProductVm[];
  formData: FormData;
  totalCost: number;
}

export const CheckOutComponent: React.FC<Props> = (props) => {
  const { productList, formData, totalCost } = props;
  const {
    Container,
    FlexContainer,
    FlexInfoContainer,
    List,
    ListItem,
    ItemDesc,
    ItemCost,
    HiddenContainer,
    ButtonConfirm,
    ButtonBack,
    TextInfo,
    TextTotal,
    Divider,
  } = classComponents;

  return (
    <>
      <HeadingContainer title="Confirmar pedido" />
      <Container>
        <FlexContainer>
          <FlexInfoContainer>
            <h2>Detalles Pedido</h2>
            <FlexInfoContainer>
              <TextInfo>Número de pedido: {formData.orderNum}</TextInfo>
              <TextInfo>Proveedor: {formData.provider}</TextInfo>
              <TextInfo>Fecha del pedido: {formData.date}</TextInfo>
            </FlexInfoContainer>
          </FlexInfoContainer>
          <FlexInfoContainer>
            <h2>Lista de productos</h2>
            <List>
              {productList.map((product) => (
                <ListItem key={product.id}>
                  <ItemDesc>{product.description}: </ItemDesc>
                  <ItemCost>{product.cost.toFixed(2)}€</ItemCost>
                </ListItem>
              ))}
            </List>
          </FlexInfoContainer>
        </FlexContainer>
        <Divider></Divider>
        <TextTotal>Coste total: {totalCost.toFixed(2)}€</TextTotal>
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
