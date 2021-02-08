import { BASE_URL, apiFetch } from "./api_fetch.js";

export function signUp(email, password, first_name, last_name, phone) {
  return apiFetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password, first_name, last_name, phone })
  })
}

export function showUser() {
  return apiFetch(`${BASE_URL}/profile`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    }
  })
}

export function updateUser(email, first_name, last_name, phone) {
  return apiFetch(`${BASE_URL}/profile`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({ email, first_name, last_name, phone })
  })
}