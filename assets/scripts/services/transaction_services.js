import { BASE_URL, apiFetch } from "./api_fetch.js";

export function listTransactions() {
  return apiFetch(`${BASE_URL}/categories/${categoryId}/transactions`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    }
  })
}

export function createTransaction(categoryId, amount, note, date) {
  return apiFetch(`${BASE_URL}/categories/${categoryId}/transactions`, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({ amount, note, date })
  })
}

export function showTransaciton(categoryId, transactionId) {
  return apiFetch(`${BASE_URL}/categories/${categoryId}/transactions/${transactionId}`, {
    method: 'GET',
    headers: {
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    }
  })
}

export function updateTransaction(categoryId, transactionId, amount, note, date) {
  return apiFetch(`${BASE_URL}/categories/${categoryId}/transactions/${transactionId}`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    },
    body: JSON.stringify({ amount, note, date })
  })
}

export function deleteTransaction(categoryId, transactionId) {
  return apiFetch(`${BASE_URL}/categories/${categoryId}/transactions/${transactionId}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${sessionStorage.getItem('token')}`
    }
  })
}