import React, { PropsWithChildren } from "react";
import { useAppSelector, useAppDispatch } from "./hooks/redux";

const App: React.FC<PropsWithChildren<{}>> = () => {
  const dispatch = useAppDispatch();
  return <div>Mirco Book Store</div>;
};

export default App;
