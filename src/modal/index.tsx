import React, { PropsWithChildren, useEffect } from "react";
import { useAppSelector } from "../hooks/useRedux";
import { AppState } from "../redux/store";
import CartModal from "./CartModal";
import { IModalState, ISuccessModal } from "../types/Modal";
import ClassicModal from "./ClassicModal";
import { ICart } from "../types/Cart";

const Modal: React.FC<PropsWithChildren<{}>> = () => {
  const modal: IModalState<ISuccessModal | ICart | boolean> = useAppSelector((state: AppState) => state.modal);
  if (modal.type === "cart") {
    return <CartModal />;
  } else if (modal.type === "success") {
    return <ClassicModal />;
  } else {
    return <></>;
  }
};

export default Modal;
