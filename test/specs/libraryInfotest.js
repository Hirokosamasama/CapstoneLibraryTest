import { expect } from '@wdio/globals'
import LibraryInfo from '../pageobjects/libraryInfo.js'
import LanguagesDisplay from '../pageobjects/languagesDisplay.js'
/*import DropDownMenu from '../pageobjects/dropdownMenu.js' */


describe('Library Info menu functionality test', () => {
    it('should show dropdown menu', async () => {
        await LibraryInfo.testLibraryInfoMenu();
        await LibraryInfo.testFaqsLink();
        await LibraryInfo.testArtCenterPassesLink();
        await LibraryInfo.testBookGroupSetsLink();
        await LibraryInfo.testHelpAndHowTosLink();
        await LibraryInfo.testInterlibraryLoanLink();
        await LibraryInfo.testlibraryCardsAccountLink();
        await LibraryInfo.testlibraryHallLink();
       // await LibraryInfo.testmakerspaceLink();
       //await LibraryInfo.testpERCLink();
       //await LibraryInfo.testpoliciesLink();
       //await LibraryInfo.testpurchaseRequestLink();
       //await LibraryInfo.teststateLibraryBookLink();
       //await LibraryInfo.testvolunteerLink();
    })
})
