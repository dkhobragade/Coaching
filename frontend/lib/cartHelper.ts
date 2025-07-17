"use client";

import { fetchWrapper } from "./fetchWrapper";

export const addToCart = () => fetchWrapper("auth/view-cart");

export const getCartItemsLength = async () => {
  const items = await addToCart();

  const totalItems = items.cart.items.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );
  return totalItems;
};
