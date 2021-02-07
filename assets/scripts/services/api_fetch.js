export const BASE_URL = "http://localhost:3000";

export async function apiFetch(...args) {
  const response = await fetch(...args);
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.errors);
  }
  if (response.status !== 204) {
    const data = await response.json();
    return data;
  }
  return true;
}
