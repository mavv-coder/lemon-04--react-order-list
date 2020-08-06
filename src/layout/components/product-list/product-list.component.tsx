import React from "react";
import classComponents from "./product-list.styles";
import { ProductVm } from "../../../pods/order-detail";

interface Props {
  productList: ProductVm[];
  setProductList: (product: ProductVm[]) => void;
}

export const ProductListComponent: React.FC<Props> = (props) => {
  const { productList } = props;
  const { Table, TableData, TableHead, TableRow, Input } = classComponents;

  return (
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
              <input type="checkbox" defaultChecked={product.state} />
            </TableData>
            <TableData>{product.state ? "Validado" : "Pendiente"}</TableData>
            <TableData>{product.description}</TableData>
            <TableData>
              <Input type="number" value={product.cost} /> €
            </TableData>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};
