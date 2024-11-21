import { browser } from '@wdio/globals'


export default class Base {
    
    open () {
        return browser.url('https://library.orem.gov/')
    }
}
