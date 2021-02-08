import { Expenses } from "./expenses.js";
import { Login } from "./login.js";
import { STORE } from "./store.js";
import { Profile } from './profile.js';
import { Income } from './income.js';
import { logout } from "./services/session_services.js";

export function Main(parentElement, content) {
  return{
    parent: document.querySelector(parentElement),
    render() {
      const html=`
      <h2>Expensable</h2>
      <a class='js-redirect-logout' href="#logout">Logout</a>
      <a data-value="expenses" class="js-tab tab" href="#test">Expenses</a>
      <a data-value="income" class="js-tab tab" href="#test">Income</a>
      <a data-value="profile" class="js-tab tab" href="#test">Profile</a>
      <section>
      ${content}
      </section>
      `;
      this.parent.innerHTML = html;
      this.addEventClickExpenses();
      this.addEventClickLogout();
    },
    addEventClickExpenses: function () {
      const tabs = this.parent.querySelectorAll(".js-tab")
      tabs.forEach(tab => {
        tab.addEventListener('click', e => {
          if(e.target === tab) {
            e.preventDefault();
            switch (tab.dataset.value) {
              case 'profile':
                Profile(parentElement).render();
                break;
              case 'income':
                Income(parentElement).render();
                break;
              case 'expenses':
                Expenses(parentElement).render();
                break;
            }
          }  
        })
      });
    },
    addEventClickLogout() {
      const trigger = this.parent.querySelector('.js-redirect-logout');
      trigger.addEventListener('click', async (e) => {
        e.preventDefault();
        try {
          await logout()
          sessionStorage.removeItem('token');
          STORE.user = {};
          STORE.expenses = [];
          STORE.income = [];
          const login = Login(parentElement);
          login.render();
        }catch(e) {
          console.log(e)
        }
      })
    }
  }
}