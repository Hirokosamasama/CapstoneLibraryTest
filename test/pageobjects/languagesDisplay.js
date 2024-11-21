import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';
// import LibraryInfo from '../pageobjects/libraryInfo.js';
import { browser } from '@wdio/globals';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LanguagesDisplay {
    /**
     * define selectors using getter methods
     */
    get languagesDisplayMenu () {
        return $('#theme-selection-dropdown'); 
    }

    get closeButton () {
        return $('i[class="fas fa-times"]'); 
    }

    get displaySettingLabel () {
        return $('#myModalLabel'); 
    }

    get languageToDisplayCatalogIn(){
        return 
    }

    get preferredLanguageDropdownmenu () {
        return $('#preferredLanguage'); 
    }

    get optionLanguageEn () {
        return $('#preferredLanguage option[value="en"]'); 
    }

    get optionLanguageEs () {
        return $('#preferredLanguage option[value="es"]'); 
    }

   /* async testLanguagesDisplayMenu() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await expect(this.languagesDisplayMenu).toBeExisting();
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
    }

    async testCloseButton() {
        await this.closeButton.click();
        await expect(this.displaySettingLabel).not.toBeExisting();
    }*/



   
    

   





 //test for hamburger menu exist and shopping cart exist, postive test, Functional Test
// async testHamburgermenu(){
//     await this.open()
//     await LoginPage.login('standard_user', 'secret_sauce');
//     await expect(this.shoppingCart).toBeExisting();
//     await this.openHamburgerMenu();
//     await expect(this.allItemsLink).toBeExisting();
//     await expect(this.aboutLink).toBeExisting();
//     await expect(this.logoutLink).toBeExisting();
//     await expect(this.resetAppStateLink).toBeExisting();
// }



 

 


}
export default new LanguagesDisplay();