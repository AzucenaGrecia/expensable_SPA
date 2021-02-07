import { Login } from './assets/scripts/login.js';

function init() {
  const login = Login('.js-content')
  if(sessionStorage.getItem('token')) {
    //
  }else {
    login.render()
  }
}

init()