import { Main } from "./main.js"

export function Expenses(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render() {
     const html= `
        <h5>Estas en Expenses</h5>
        `
      Main(parentElement, html).render();
    }
  }
}
