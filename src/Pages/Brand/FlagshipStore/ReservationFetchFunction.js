import { RESERVATION_API } from "config";

const token = localStorage.getItem("access_token");

export const getReservationInfo = (methodType) => {
  const result = fetch(`${RESERVATION_API}`, {
    method: methodType,
    headers: {
      Authorization: token,
    },
  }).then((res) => res.json());
  return result;
};

export const postReservationInfo = (postObj) => {
  const result = fetch(`${RESERVATION_API}`, {
    method: "POST",
    headers: {
      Authorization: token,
    },
    body: JSON.stringify(postObj),
  });
  return result;
};

export const fetchReservationConfirmInfo = (methodType) => {
  const result = fetch(`${RESERVATION_API}/check`, {
    method: methodType,
    headers: {
      Authorization: token,
    },
  }).then((res) => res.json());
  return result;
};
