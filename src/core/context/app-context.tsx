import React from "react";
import { getProductListApi } from "../../api";
import { mapProductListFromApiToVm } from "../../pods/order-detail/order-detail.mapper";

import { Context, ProductVm } from "./app-context.model";

const AppContext = React.createContext<Context>(null);

export const AppContextProvider: React.FC = (props) => {
  const [productList, setProductList] = React.useState<ProductVm[]>([]);

  const onLoadProductList = (): void => {
    getProductListApi()
      .then((data) => mapProductListFromApiToVm(data))
      .then((data) => setProductList(data));
  };

  React.useEffect(() => {
    onLoadProductList();
  }, []);

  return (
    <AppContext.Provider value={{ productList, setProductList }}>
      {props.children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = React.useContext(AppContext);
  return context;
};
