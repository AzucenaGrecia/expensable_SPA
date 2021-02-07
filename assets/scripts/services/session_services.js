import { BASE_URL, apiFetch } from "./api_fetch.js";

export function login(email, password) {
  return apiFetch(`${BASE_URL}/login`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
  })
}

export function logout() {
  return apiFetch(`${BASE_URL}/logout`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    }
  })
}
