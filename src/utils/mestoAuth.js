export const BASE_URL = "https://auth.nomoreparties.co";

// регистрация пользователя
export const register = (password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  }).then((response) => response.json());
};
