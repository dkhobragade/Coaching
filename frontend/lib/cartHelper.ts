"use client";

import { fetchWrapper } from "./fetchWrapper";

export const viewCart = () => fetchWrapper("auth/view-cart");

export const getCartItemsLength = async () => {
  const items = await viewCart();

  const totalItems = items.cart.items.reduce(
    (acc: any, item: any) => acc + item.quantity,
    0
  );
  return totalItems;
};
