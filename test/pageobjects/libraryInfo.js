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
    return $$('a[href="/bookgroup"]');
    }
    
    get helpAndHowTosLink () {
    return $('a[href="/howto"]');
    }

    get interlibraryLoanLink () {
    return $('a[href="/ill"]');
    }

    get searchButton (){
    return $('#horizontal-search-box-submit-text');
    }
    
    get searchBox (){
    return $('#lookfor');
    }

    get keywordBox(){
    return $('#searchIndex');
    }

    get signinButton(){
    return $('#login-button-label');
    }

    get signinBoxLabel(){
    return $('#myModalLabel');
    }
    
    get signinButtonClick(){
    return $('#loginFormSubmit')
    }

    get signinErrorMessage(){
    return $('#loginError');
    }

    get signInCloseButton(){
    return $('[class="btn btn-default modalClose"]')
    }

    get hamburgerMenu(){
    return $('#header-menu-dropdown')
    }

    get libraryCardLink(){
    return $('a[href="https://library.orem.gov/MyAccount/Home"]')
    }

    get getALibraryCardButton(){
    return $('img[alt="Get a Library Card"]')
    }

    get personLogo(){
    return $('[class="fas fa-landmark fa-fw"]')
    }

    get libraryStaffLink(){
    return $('[class="fas fa-landmark fa-fw"]')
    }

    get libraryStaffLink(){}

    get libraryHomePageButton(){
    return $('#home-page-home-button')
    }

    get staffDirectorySign(){
    return $()
    }

    get inputCardNumber() {
        return $('#username');//selector for username text field
    }

    get inputPinNumber() {
        return $('#password');//selector for the password text field
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
        await this.faqsLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/libraryfaq')
    }

    async testArtCenterPassesLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.artCenterPassesLink.click();
        expect(browser).toHaveUrl('https://oremlibrary.org/general-reference/nacpasses/')
        //browser.back()
    }

    async testHamburgerMenuDropdown(){
        await this.open()
        await expect(this.hamburgerMenu).toBeExisting();
        await this.hamburgerMenu.click();
        await expect(this.personLogo).toBeExisting();
    }
    
    async testNegativeSignIn (cardnumber, pinnumber) {
        await this.open()
        await expect(this.signinBoxLabel).toBeExisting();
        await this.signinButton.click();
        await this.inputCardNumber.setValue(cardnumber);
        await this.inputPinNumber.setValue(pinnumber);
        await this.signinButtonClick.click();
        await expect(this.signinErrorMessage).toHaveText(
            expect.stringContaining('enter both Library Card '))
    }

    async testNegativeSignIn2 (cardnumber, pinnumber) {
        await this.open()
        await expect(this.signinBoxLabel).toBeExisting();
        await this.signinButton.click();
        await this.inputCardNumber.setValue(cardnumber);
        await this.inputPinNumber.setValue(pinnumber);
        await this.signinButtonClick.click();
        await expect(this.signinErrorMessage).toHaveText(
            expect.stringContaining('enter both Library Card '))
    }

    async testNegativeSignIn3 (cardnumber, pinnumber) {
        await this.open()
        await expect(this.signinBoxLabel).toBeExisting();
        await this.signinButton.click();
        await this.inputCardNumber.setValue(cardnumber);
        await this.inputPinNumber.setValue(pinnumber);
        await this.signinButtonClick.click();
        await expect(this.signinErrorMessage).toHaveText(
            expect.stringContaining('enter both Library Card '))
    }

    async testSignInCloseButton(){
        await this.signInCloseButton.click();
        await expect(this.libraryHeaderLogo).toBeExisting();
    }

    async testPositiveSignIn (cardnumber, pinnumber) {
        await this.open()
        await expect(this.signinBoxLabel).toBeExisting();
        await this.signinButton.click();
        await this.inputCardNumber.setValue(cardnumber);
        await this.inputPinNumber.setValue(pinnumber);
        await this.signinButtonClick.click();
            expect(browser).toHaveUrl('https://library.orem.gov/MyAccount/Home');
        browser.back();
    }

    async testSearchBox (){
        await this.open()
        await expect(this.signinBoxLabel).toBeExisting();
        await this.searchBox.setValue('snowman');
        await this.searchButton.click();
        expect(browser).toHaveUrl('https://library.orem.gov/Union/Search?view=list&lookfor=snowman&searchIndex=Keyword&searchSource=local');

    }

   

   /* async testBookGroupSetsLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.bookGroupSetsLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/bookgroup')
    }

    async testHelpAndHowTosLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.helpAndHowTosLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/howto')
    }

    async testInterlibraryLoanLink() {
        await this.open();
        await expect(this.libraryHeaderLogo).toBeExisting();
        await this.libraryInfoMenu.click();
        await this.interlibraryLoanLink.click();
        expect(browser).toHaveUrl('https://library.orem.gov/ill')
    }*/


  

    

   

    
    open () {
        return super.open();//calling base url
    }
}

export default new LibraryInfo();

