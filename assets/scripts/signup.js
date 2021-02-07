import { Login } from "./login.js";
import { signUp } from './services/user_services.js';
import { Main } from './main.js';

export function SignUp(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render() {
      const html = `
        <section>
          <h2>Sign Up</h2>
          <form class="js-form-signup">
            <div>
              <label for="email">Email</label><br />
              <input type="email" id="email" name="email">
            </div>
            <div>
              <label for="password">Password</label><br />
              <input type="password" id="password" name="password">
            </div>
            <div>
              <label for="first_name">First name</label><br />
              <input type="text" id="first_name" name="first_name">
            </div>
            <div>
              <label for="last_name">Last name</label><br />
              <input type="text" id="last_name" name="last_name">
            </div>
            <div>
              <label for="phone">Phone</label><br />
              <input type="text" id="phone" name="phone">
            </div>
            <div>
              <button type="submit">Submit</button>
            </div>
            <a class="js-redirect-login" href="#">Login</a>
          </form>
        </section>
      `;
      this.parent.innerHTML = html;
      this.addFormSubmitListener();
      this.renderLoginView();
    },
    addFormSubmitListener() {
      const form = this.parent.querySelector(".js-form-signup");
      console.log(form)
      form.addEventListener("submit", async (e) => {
        e.preventDefault();
        try {
          const { email, password, first_name, last_name, phone } = form;
          const data = await signUp(
            email.value,
            password.value,
            first_name.value,
            last_name.value,
            phone.value
          );
          STORE.user = data;
          console.log(STORE.user);
          const main = Main(parentElement);
          main.render();
        } catch (e) {
          console.log(e);
        }
      });
    },
    renderLoginView() {
      const trigger = this.parent.querySelector(".js-redirect-login");
      trigger.addEventListener("click", (e) => {
        e.preventDefault();
        const login = Login(parentElement);
        login.render();
      });
    },
  };
}
