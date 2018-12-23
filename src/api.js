import { API_URL } from "./config";

export const getUserItems = (userId, amt = 8, seen = []) => {
  const seenParams = seen.reduce((params, item, index) => {
    return index === 0 ? `&seen=${item.id}` : `${params}&seen=${item.id}`;
  }, "");

  return fetch(
    `${API_URL}/users/${userId}/items?amt=${amt}${seenParams || ""}`
  ).then(res => res.json());
};

export const rateUserItem = (userId, itemId, rating) => {
  return fetch(`${API_URL}/users/${userId}/items/${itemId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ rating })
  });
};
