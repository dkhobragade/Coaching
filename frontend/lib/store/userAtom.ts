import { atom } from "jotai";
import { ProductItem } from "../props";

export const userAtom = atom({
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
    id: "",
    mobile: "",
    role: "",
    img: "",
  },
});

export const userCartItems = atom(0);

export const cartDetails = atom({
  totalAmount: 0,
  cartDetails: [] as ProductItem[],
});
