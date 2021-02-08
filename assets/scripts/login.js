import { Expenses } from './expenses.js';
import { listCategories } from './services/category_services.js';
import { login } from './services/session_services.js';
import { SignUp } from './signup.js';
import { STORE } from './store.js'

export function Login(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render() {
      const html = `
        <section>
          <h2>Login</h2>
          <form class='js-form-login'>
            <div>
              <label for="email">Email</label><br />
              <input type="email" id="email" name="email" placeholder="write here your email ...">
            </div>
            <div>
              <label for="password">Password</label><br />
              <input type="password" id="password" name="password" placeholder="write here your password ...">
            </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
          <a class='js-redirect-signup' href="#signup">Sign Up</a>
          </form>
        </section>
      ` 
      this.parent.innerHTML = html;
      this.addFormSubmitListener();
      this.renderSignUpView();
    },
    addFormSubmitListener() {
      const formButton = this.parent.querySelector('.js-form-login');
      formButton.addEventListener("submit", async (e)=>{
        e.preventDefault();
        if(e.target===formButton){
          try{
            const { email, password } = formButton
            const data = await login(email.value, password.value)
            sessionStorage.setItem('token', data.token)
            const categories = await listCategories();
            STORE.user = data
            STORE.expenses = categories.filter(category => category.transaction_type === 'expense');
            STORE.income = categories.filter(category => category.transaction_type === 'income');
            const expenses = Expenses(parentElement);
            expenses.render();
          } catch(e){
            console.log(e)
          }
        }
      })
    },
    renderSignUpView() {
      const trigger = this.parent.querySelector('.js-redirect-signup');
      trigger.addEventListener('click', (e) => {
        console.log(trigger)
        e.preventDefault();
        const signup = SignUp(parentElement);
        signup.render();
      })
    }
  }
}