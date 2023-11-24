import React, { PropsWithChildren } from "react";

import c from "./footer.module.css";

import logoImg from "../../assets/images/logo/logo.png";
import classcat from "classcat";

const Footer: React.FC<PropsWithChildren<{ className?: string }>> = ({
  className,
}) => {
  return (
    <footer className={classcat([c.container, className])}>
      <img src={logoImg} alt="logo" className={c.logo} />
      <a
        href="https://github.com/miraccumbur"
        target="_blank"
        className={c.text}
        rel="noreferrer"
      >
        created by mircos
      </a>
    </footer>
  );
};

export default Footer;
