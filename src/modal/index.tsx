import React, { PropsWithChildren, useEffect } from "react";
import { useAppSelector } from "../hooks/useRedux";
import { AppState } from "../redux/store";
import CartModal from "./CartModal";
import { IModalState } from "../types/Modal";

const Modal: React.FC<PropsWithChildren<{}>> = () => {
  const modal: IModalState = useAppSelector((state: AppState) => state.modal);
  if (modal.type === "cart") {
    return <CartModal />;
  } else {
    return <></>;
  }
};

export default Modal;
