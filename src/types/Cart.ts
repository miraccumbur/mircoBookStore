interface ICart {
  isbn: string;
  count: number;
  title: string;
  image: string;
  price: number;
}

interface ICartValue {
    value: Array<ICart>,
    totalPrice: number,
}

export type { ICart, ICartValue };
