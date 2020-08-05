import React from "react";
import classComponents from "./product-list.styles";

export const ProductListComponent: React.FC = () => {
  const { Table, TableData, TableHead, TableRow } = classComponents;
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
        <TableRow>
          <TableData>
            <input type="checkbox" />
          </TableData>
          <TableData>Alfreds Futterkiste</TableData>
          <TableData>Maria Anders</TableData>
          <TableData>Germany</TableData>
        </TableRow>
        <TableRow>
          <TableData>
            <input type="checkbox" />
          </TableData>
          <TableData>Centro comercial Moctezuma</TableData>
          <TableData>Francisco Chang</TableData>
          <TableData>Mexico</TableData>
        </TableRow>
        <TableRow>
          <TableData>
            <input type="checkbox" />
          </TableData>
          <TableData>Ernst Handel</TableData>
          <TableData>Roland Mendel</TableData>
          <TableData>Austria</TableData>
        </TableRow>
      </tbody>
    </Table>
  );
};
