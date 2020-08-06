import { ProductEntityApi } from "./mock-data.model";

const productListApi: ProductEntityApi[] = [
  {
    id: "P463",
    title: "recambios impresión",
    cost: 540,
  },
  {
    id: "P390",
    title: "reactivos maquinaria",
    cost: 2240,
  },
  {
    id: "P422",
    title: "soportes plataforma",
    cost: 465,
  },
  {
    id: "P321",
    title: "material de oficina",
    cost: 129,
  },
];

export const getProductListApi = (): Promise<ProductEntityApi[]> =>
  Promise.resolve(productListApi);
