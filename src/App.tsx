import React, { PropsWithChildren } from "react";
import Router from "./Router";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { useAppSelector } from "./hooks/useRedux";
import { AppState } from "./redux/store";
import Loading from "./components/Loading";
import Modal from "./modal";
import c from "./app.module.css";

declare global {
  interface Window {
    navigate: any;
  }
}

const App: React.FC<PropsWithChildren<{}>> = () => {
  const navigate: NavigateFunction = useNavigate();
  const loading = useAppSelector((state: AppState) => state.loading.value);
  const modal = useAppSelector((state: AppState) => state.modal);

  //this added for use out of route
  window.navigate = navigate;

  return (
    <div className={c.app}>
      <Router />
      {loading && <Loading />}
      {modal.value && <Modal />}
    </div>
  );
};

export default App;
