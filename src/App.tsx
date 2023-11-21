import React, { PropsWithChildren } from "react";
import Router from "./Router";
import { useAppSelector } from "./hooks/redux";
import { AppState } from "./redux/store";
import Loading from "./components/Loading";

import c from "./app.module.css";

const App: React.FC<PropsWithChildren<{}>> = () => {
  const loading = useAppSelector((state: AppState) => state.loading.value);

  return (
    <div className={c.app}>
      <Router />
      {loading && <Loading />}
    </div>
  );
};

export default App;
