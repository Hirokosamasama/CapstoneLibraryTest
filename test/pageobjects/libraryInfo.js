import { $ } from '@wdio/globals'
import Base from '../pageobjects/base.js';


class LibraryInfo extends Base {
    
    get libraryHeaderLogo () {
        return $('#header-logo');   
    }

    get libraryInfoMenu () {
        return $('#library_info-menu-trigger');     
    }

    get dropdownMenu () {
        return $('.dropdown-menu'); 
    }

    get faqsLink () {
        return $('=FAQs'); 
    }
    
    get artCenterPassesLink () {
        return $('a[href="https://oremlibrary.org/general-reference/nacpasses/"]'); 
    }
    
    get bookGroupSetsLink () {
        return $('a[href="/bookgroup"]');
    }
    
    get helpAndHowTosLink () {
        return $('a[href="/howto"]');
    }

    get interlibraryLoanLink () {
        return $('a[href="/ill"]');
    }

    get libraryCardsAccountLink () {
        return $('[aria-label="Library Cards & Accounts (opens in a new window)"]');
    }

    get libraryHallLink(){
        return $("//div[@id='library_info-menu']//a[@aria-label='Library Hall (opens in a new window)']")
    }

    get makerspaceLink(){
        return $('[aria-label="Makerspace (opens in a new window)"]')
    }

    get percLink(){
        return $('[aria-label="PERC (opens in a new window)"]')
    }

    get policiesLink(){
        return $('[aria-label="Policies (opens in a new window)"]')
    }

    get purchaseRequestsLink(){
        return $('[aria-label="Purchase Requests (opens in a new window)"]')
    }

    get stateLibraryBookLink(){
        return $('[aria-label="State Library Book Buzz (opens in a new window)"]')
    }

    get volunteerLink(){
        return $('[aria-label="Volunteer (opens in a new window)"]')
    }

    async testLibraryInfoMenu() {
        await this.libraryURL();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await expect(this.libraryInfoMenu).toBeExisting();
        await this.libraryInfoMenu.click();
        await expect(this.dropdownMenu).toBeExisting();
    }

    dropdownMenuOptions = [
        {options: 'FAQs', selector: () => this.faqsLink, url: 'https://library.orem.gov/libraryfaq'},
        {options: 'Art Center Passes', selector: () => this.artCenterPassesLink, url: 'https://oremlibrary.org/general-reference/nacpasses/'},
        {options: 'Book Group Sets', selector: () => this.bookGroupSetsLink, url: 'https://library.orem.gov/bookgroup'},
        {options: 'Help & How Tos', selector: () => this.helpAndHowTosLink, url: 'https://library.orem.gov/howto'},
        {options: 'Interlibrary Loan', selector: () => this.interlibraryLoanLink, url: 'https://library.orem.gov/ill'},
        {options: 'Library Cards & Accounts', selector: () => this.libraryCardsAccountLink, url: 'https://library.orem.gov/librarycardsandaccounts'},
        {options: 'Library Hall', selector: () => this.libraryHallLink, url: 'https://library.orem.gov/LibraryHall'},
        {options: 'Makerspace', selector: () => this.makerspaceLink, url: 'https://library.orem.gov/makerspace'},
        {options: 'PERC', selector: () => this.percLink, url: 'https://library.orem.gov/PERC'},
        {options: 'Policies', selector: () => this.policiesLink, url: 'https://library.orem.gov/policy'},
        {options: 'Purchase Requests', selector: () => this.purchaseRequestsLink, url: 'https://library.orem.gov/purchaserequests'},
        {options: 'State Library Book Buzz', selector: () => this.stateLibraryBookLink, url: 'https://library.orem.gov/WebBuilder/WebResource?id=86'},
        {options: 'Volunteer', selector: () => this.volunteerLink, url: 'https://library.orem.gov/volunteering'}
    ];

    async testdropdownMenuOptions() {
        for (const optionInfo of this.dropdownMenuOptions) {
            await this.libraryInfoMenu.waitForDisplayed({ timeout: 5000 });
            await this.libraryInfoMenu.click();
            await optionInfo.selector().waitForDisplayed({ timeout: 3000 });
            await optionInfo.selector().moveTo();
            await optionInfo.selector().click();
            expect(browser).toHaveUrl(optionInfo.url);
            if (optionInfo.options == 'Art Center Passes'){
                browser.switchWindow('library.orem.gov');
            }
        }
    }
}

export default new LibraryInfo();

