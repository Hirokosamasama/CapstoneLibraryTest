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

