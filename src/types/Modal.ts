import { ICart } from "./Cart";

interface IModalState {
  value: ICart | boolean;
  type?: string;
}

export type { IModalState };
