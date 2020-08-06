import React from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { getProductListApi } from "../../api";
import { mapProductListFromApiToVm } from "./order-detail.mapper";
import { ProductVm } from "./order-detail.vm";

export const OrderDetailContainer: React.FC = () => {
  const [productList, setProductList] = React.useState<ProductVm[]>([]);

  const onLoadProductList = (): void => {
    getProductListApi()
      .then((data) => mapProductListFromApiToVm(data))
      .then((data) => setProductList(data));
  };

  React.useEffect(() => {
    onLoadProductList();
  }, []);
  console.log(productList);
  return (
    <OrderDetailComponent
      productList={productList}
      setProductList={setProductList}
    />
  );
};
