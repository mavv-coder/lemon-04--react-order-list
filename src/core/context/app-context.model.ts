export interface ProductVm {
  id: string;
  description: string;
  cost: number;
  state: boolean;
  checked: boolean;
}

export interface Context {
  productList: ProductVm[];
  setProductList: (list: ProductVm[]) => void;
}
