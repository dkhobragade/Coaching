"use client";

import { fetchWrapper } from "./fetchWrapper";

export const itemsInCart = () => fetchWrapper("auth/cart");
export const viewCart = () => fetchWrapper("auth/view-cart");
export const emptyCart = () => fetchWrapper("auth/empty-cart");

export const getUserCartItems = async () => {
  try {
    const items = await viewCart();

    if (!items?.cart?.items) return 0;

    const totalItems = items.cart.items.reduce(
      (acc: number, item: { quantity: number }) => acc + item.quantity,
      0
    );

    return totalItems;
  } catch (error) {
    console.error("Error in getUserCartItems:", error);
    return 0;
  }
};

export const onClickYoutube = () => {
  window.open("https://www.youtube.com/@DKMPSC", "_blank");
};

export const onClickTelegram = () => {
  window.open("https://t.me/dkmpsc05", "_blank");
};
