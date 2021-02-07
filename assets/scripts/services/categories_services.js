import { BASE_URL, apiFetch } from "./api_fetch.js";

export function listCategories() {
  return apiFetch(`${BASE_URL}/categories`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    }
  })
}

export function createCategory() {
  return apiFetch(`${BASE_URL}/categories`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: ``
    }
  })
}