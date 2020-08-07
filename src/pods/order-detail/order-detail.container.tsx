import React from "react";
import { OrderDetailComponent } from "./order-detail.component";
import { getProductListApi } from "../../api";
import { mapProductListFromApiToVm } from "./order-detail.mapper";
import { ProductVm } from "./order-detail.vm";

export const OrderDetailContainer: React.FC = () => {
  const [productList, setProductList] = React.useState<ProductVm[]>([]);
  const [totalCost, setTotalCost] = React.useState<number>(0);
  const [orderState, setOrderState] = React.useState<number>(0);

  // Load the list from the api after passing through the mapper
  const onLoadProductList = (): void => {
    getProductListApi()
      .then((data) => mapProductListFromApiToVm(data))
      .then((data) => setProductList(data));
  };

  // Calculate total cost of the product using all cost properties
  const calculateTotalCost = (list: ProductVm[]): number =>
    list.reduce((acc, product) => (acc += product.cost), 0);

  // Set the totalCost State using the new list
  const updateTotalCost = (list: ProductVm[]): void =>
    setTotalCost(calculateTotalCost(list));

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

  React.useEffect(() => {
    onLoadProductList();
  }, []);

  return (
    <OrderDetailComponent
      totalCost={totalCost}
      productList={productList}
      setProductList={setProductList}
      handleProductCost={handleProductCost}
      toggleCheckboxValue={toggleCheckboxValue}
      handleProductState={handleProductState}
      orderState={orderState}
    />
  );
};
