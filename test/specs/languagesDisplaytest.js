import LanguagesDisplay from '../pageobjects/languagesDisplay.js';
import displayModeDropdown from '../pageobjects/displayModeDropdown.js';


describe('Language display English and Spanish test', () => {
    it('English or Spanish', async () => {
        await LanguagesDisplay.testLanguageDisplayEnglishAndSpanish();
    })
})

describe('Display Mode Dropdown Menu test', () => {
    it('DropDown Theme', async () => {
        await displayModeDropdown.testdisplaymodeDropdown();
        await displayModeDropdown.testdisplaymodeDropdownSpanish();
    })
})