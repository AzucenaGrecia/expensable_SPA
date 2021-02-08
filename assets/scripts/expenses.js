import { Main } from "./main.js"
import { STORE } from "./store.js";
import { createCategory, deleteCategory } from './services/category_services.js';

export function Expenses(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render() {
     const html= `
        <ul>
          ${STORE.expenses.map(expense => this.renderExpenses(expense)).join('')}
          <form class="js-form-expense">
            <input type="text" name="name" placeholder="Category name...">
            <button type="submit">Create</button>
          </form>
        </ul>
        `
      Main(parentElement, html).render();
      this.addFormSubmitListener();
      this.addClickDeleteListener();
    },
    renderExpenses(expense) {
      return `
        <li class="js-category-card category_card" data-id="${expense.id}">
          <h5 class="category_card__title">${expense.name}</h5>
          <div class="category_card__content">
            <h5 class="category_card__content--price">$${expense.transactions.reduce((acc, curr) => acc + curr.amount, 0)}</h5>
            <i class="js-trash material-icons">delete</i>
          </div>
        </li>
      `
    },
    addFormSubmitListener() {
      const form = this.parent.querySelector('.js-form-expense');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
          const { name } = form
          const data = await createCategory(name.value, 'expense');
          STORE.expenses = [...STORE.expenses, data]
          this.render();
        } catch (e) {
          console.log(e);
        }
      })
    },
    addClickDeleteListener() {
      const trashes = this.parent.querySelectorAll('.js-trash')
      trashes.forEach(trash => {
        trash.addEventListener('click', async (e) => {
          if(e.target === trash) {
            try {
              const categoryId = parseInt(trash.closest('.js-category-card').dataset.id)
              await deleteCategory(categoryId)
              STORE.expenses = STORE.expenses.filter(expense => expense.id !== categoryId)
              this.render();
            } catch (e) {
              console.log(e)
            }
          }
        })
      })
    }
  }
}
