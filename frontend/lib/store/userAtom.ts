import { atom } from "jotai";

export const userAtom = atom({
  isLoggedIn: true,
  user: {
    name: "",
    email: "",
    id: "",
  },
});

export const userCartItems = atom({
  items: 0,
});
