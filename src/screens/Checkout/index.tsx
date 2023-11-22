import React, { PropsWithChildren } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import c from "./index.module.css";

const Checkout: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <div className={c.container}>
      <Header />
      <div className={c.contentField}></div>
      <Footer />
    </div>
  );
};

export default Checkout;
