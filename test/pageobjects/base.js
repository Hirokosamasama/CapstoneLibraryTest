import { browser } from '@wdio/globals'


export default class Base {

    get languagesDisplayMenu () {
        return $('#theme-selection-dropdown'); 
    }

    get closeButtonLD () {
        return $('button[class="btn btn-default modalClose"]'); 
    }

    get displaySettingLabel () {
        return $('#myModalLabel'); 
    }

    get optionLanguageEn () {
        return $('option[value="en"]'); 
    }
    
    get optionLanguageEs () {
        return $('option[value="es"]'); 
    }

    get updateDisplaySetting (){
        return $('#updateDisplaySettings')
    }
    
    libraryURL () {
        return browser.url('https://library.orem.gov/')
    }
}
