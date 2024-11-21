import { expect } from '@wdio/globals'
import LibraryInfo from '../pageobjects/libraryInfo.js'
import LanguagesDisplay from '../pageobjects/languagesDisplay.js'
/*import DropDownMenu from '../pageobjects/dropdownMenu.js' */


describe('Library Info menu functionality test', () => {
    it('should show dropdown menu', async () => {
        await LibraryInfo.testLibraryInfoMenu();
        await LibraryInfo.testFaqsLink();
    })
})
