import { atom } from "jotai";

export const userAtom = atom({
  isLoggedIn: false,
  user: {
    name: "",
    email: "",
  },
});
