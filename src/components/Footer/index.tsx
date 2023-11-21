import React, { PropsWithChildren } from "react";

import c from "./footer.module.css";

import logoImg from "../../assets/images/logo/logo.png";

const Footer: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <footer className={c.container}>
      <img src={logoImg} alt="logo" className={c.logo} />
      <a href="https://github.com/miraccumbur" target="_blank" className={c.text}>created by mircos</a>
    </footer>
  );
};

export default Footer;
