import React, { PropsWithChildren } from "react";

import c from "./loading.module.css";

const Loading: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <div className={c.container}>
      <div className={c.ldsRing}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
