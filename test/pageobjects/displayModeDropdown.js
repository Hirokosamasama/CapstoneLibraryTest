import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';


class displayModeDropdown extends Base {

    get displaySettingLabel () {
        return $('#myModalLabel'); 
    }

    get displayModeDropdownmenu (){
        return $('#preferredTheme');
    }

    get menuBand (){
        return $('[class="menu-section menu-section-left"]');
    }

    displayModeDropdownTheme(value){
        return $(`option[value="${value}"]`); 
    }

    displayModeoptions = [
        {dmoptions: 'Dark Theme', color: '#cae7fd', value: '3'},
        {dmoptions: 'Accessible Theme', color: '#000000', value: '4'},
        {dmoptions: 'Default', color: '#ffffff', value: '1'}
    ]
    
    async testdisplaymodeDropdown() {
        for (const dmoptionInfo of this.displayModeoptions) {
            const value = dmoptionInfo.value;
            await this.languagesDisplayMenu.click();
            await expect(this.displaySettingLabel).toBeExisting();
            await this.displayModeDropdownmenu.click();
            await this.displayModeDropdownTheme(value).waitForDisplayed({ timeout: 3000 });
            await this.displayModeDropdownTheme(value).click();
            await this.updateDisplaySetting.click();
            await this.languagesDisplayMenu.click();
            await this.closeButtonLD.click();
            await this.menuBand.moveTo();
            const color = await this.menuBand.getCSSProperty('color');
            await expect(color.parsed.hex).toBe(dmoptionInfo.color);
        }
    }

    async testdisplaymodeDropdownSpanish() {
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
        await this.optionLanguage(this.spanish).click();
        await this.updateDisplaySetting.click();
        await this.testdisplaymodeDropdown();
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
        await this.optionLanguage(this.english).click();
    }
}

export default new displayModeDropdown();
