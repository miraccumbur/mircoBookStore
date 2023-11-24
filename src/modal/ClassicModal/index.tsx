import React, { PropsWithChildren } from "react";

import c from "./classicModal.module.css";
import DefaultModal from "../../components/DefaultModal";

const ClassicModal: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <DefaultModal>
      <div style={{ color: "white" }}>sa</div>
    </DefaultModal>
  );
};

export default ClassicModal;
