import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LanguagesDisplay extends Base {

    get languageToDisplayCatalogIn(){
        return 
    }

    get preferredLanguageDropdownmenu () {
        return $('#preferredLanguage'); 
    }

    get optionLanguageEnSelected () {
        return $('option[value="en"][selected="selected"]'); 
    }

    get optionLanguageEsSelected () {
        return $('option[value="es"][selected="selected"]'); 
    }

    get searchSource(){
        return $('#searchSource')
    }

    async testLanguageDisplayMenu() {
        await this.libraryURL();
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

    async testLanguageDisplayEnglishAndSpanish(){
        const spanish = 'es'
        const english = 'en'
        const languages = [{drop: english, close: spanish}, {drop: spanish, close: english}]//Eng to Spanish, and Spanish to English
        for (const lang of languages) {
            await this.testLanguageDisplayMenu();//Language Display test
            await this.testLanguageDisplayDropdown(lang.drop); //expected language => new language run twoice
            await this.testLanguageDisplayCloseButton(lang.close); //new language text, verify and close
        }
    }

}
export default new LanguagesDisplay();