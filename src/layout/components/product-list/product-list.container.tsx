import React from "react";
import { ProductVm, useAppContext } from "../../../core/context";
import { ProductListComponent } from "./product-list.component";

interface Props {
  setProductList: (product: ProductVm[]) => void;
  handleProductCost: (id: string, value: number) => void;
  toggleCheckboxValue: (product: ProductVm) => void;
  handleProductState: (action: boolean) => void;
}

export const ProductListContainer: React.FC<Props> = (props) => {
  const { productList } = useAppContext();
  const { handleProductCost, toggleCheckboxValue, handleProductState } = props;

  React.useEffect(() => {
    // Pinta el estado al cargar el componente
    handleProductState(true);
  }, []);

  return (
    <ProductListComponent
      productList={productList}
      handleProductCost={handleProductCost}
      toggleCheckboxValue={toggleCheckboxValue}
      handleProductState={handleProductState}
    />
  );
};
