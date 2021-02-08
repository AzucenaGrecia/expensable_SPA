import { Main } from "./main.js"

export function Income(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render() {
      const html = `
      <h5>Estas en Income</h5>
      `
      Main(parentElement, html).render()
    }
  }
}