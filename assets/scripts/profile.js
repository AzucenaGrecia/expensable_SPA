import { Main } from "./main.js"
import { STORE } from "./store.js";
import { updateUser } from './services/user_services.js'
import { Expenses } from "./expenses.js";

export function Profile(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render() {
      const html = `
      <form class="js-form-profile">
      <div>
        <label for="email">Email</label><br />
        <input type="email" id="email" name="email" value="${STORE.user.email}">
      </div>
      <div>
        <label for="first_name">First name</label><br />
        <input type="text" id="first_name" name="first_name" value="${STORE.user.first_name}">
      </div>
      <div>
        <label for="last_name">Last name</label><br />
        <input type="text" id="last_name" name="last_name" value="${STORE.user.last_name}">
      </div>
      <div>
        <label for="phone">Phone</label><br />
        <input type="text" id="phone" name="phone" value="${STORE.user.phone}">
      </div>
      <button type="submit">Update</button>
    </form>
      `
      Main(parentElement, html).render();
      this.addFormSubmitListener();
    },
    addFormSubmitListener() {
      const form = this.parent.querySelector('.js-form-profile');
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        try {
          const { email, first_name, last_name, phone} = form;
          const data = await updateUser(email.value, first_name.value, last_name.value, phone.value);
          STORE.user = data; 
          const expenses = Expenses(parentElement);
          expenses.render();
        } catch (e) {
          console.log(e)
        }
      }) 
    }
  }
}