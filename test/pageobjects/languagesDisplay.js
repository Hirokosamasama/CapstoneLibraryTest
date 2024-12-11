import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';

class LanguagesDisplay extends Base {

    get languageToDisplayCatalogIn(){
        return 
    }

    get preferredLanguageDropdownmenu () {
        return $('#preferredLanguage'); 
    }

    get searchSource(){
        return $('#searchSource');
    }

    optionLanguageSelected(lang){
        return $(`option[value="${lang}"][selected="selected"]`)
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
        selected = this.optionLanguageSelected(lang);
        if (lang == this.spanish) {
            language = this.optionLanguage(this.english);
        } else {
            language = this.optionLanguage(this.spanish);
        }
        await expect(selected).toBeExisting();
        await language.click();
        await this.updateDisplaySetting.click();
    }

    async testLanguageDisplayCloseButton(lang) {
        let text;
        if (lang == this.spanish) {
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
        const languages = [{drop: this.english, close: this.spanish}, {drop: this.spanish, close: this.english}]
        for (const lang of languages) {
            await this.testLanguageDisplayMenu();
            await this.testLanguageDisplayDropdown(lang.drop); 
            await this.testLanguageDisplayCloseButton(lang.close); 
        }
    }
}

export default new LanguagesDisplay();
