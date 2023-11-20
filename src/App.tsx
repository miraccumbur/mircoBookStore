import React, { PropsWithChildren } from "react";
import Router from "./Router";

import c from "./app.module.css";

const App: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <div className={c.app}>
      <Router />
    </div>
  );
};

export default App;
