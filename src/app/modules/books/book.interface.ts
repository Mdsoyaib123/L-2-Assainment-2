export type TBook = {
  title: string;
  author: string;
  price: number;
  category: "Fiction" | "Science" | "SelfDevelopment" | "Poetry" | "Religious";
  description: string;
  quantity: number;
  isStock?: boolean;
};

export type TOrder = {
  email: string;
  product: string;
  quantity: number;
  totalPrice: number;
};
