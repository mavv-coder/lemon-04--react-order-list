export interface ProductInfoEntity {
  id: string;
  picUrl: string;
  title: string;
}

export interface Context {
  checkedProductList: ProductInfoEntity[];
  setCheckedProductList: (value: ProductInfoEntity[]) => void;
  visibleCart: boolean;
  setVisibleCart: (value: boolean) => void;
  updateCartList: (product: ProductInfoEntity) => void;
}
