import { $ } from '@wdio/globals'
import Base from './base.js';
import LaungDisplay from './launguagesDisplay.js';

class LoginPage extends Base {
    
    get inputUsername () {
        return $('#user-name');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        return $('#login-button');
    }

    get getError () {
        return $('h3[data-test="error"]');
    }
    get shoppingCart (){
        return $('a.shopping_cart_link');
    }

   

    
    open () {
        return super.open();
    }
}

export default new LoginPage();

