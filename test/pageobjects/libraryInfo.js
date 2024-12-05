import { $, browser } from '@wdio/globals'
import Base from '../pageobjects/base.js';
import LanguagesDisplay from './languagesDisplay.js';

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
    //return $('a[href="/libraryfaq"]'); 
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

    get pERCLink(){
        return $('[aria-label="PERC (opens in a new window)"]')
    }

    get policiesLink(){
        return $('[aria-label="Policies (opens in a new window)"]')
    }

    get purchaseRequestsLink(){
        return $('[aria-label="Purchase Requests (opens in a new window)"]')
    }

    get stateLibraryBookLink(){
        return $('[aria-label="State Library Book (opens in a new window)"]')
    }

    get volunteerLink(){
        return $('[aria-label="Volunteer (opens in a new window)"]')
    }

    

    async testLibraryInfoMenu() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await expect(this.libraryInfoMenu).toBeExisting();
        await this.libraryInfoMenu.click();
        await expect(this.dropdownMenu).toBeExisting();
    }

    async testFaqsLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        //await browser.pause(3000)
        await this.faqsLink.waitForDisplayed({ timeout: 3000 });
        await this.faqsLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/libraryfaq')
    }

    async testArtCenterPassesLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.artCenterPassesLink.waitForDisplayed({ timeout: 3000 });
        await this.artCenterPassesLink.click();
        expect(browser).toHaveUrl('https://oremlibrary.org/general-reference/nacpasses/');
        browser.switchWindow('library.orem.gov');
    }

   
    async testBookGroupSetsLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.bookGroupSetsLink.waitForDisplayed({ timeout: 3000 });
        await this.bookGroupSetsLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/bookgroup')
    }

    async testHelpAndHowTosLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.helpAndHowTosLink.waitForDisplayed({ timeout: 3000 });
        await this.helpAndHowTosLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/howto')
    }

    async testInterlibraryLoanLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.interlibraryLoanLink.waitForDisplayed({ timeout: 3000 });
        await this.interlibraryLoanLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/ill')
    }

    async testlibraryCardsAccountLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.libraryCardsAccountLink.waitForDisplayed({ timeout: 3000 });
        await this.libraryCardsAccountLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/librarycardsandaccounts')
    }

    async testlibraryHallLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.libraryHallLink.waitForDisplayed({ timeout: 3000 });
        await this.libraryHallLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/LibraryHall')
    }

    async testmakerspaceLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.makerspaceLink.waitForDisplayed({ timeout: 3000 });
        await this.makerspaceLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/makerspace')
    }

   async testpERCLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.pERCLink.waitForDisplayed({ timeout: 3000 });
        await this.pERCLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/PERC')
    }

    async testpoliciesLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.policiesLink.waitForDisplayed({ timeout: 3000 });
        await this.policiesLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/policy')
    }

    async testpurchaseRequestLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.purchaseRequestsLink.waitForDisplayed({ timeout: 3000 });
        await this.purchaseRequestsLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/purchaserequests')
    }

    async teststateLibraryBookLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.stateLibraryBookLink.waitForDisplayed({ timeout: 3000 });
        await this.stateLibraryBookLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/WebBuilder/WebResource?id=86')
    }

    async testvolunteerLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.volunteerLink.waitForDisplayed({ timeout: 3000 });
        await this.volunteerLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/volunteering')
    }




    
    open () {
        return super.open();//calling base url
    }
}

export default new LibraryInfo();

