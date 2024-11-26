import { expect } from '@wdio/globals'
import LanguagesDisplay from '../pageobjects/languagesDisplay.js';



describe('Language display English and Spanish test', () => {
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
})