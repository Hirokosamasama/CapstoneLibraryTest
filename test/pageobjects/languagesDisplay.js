import { $ } from '@wdio/globals'
import Base from './base.js';
import LibraryInfo from './libraryInfo.js';
import { browser } from '@wdio/globals';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LanguagesDisplay extends Base {
    /**
     * define selectors using getter methods
     */
    get shoppingCart () {
        return $('a.shopping_cart_link'); //fill "#flash" with css "" if it is correct password
    }

   
    

   





 //test for hamburger menu exist and shopping cart exist, postive test, Functional Test
async testHamburgermenu(){
    await this.open()
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.allItemsLink).toBeExisting();
    await expect(this.aboutLink).toBeExisting();
    await expect(this.logoutLink).toBeExisting();
    await expect(this.resetAppStateLink).toBeExisting();
}



 

 


}
export default new LanguagesDisplay();