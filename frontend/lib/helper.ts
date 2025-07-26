"use client";

import { fetchWrapper } from "./fetchWrapper";

export const itemsInCart = () => fetchWrapper("auth/cart");
export const viewCart = () => fetchWrapper("auth/view-cart");

export const getUserCartItems = async () => {
  const items = await viewCart();

  const totalItems = items.cart.items.reduce(
    (acc: number, item: { quantity: number }) => acc + item.quantity,
    0
  );
  return totalItems;
};

export const onClickYoutube = () => {
  window.open("https://www.youtube.com/@DKMPSC", "_blank");
};

export const onClickTelegram = () => {
  window.open("https://t.me/dkmpsc05", "_blank");
};
