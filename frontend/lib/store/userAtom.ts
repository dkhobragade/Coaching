import { atom } from "jotai";

export const userAtom = atom({
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
    id: "",
  },
});

export const userCartItems = atom(0);
