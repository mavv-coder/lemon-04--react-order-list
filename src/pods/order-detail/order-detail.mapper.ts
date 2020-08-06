import { ProductVm } from "./order-detail.vm";
import { ProductEntityApi } from "../../api";

const mapProductFromApiToVm = (product: ProductEntityApi): ProductVm => ({
  id: product.id,
  description: product.title,
  cost: product.cost,
  state: false,
});

export const mapProductListFromApiToVm = (
  productList: ProductEntityApi[]
): ProductVm[] => productList.map((x) => mapProductFromApiToVm(x));
