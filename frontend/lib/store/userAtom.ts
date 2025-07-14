import { atom } from "jotai";

export const userAtom = atom({
  isLoggedIn: true,
  user: {
    name: "",
    email: "",
  },
});
