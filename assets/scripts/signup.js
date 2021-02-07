export function SignUp(parentElement) {
  return {
    parent: document.querySelector(parentElement),
    render() {
      const html = `
        <section>
          <h2>Sign Up</h2>
          <form>
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
    },
    // renderLoginView() {
    //   const trigger = 
    // }
  };
}
