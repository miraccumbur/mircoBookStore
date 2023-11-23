import { ICart } from "./Cart";

interface IModalValueEmpty {

}

interface IModalButton{
  type?: string,
  text:string,
  onClick: () => void
}

interface ISuccessModal {
  title?: string,
  icon?: string,
  message?: string,
  hideCloseButton?: boolean,
  onClose?: () => void
  buttons?:Array<IModalButton>
}

interface IModalState<T> {
  value: T;
  type?: string;
  status: boolean
}

export type { IModalState, ISuccessModal, IModalValueEmpty };
