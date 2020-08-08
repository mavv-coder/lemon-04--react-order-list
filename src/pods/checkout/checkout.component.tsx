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
    MainContainer,
    FlexContainer,
    FlexInfoContainer,
    List,
    ListItem,
    HiddenContainer,
    ButtonConfirm,
    ButtonBack,
    TextInfo,
    TextTotal,
    Divider,
    H2,
  } = classComponents;

  return (
    <>
      <HeadingContainer title="Confirmar pedido" />
      <MainContainer>
        <FlexContainer>
          <FlexInfoContainer>
            <H2>Detalles del pedido</H2>
            <div>
              <TextInfo>Número de pedido: {formData.orderNum}</TextInfo>
              <TextInfo>Proveedor: {formData.provider}</TextInfo>
              <TextInfo>Fecha del pedido: {formData.date}</TextInfo>
            </div>
          </FlexInfoContainer>
          <FlexInfoContainer>
            <H2>Lista de productos</H2>
            <List>
              {productList.map((product) => (
                <ListItem key={product.id}>
                  {`${product.description}: ${product.cost.toFixed(2)}€`}
                </ListItem>
              ))}
            </List>
          </FlexInfoContainer>
        </FlexContainer>
        <Divider></Divider>
        <TextTotal>Coste total: {totalCost.toFixed(2)}€</TextTotal>
      </MainContainer>
      <HiddenContainer>
        <Link to={switchRoutes.orderList}>
          <ButtonBack>Volver atrás</ButtonBack>
        </Link>
        <ButtonConfirm>Confirmar</ButtonConfirm>
      </HiddenContainer>
    </>
  );
};
