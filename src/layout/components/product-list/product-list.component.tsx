import React from "react";
import classComponents from "./product-list.styles";
import { ProductVm } from "../../../pods/order-detail";

interface Props {
  productList: ProductVm[];
  setProductList: (product: ProductVm[]) => void;
  handleProductCost: (id: string, value: number) => void;
  toggleCheckboxValue: (product: ProductVm) => void;
}

export const ProductListComponent: React.FC<Props> = (props) => {
  const { productList, handleProductCost, toggleCheckboxValue } = props;
  const {
    Table,
    TableData,
    TableHead,
    TableRow,
    Input,
    Container,
    Button,
  } = classComponents;

  return (
    <>
      <Container>
        <Button>Validar</Button>
        <Button>Invalidar</Button>
      </Container>
      <Table>
        <thead>
          <TableRow>
            <TableHead></TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Importe</TableHead>
          </TableRow>
        </thead>
        <tbody>
          {productList.map((product) => (
            <TableRow key={product.id}>
              <TableData>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onChange={() => toggleCheckboxValue(product)}
                />
              </TableData>
              <TableData>{product.state ? "Validado" : "Pendiente"}</TableData>
              <TableData>{product.description}</TableData>
              <TableData>
                <Input
                  type="number"
                  defaultValue={product.cost}
                  onChange={(e) => {
                    handleProductCost(product.id, parseFloat(e.target.value));
                  }}
                />{" "}
                €
              </TableData>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </>
  );
};
