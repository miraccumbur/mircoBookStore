import React, { PropsWithChildren } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Loading from "./components/Loading";
// import Home from "./screens/Home";
// import Detail from "./screens/Detail";
const Home = React.lazy(() => import("./screens/Home"));
const Detail = React.lazy(() => import("./screens/Detail"));
const Basket = React.lazy(() => import("./screens/Basket"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/basket" element={<Basket />} />
    </>
  )
);

const Router: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <React.Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </React.Suspense>
  );
};

export default Router;
