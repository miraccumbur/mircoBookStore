import React, { PropsWithChildren } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

const Home = React.lazy(() => import("./screens/Home"));
const Detail = React.lazy(() => import("./screens/Detail"));
const Cart = React.lazy(() => import("./screens/Cart"));
const Checkout = React.lazy(() => import("./screens/Checkout"));

const Router: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:isbn" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </React.Suspense>
  );
};

export default Router;
