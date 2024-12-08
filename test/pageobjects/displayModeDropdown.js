import { $, browser } from '@wdio/globals'
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
        //return $('#preferredTheme')
    }

    get displayModeDropdownDefaultselected (){
        return $('option[value="1"][selected="selected"]');
        //return $('#preferredTheme')
    }

    get languagesDisplayMenu () {
        return $('#theme-selection-dropdown'); 
    }

    get displaySettingLabel () {
        return $('#myModalLabel'); 
    }

    get optionLanguageEn () {
        return $('option[value="en"]'); 
    }
    
    get optionLanguageEs () {
        return $('option[value="es"]'); 
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

    displayModeoptions = [
        {dmoptions: 'Dark Theme', selector: () => this.displayModeDropdownDarkTheme, color: '#cae7fd'},
        {dmoptions: 'Accessible Theme', selector: () => this.displayModeDropdownAccessibleTheme, color: '#000000'},
        {dmoptions: 'Default', selector: () => this.displayModeDropdownDefault, color: '#ffffff'}//no comma needed
    ]
    
    async testdisplaymodeDropdown() {
        //await this.open();
        for (const dmoptionInfo of this.displayModeoptions) {//loop commends
            console.log('Processing ' + dmoptionInfo.dmoptions)//info for loop
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
    
    open () {
        return super.open();//calling base url
    } 

}

export default new displayModeDropdown();

    /*async testdisplaymodeDropdownAccessibleTheme() {
        await this.open();
        await expect(this.languagesDisplayMenu).toBeExisting();
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
        await this.displayModeDropdownmenu.click();
        await this.displayModeDropdownAccessibleTheme.waitForDisplayed({ timeout: 3000 })
        await this.displayModeDropdownAccessibleTheme.moveTo();
        await this.displayModeDropdownAccessibleTheme.click();
        await this.updateDisplaySetting.click();
        await browser.refresh()
        await this.languagesDisplayMenu.click();
        await this.closeButtonLD.click();
        await this.menuBand.moveTo()
        //await this.displayModeDropdownmenu.click();
        ////await this.displayModeDropdownAccessibleThemeselected.waitForDisplayed({ timeout: 3000 });
        ////await expect(this.displayModeDropdownAccessibleThemeselected).toBeExisting();
        ////await this.closeButtonLD.click();
        const color = await this.menuBand.getCSSProperty('color');
        await expect(color.parsed.hex).toBe('#000000')
    }*/

   



    /*async testdisplaymodeDropdownDarkTheme() {
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
        await this.displayModeDropdownmenu.click();
        await this.displayModeDropdownDarkTheme.waitForDisplayed({ timeout: 3000 })
        await this.displayModeDropdownDarkTheme.moveTo();
        await this.displayModeDropdownDarkTheme.click();
        await this.updateDisplaySetting.click();
        await this.closeButtonLD.click();
        await this.menuBand.moveTo()
        //await browser.refresh()
        await this.languagesDisplayMenu.click();
        //await this.displayModeDropdownmenu.click();
        ////await this.displayModeDropdownDarkThemeselected.waitForDisplayed({ timeout: 3000 });
        ////await expect(this.displayModeDropdownDarkThemeselected).toBeExisting();
        ////await this.closeButtonLD.click();
        const color = await this.menuBand.getCSSProperty('color');
        await expect(color.parsed.hex).toBe('#cae7fd')
    }*/



     /*async testdisplaymodeDropdownDefault() {
        await this.languagesDisplayMenu.click();
        await expect(this.displaySettingLabel).toBeExisting();
        await this.displayModeDropdownmenu.click();
        await this.displayModeDropdownDefault.waitForDisplayed({ timeout: 3000 })
        await this.displayModeDropdownDefault.moveTo();
        await this.displayModeDropdownDefault.click();
        await this.updateDisplaySetting.click();
        await this.closeButtonLD.click();
        await this.menuBand.moveTo()
        //await browser.refresh()
        await this.languagesDisplayMenu.click();
        ////await this.displayModeDropdownmenu.click();
        ////await this.displayModeDropdownDefaultselected.waitForDisplayed({ timeout: 5000 });
        ////await expect(this.displayModeDropdownDefaultselected).toBeExisting();
        ////await this.closeButtonLD.click();
        const color = await this.menuBand.getCSSProperty('color');
        await expect(color.parsed.hex).toBe('#ffffff')
    }*/

    /*async testdisplaymodeDropdownAccessibleTheme(theme) {
        let selected;
        let theme;
        if (theme == '4') {
            selected = this.displayModeDropdownAccessibleThemeselected;
            theme = this.displayModeDropdownAccessibleTheme;
         } else if {
            selected = this.displayModeDropdownDarkThemeselected;
            theme = this.displayModeDropdownDarkTheme;
        }   
        } else {
            selected = this.displayModeDropdownDefaultselected;
            language = this.displayModeDropdownDefault;
        }
        await expect(selected).toBeExisting();
        await updateDisplaySetting.click();
        await this.closeButtonLD.click();
        const color = await this.menuBand.getCSSProperty('color');
        await expect(color.parsed.hex).toBe('#000000')
    }*/

     /*async testdisplaymodeDropdownDarkTheme(theme) {
        let selected;
        let theme;
        if (theme == '3') {
            selected = this.displayModeDropdownDarkThemeselected;
            theme = this.displayModeDropdownDarkTheme;
         } else if {
            selected = this.displayModeDropdownAccessibleThemeselected;
            theme = this.displayModeDropdownAccessibleTheme;
        }   
        } else {
            selected = this.displayModeDropdownDefaultselected;
            language = this.displayModeDropdownDefault;
        }
        await expect(selected).toBeExisting();
        await updateDisplaySetting.click();
        await this.closeButtonLD.click();
        const color = await this.menuBand.getCSSProperty('color');
        await expect(color.parsed.hex).toBe('#cae7fd')
    }*/

    /*async testdisplaymodeDropdownDefault(theme) {
        let selected;
        let theme;
        if (theme == '1') {
            selected = this.displayModeDropdownDefaultSelected;
            theme = this.displayModeDropdowndefault;
         } else if {
            selected = this.displayModeDropdownDarkThemeSelected;
            theme = this.displayModeDropdownDarkTheme;
        }   
        } else {
            selected = this.displayModeDropdownAccessibleThemeselected;
            language = this.displayModeAccessibleTheme;
        }
        await expect(selected).toBeExisting();
        await updateDisplaySetting.click();
        await this.closeButtonLD.click();
        const color = await this.menuBand.getCSSProperty('color');
        await expect(color.parsed.hex).toBe('#ffffff') 
    }*/


    