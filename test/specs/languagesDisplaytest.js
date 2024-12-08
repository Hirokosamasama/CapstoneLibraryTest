import { expect } from '@wdio/globals'
import LanguagesDisplay from '../pageobjects/languagesDisplay.js';
import displayModeDropdown from '../pageobjects/displayModeDropdown.js';


describe('Language display English and Spanish test', () => {
    it('English or Spanish', async () => {
        const spanish = 'es'
        const english = 'en'
        const languages = [{drop: english, close: spanish}, {drop: spanish, close: english}]//Eng to Spanish, and Spanish to English
        for (const lang of languages) {
            await LanguagesDisplay.testLanguageDisplayMenu();//Language Display test
            await LanguagesDisplay.testLanguageDisplayDropdown(lang.drop); //expected language => new language run twoice
            await LanguagesDisplay.testLanguageDisplayCloseButton(lang.close); //new language text, verify and close
        }
    })
})




/*describe('Language display English and Spanish test', () => {
    it('English or Spanish', async () => {
        const spanish = 'es'
        const english = 'en'
        await LanguagesDisplay.testLanguageDisplayMenu();
        await LanguagesDisplay.testLanguageDisplayDropdown(english); //expect English to be selected -- change to Spanish
        await LanguagesDisplay.testLanguageDisplayCloseButton(spanish); //expect Spanish text
        await LanguagesDisplay.testLanguageDisplayMenu();
        await LanguagesDisplay.testLanguageDisplayDropdown(spanish); //expect Spanish to be selected -- change to English
        await LanguagesDisplay.testLanguageDisplayCloseButton(english); //expect English text
    })
})*/

describe('Display Mode Dropdown Menu test', () => {
    it('DropDown Theme', async () => {
        await displayModeDropdown.testdisplaymodeDropdown();
        await displayModeDropdown.testdisplaymodeDropdownSpanish();
        /*await displayModeDropdown.testdisplaymodeDropdownDarkTheme();
        await displayModeDropdown.testdisplaymodeDropdownAccessibleTheme();
        await displayModeDropdown.testdisplaymodeDropdownDefault();*/
    })
})