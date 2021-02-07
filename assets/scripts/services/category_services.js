import { BASE_URL, apiFetch } from "./api_fetch.js";

export function listCategories() {
  return apiFetch(`${BASE_URL}/categories`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    }
  })
}

export function createCategory(name, transaction_type) {
  return apiFetch(`${BASE_URL}/categories`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({ name, transaction_type })
  })
}

export function showCategory(categoryId) {
  return apiFetch(`${BASE_URL}/categories/${categoryId}`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    }
  })
}

export function deleteCategory(categoryId) {
  return apiFetch(`${BASE_URL}/categories/${categoryId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    }
  })
}