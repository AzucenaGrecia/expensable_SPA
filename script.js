import { Login } from './assets/scripts/login.js';
import { listCategories } from './assets/scripts/services/category_services.js';
import { showUser } from './assets/scripts/services/user_services.js';
import { STORE } from './assets/scripts/store.js';
import { Expenses } from "./assets/scripts/expenses.js";

async function init() {
  const login = Login('.js-content');
  const expenses = Expenses('.js-content');
  if (sessionStorage.getItem('token')) {
    try {
      const categories = await listCategories();
      STORE.user =  await showUser();
      STORE.expenses = categories.filter(category => category.transaction_type === 'expense');
      STORE.income = categories.filter(category => category.transaction_type === 'income');
      expenses.render();
    }catch(e) {
      if (e.message === 'Access denied') {
        sessionStorage.removeItem('token');
        login.render();
      }
    }
  } else {
    login.render();
  }
}

init()