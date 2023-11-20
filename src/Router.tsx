import React, { PropsWithChildren } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Routes
} from "react-router-dom";
// import Home from "./screens/Home";
// import Detail from "./screens/Detail";
const Home = React.lazy(() => import("./screens/Home"));
const Detail = React.lazy(() => import("./screens/Detail"));
const Basket = React.lazy(() => import("./screens/Basket"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/basket/" element={<Basket />} />
    </Routes>
  )
);

const Router: React.FC<PropsWithChildren<{}>> = () => {
  return <RouterProvider router={router} />;
};

export default Router;
