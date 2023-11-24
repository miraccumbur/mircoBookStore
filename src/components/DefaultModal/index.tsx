import React, { PropsWithChildren } from "react";

import c from "./defaultModal.module.css";
import { IModalState, ISuccessModal } from "../../types/Modal";
import { useAppDispatch, useAppSelector } from "../../hooks/useRedux";
import { AppDispatch, AppState } from "../../redux/store";
import { setModal } from "../../redux/modalReducer";
import Button from "../Button";

const DefaultModal: React.FC<PropsWithChildren<{}>> = () => {
  const dispatch: AppDispatch = useAppDispatch();
  const modalData: IModalState<ISuccessModal> = useAppSelector(
    (state: AppState) => state.modal
  );

  return (
    <div className={c.container}>
      <div className={c.modal}>
        {!modalData.value.hideCloseButton && (
          <div
            className={c.close}
            onClick={() => {
              if (modalData.value.onClose) modalData.value.onClose();
              dispatch(setModal({ status: false, value: {} }));
            }}
          >
            X
          </div>
        )}
        <img src={modalData.value.icon} alt="" className={c.icon} />

        {modalData.value.title && (
          <div className={c.title}>{modalData.value.title}</div>
        )}

        {modalData.value.message && (
          <div className={c.message}>{modalData.value.message}</div>
        )}

        {modalData.value.buttons?.map((data, index) => {
          return (
            <Button
              key={data.text + index}
              text={data.text}
              onClick={data.onClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DefaultModal;
