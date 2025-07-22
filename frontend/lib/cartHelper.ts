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
