import { browser } from '@wdio/globals'


export default class Base {

    spanish = 'es'
    english = 'en'

    get languagesDisplayMenu () {
        return $('#theme-selection-dropdown'); 
    }

    get closeButtonLD () {
        return $('button[class="btn btn-default modalClose"]'); 
    }

    get displaySettingLabel () {
        return $('#myModalLabel'); 
    }

    get updateDisplaySetting (){
        return $('#updateDisplaySettings')
    }
    
    optionLanguage(lang){
        return $(`option[value="${lang}"]`); 
    }

    libraryURL () {
        return browser.url('https://library.orem.gov/')
    }
}
