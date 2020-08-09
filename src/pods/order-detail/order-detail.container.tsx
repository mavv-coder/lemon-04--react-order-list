import React from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { ProductVm } from "../../core/context";
import { useAppContext } from "../../core/context";

export const OrderDetailContainer: React.FC = () => {
  const { productList, setProductList, updateTotalCost } = useAppContext();
  const [orderState, setOrderState] = React.useState<number>(0);

  // Update the cost property of the product whose input value has been modified
  // Then set the ProductList State with the new product
  const handleProductCost = (id: string, value: number): void => {
    if (isNaN(value)) value = 0;
    const newList = productList.map((x) =>
      x.id === id ? { ...x, cost: value } : x
    );
    updateTotalCost(newList);
    setProductList(newList);
  };

  // Look for the product in the list and toggle property checked
  // Then set ProductList State
  const toggleCheckboxValue = (product: ProductVm): void => {
    const newList = productList.map((x) =>
      x.id === product.id ? { ...x, checked: !x.checked } : x
    );
    setProductList(newList);
  };

  const cleanCheckedProperty = (list: ProductVm[]): ProductVm[] =>
    list.map((x) => ({ ...x, checked: false }));

  const handleProductState = (action: boolean): void => {
    let newList = [];
    action
      ? (newList = productList.map((x) =>
          x.checked ? { ...x, state: true } : x
        ))
      : (newList = productList.map((x) =>
          x.checked ? { ...x, state: false } : x
        ));
    newList = cleanCheckedProperty(newList);
    setProductList(newList);
    calculateOrderState(newList);
  };

  const calculateOrderStatePercentage = (value: number): number =>
    value === 0 ? 0 : (value * 100) / productList.length;

  const calculateOrderState = (list: ProductVm[]): void => {
    const newOrderState = list.reduce((acc, x) => {
      if (x.state) acc++;
      return acc;
    }, 0);
    const percentage = calculateOrderStatePercentage(newOrderState);
    setOrderState(percentage);
  };

  return (
    <OrderDetailComponent
      productList={productList}
      setProductList={setProductList}
      handleProductCost={handleProductCost}
      toggleCheckboxValue={toggleCheckboxValue}
      handleProductState={handleProductState}
      orderState={orderState}
    />
  );
};
