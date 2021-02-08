import { Main } from "./main.js"

export function Profile(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render() {
      const html = `
      <h5>Estas en Profile</h5>
      `
      Main(parentElement, html).render();
    }
  }
}