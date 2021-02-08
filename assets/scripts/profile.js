import { Main } from "./main.js"

export function Profile(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render() {
      const html = `
        
      `
      Main(parentElement, html).render();
    }
  }
}