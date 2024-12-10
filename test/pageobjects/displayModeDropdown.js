import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';


class displayModeDropdown extends Base {

    get displayModeDropdownDefault () {
        return $('option[value="1"]'); 
    }

    get displayModeDropdownAccessibleTheme (){
        return $('option[value="4"]');
    }

    get displayModeDropdownDarkTheme (){
        return $('option[value="3"]');
    }

    get displayModeDropdownAccessibleThemeselected (){
        return $('option[value="4"][selected="selected"]');
    }

    get displayModeDropdownDarkThemeselected (){
        return $('option[value="3"][selected="selected"]');
        
    }

    get displayModeDropdownDefaultselected (){
        return $('option[value="1"][selected="selected"]');
    
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
        {dmoptions: 'Dark Theme', selector: () => this.displayModeDropdownDarkTheme, color: '#cae7fd'},
        {dmoptions: 'Accessible Theme', selector: () => this.displayModeDropdownAccessibleTheme, color: '#000000'},
        {dmoptions: 'Default', selector: () => this.displayModeDropdownDefault, color: '#ffffff'}//no comma needed
    ]
    
    async testdisplaymodeDropdown() {
        //await this.open();
        for (const dmoptionInfo of this.displayModeoptions) {//loop commends
            await this.languagesDisplayMenu.click();
            //await browser.pause(3000)
            await expect(this.displaySettingLabel).toBeExisting();
            await this.displayModeDropdownmenu.click();
            await dmoptionInfo.selector().waitForDisplayed({ timeout: 3000 });
            //await dmoptionInfo.selector().moveTo();
            await dmoptionInfo.selector().click();
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
