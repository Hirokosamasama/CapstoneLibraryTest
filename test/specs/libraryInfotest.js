import LibraryInfo from '../pageobjects/libraryInfo.js'

describe('Library Info menu functionality test', () => {
    it('should show dropdown menu', async () => {
        await LibraryInfo.testLibraryInfoMenu();
        await LibraryInfo.testdropdownMenuOptions();
    })
})
