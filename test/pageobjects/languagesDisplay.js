import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';
// import LibraryInfo from '../pageobjects/libraryInfo.js';
import { browser } from '@wdio/globals';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LanguagesDisplay extends Base {
    /**
     * define selectors using getter methods
     */
    get languagesDisplayMenu () {
        return $('#theme-selection-dropdown'); 
    }

    get closeButtonLD () {
        return $('button[class="btn btn-default modalClose"]'); 
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
        return $('option[value="en"]'); 
    }
    
    get optionLanguageEs () {
        return $('option[value="es"]'); 
    }

    get optionLanguageEnSelected () {
        return $('option[value="en"][selected="selected"]'); 
    }

    get optionLanguageEsSelected () {
        return $('option[value="es"][selected="selected"]'); 
    }

    get updateDisplaySetting (){
        return $('#updateDisplaySettings')
    }

    get searchSource(){
        return $('#searchSource')
    }

    async testLanguageDisplayMenu() {
        await this.open();
        await expect(this.languagesDisplayMenu).toBeExisting();
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
    }

    async testLanguageDisplayDropdown(lang) {//in the loop, it runs twice, see the test page, one is for if, one is for else.
        let selected;
        let language;
        if (lang == 'es') {
            selected = this.optionLanguageEsSelected;
            language = this.optionLanguageEn;
        } else {
            selected = this.optionLanguageEnSelected;
            language = this.optionLanguageEs;
        }
        await expect(selected).toBeExisting();
        await language.click();
        await this.updateDisplaySetting.click();
    }

    async testLanguageDisplayCloseButton(lang) {
        let text;
        if (lang == 'es') {
            text = 'en Catálago bibliotecario';
        } else {
            text = 'in Library Catalog';
        }
        await expect(this.displaySettingLabel).not.isDisplayed;
        await this.closeButtonLD.click();
        await expect(this.searchSource).toHaveText(
            expect.stringContaining(text))
    }


    open () {
        return super.open();//calling base url
    } 
   
    

   





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