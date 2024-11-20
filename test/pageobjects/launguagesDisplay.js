import { $ } from '@wdio/globals'
import Base from './base.js';
import LibraryInfo from './libraryInfo.js';
import { browser } from '@wdio/globals';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LaungDisplay extends Base {
    /**
     * define selectors using getter methods
     */
    get shoppingCart () {
        return $('a.shopping_cart_link'); //fill "#flash" with css "" if it is correct password
    }

    get YourCart () {
        return $('[class="header_secondary_container"]');
    }
    // Selector for the Hamburger Menu button
    get hamburgerMenu() {
        return $('#react-burger-menu-btn');
    }

    

   

   


    // Function to open the Hamburger Menu
    async openHamburgerMenu() {
        await this.hamburgerMenu.click();
    }

    async clickclosehamburgerMenu() {
        await this.closehamburgerMenu.click();
    }


  

    

    async clickremoveBackpackButton() {
        await this.removeBackpackButton.click();
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

async testclosebutton(){
    await this.open()
    await LoginPage.login('standard_user', 'secret_sauce');
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.closehamburgerMenu).isDisplayed;
    await this.clickclosehamburgerMenu();
    await expect(this.closehamburgerMenu).not.isDisplayed;
}
async testShoppingCart(username, password) {
    await this.open();
    await LoginPage.login(username, password);
    await expect(this.shoppingCart).toBeExisting();
    await this.openShoppingCart();
    await expect(this.YourCart).toBeExisting();
 }

 async testAllItemsLink(username, password) {
    await this.open();
    await LoginPage.login(username, password);
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.allItemsLink).toBeExisting();
    await this.clickAllItemsLink();
    await expect(this.shoppingCart).toBeExisting();
 }
 async testAboutLink(username, password) {
    await this.open();
    await LoginPage.login(username, password);
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.aboutLink).toBeExisting();
    await this.clickAboutLink();
    await expect(this.searchIconAfterAbout).toBeExisting();
 }

 async testLogoutLink(username, password) {
    await this.open();
    await LoginPage.login(username, password);
    await expect(this.shoppingCart).toBeExisting();
    await this.openHamburgerMenu();
    await expect(this.logoutLink).toBeExisting();
    await this.clickLogoutLink();
    await expect(LoginPage.inputUsername).toBeExisting();
 }


}
export default new LaungDisplay();