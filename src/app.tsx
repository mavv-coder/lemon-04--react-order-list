import React from "react";
import { RouterComponent } from "./core/router";
import { useAppContext } from "./core/context";

export const App = () => {
  const { visibleCart } = useAppContext();
  return (
    <div>
      <RouterComponent />
    </div>
  );
};
