import { $, browser } from '@wdio/globals'
import Base from './base.js';
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
    return $('=FAQs'); 
    }
    
    get bookGroupSetsLink () {
    return $('=Book Group Sets');
    }
    
    get helpAndHowTosLink () {
    return $('=Help & How Tos');
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
  

    

   

    
    open () {
        return super.open();//calling base url
    }
}

export default new LibraryInfo();

