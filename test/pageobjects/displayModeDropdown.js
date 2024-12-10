import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';


class displayModeDropdown extends Base {

    displayModeDropdownTheme(value){
        return $(`option[value="${value}"]`); 
    }

    get displaySettingLabel () {
        return $('#myModalLabel'); 
    }

    get displayModeDropdownmenu (){
        return $('#preferredTheme')
    }

    get menuBand (){
        return $('[class="menu-section menu-section-left"]')
    }

    displayModeoptions = [
        {dmoptions: 'Dark Theme', selector: this.displayModeDropdownTheme, color: '#cae7fd', value: '3'},
        {dmoptions: 'Accessible Theme', selector: this.displayModeDropdownTheme, color: '#000000', value: '4'},
        {dmoptions: 'Default', selector: this.displayModeDropdownTheme, color: '#ffffff', value: '1'}//no comma needed
    ]
    
    async testdisplaymodeDropdown() {
        //await this.libraryURL();
        for (const dmoptionInfo of this.displayModeoptions) {//loop commends
            const value = dmoptionInfo.value;
            await this.languagesDisplayMenu.click();
            //await browser.pause(3000)
            await expect(this.displaySettingLabel).toBeExisting();
            await this.displayModeDropdownmenu.click();
            await dmoptionInfo.selector(value).waitForDisplayed({ timeout: 3000 });
            //await dmoptionInfo.selector(value).moveTo();
            await dmoptionInfo.selector(value).click();
            await this.updateDisplaySetting.click();
            //await browser.refresh()
            await this.languagesDisplayMenu.click();
            await this.closeButtonLD.click();
            await this.menuBand.moveTo();
            const color = await this.menuBand.getCSSProperty('color');
            await expect(color.parsed.hex).toBe(dmoptionInfo.color);
        }
    }

    async testdisplaymodeDropdownSpanish() {//change to Spanish, then call the loop test
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
        await this.optionLanguageEs.click();
        await this.updateDisplaySetting.click();
        await this.testdisplaymodeDropdown();
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
        await this.optionLanguageEn.click();//change back to English
    }
}

export default new displayModeDropdown();
