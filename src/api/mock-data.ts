import { ProductEntityApi } from "./mock-data.model";

const productListApi: ProductEntityApi[] = [
  {
    id: "P463",
    title: "Recambios impresión",
    cost: "540",
  },
  {
    id: "P390",
    title: "Reactivos maquinaria",
    cost: "2240",
  },
  {
    id: "P422",
    title: "Soportes plataforma",
    cost: "465",
  },
  {
    id: "P321",
    title: "Material de oficina",
    cost: "129",
  },
];

export const getProductListApi = (): Promise<ProductEntityApi[]> =>
  Promise.resolve(productListApi);
