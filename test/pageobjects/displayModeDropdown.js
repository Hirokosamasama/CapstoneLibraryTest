import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';


class displayModeDropdown extends Base {

    get displayModeDropdownDefault () {
        return $('option[value="1"]'); 
    }

    get displayModeDropdownAccessibleTheme (){
        return $('option[value="4"]');
    }

    get displayModeDropdownAccessibleThemeSelected (){
        return $('option[value="4"][selected="selected"]');
    }

    get languagesDisplayMenu () {
        return $('#theme-selection-dropdown'); 
    }

    get displaySettingLabel () {
        return $('#myModalLabel'); 
    }

    get displayModeDropdownmenu (){
        return $('#preferredTheme')
    }

    get updateDisplaySetting (){
        return $('#updateDisplaySettings')
    }

    get menuBand (){
        return $('[class="menu-section menu-section-left"]')
    }

    get closeButtonLD () {
        return $('button[class="btn btn-default modalClose"]'); 
    }

    async testdisplaymodeDropdownAccessibleTheme() {
        await this.open();
        await expect(this.languagesDisplayMenu).toBeExisting();
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
        await this.displayModeDropdownmenu.click();
        await this.displayModeDropdownAccessibleTheme.click();
        await this.updateDisplaySetting.click();
        await this.closeButtonLD.click();
        await this.languagesDisplayMenu.click();
        //await this.displayModeDropdownmenu.click();
        await expect(this.displayModeDropdownAccessibleThemeSelected).toBeExisting();
        const color = await this.menuBand.getCSSProperty('color');
        await expect(color.parsed.hex).toBe('#000000')
    }


    open () {
        return super.open();//calling base url
    } 

}

export default new displayModeDropdown();