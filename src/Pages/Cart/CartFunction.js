import { CART_API } from "config";

export const fetchPutQuantity = (cartItem, type, fetchCartData) => {
  fetch(`${CART_API}/cartlist`, {
    method: "PUT",
    headers: {
      Authorization: localStorage.getItem("access_token"),
    },
    body: JSON.stringify({
      cart_num: cartItem.cart_num,
      quantity: cartItem.productQuantity + type,
    }),
  }).then((res) => {
    if (res.status === 200) {
      fetchCartData();
    }
  });
};

export const fetchDeleteProduct = (cartItem, fetchCartData) => {
  fetch(`${CART_API}/cartlist`, {
    method: "DELETE",
    headers: {
      Authorization: localStorage.getItem("access_token"),
    },
    body: JSON.stringify({
      cart_num: cartItem.cart_num,
    }),
  }).then((res) => {
    if (res.status === 200) {
      fetchCartData();
    }
  });
};
