import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';

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
        return $('#searchSource');
    }

    async testLanguageDisplayMenu() {
        await this.libraryURL();
        await expect(this.languagesDisplayMenu).toBeExisting();
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
    }

    async testLanguageDisplayDropdown(lang) {
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
        const languages = [{drop: english, close: spanish}, {drop: spanish, close: english}]
        for (const lang of languages) {
            await this.testLanguageDisplayMenu();
            await this.testLanguageDisplayDropdown(lang.drop); 
            await this.testLanguageDisplayCloseButton(lang.close); 
        }
    }
}

export default new LanguagesDisplay();
