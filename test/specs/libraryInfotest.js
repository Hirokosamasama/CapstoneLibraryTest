import { expect } from '@wdio/globals'
import LibraryInfo from '../pageobjects/libraryInfo.js'
import LanguagesDisplay from '../pageobjects/languagesDisplay.js'
/*import DropDownMenu from '../pageobjects/dropdownMenu.js' */


describe('Library Info menu functionality test', () => {
    it('should show dropdown menu', async () => {
        await LibraryInfo.testLibraryInfoMenu();
        await LibraryInfo.testFaqsLink();
        await LibraryInfo.testHamburgerMenuDropdown();
        await LibraryInfo.testSearchBox();
        await LibraryInfo.testNegativeSignIn('','');
        await LibraryInfo.testNegativeSignIn2('23005001893348','');
        await LibraryInfo.testNegativeSignIn3('jjjj','')
        await LibraryInfo.testSignInCloseButton();
        await LibraryInfo.testPositiveSignIn('23005001893348','4710');
        await LibraryInfo.testArtCenterPassesLink();
    })
})
