import { $ } from '@wdio/globals'
//import Base from './base.js';
import LanguagesDisplay from './launguagesDisplay.js';


class DropdownMenu extends Base {
    get hamburgerMenu() {
        return $('#react-burger-menu-btn');
    }

    
    
    
//functioned needed for the test
//     async openHamburgerMenu() {
//         await this.hamburgerMenu.click();
//     }
    

// async testclickAllItemsLink(username, password) { //all items' link test
//     await this.open();
//     await LoginPage.login(username, password);
//     await expect(InventoryPage.shoppingCart).toBeExisting();
//     await InventoryPage.openShoppingCart();
//     await expect(InventoryPage.YourCart).toBeExisting();
//     await this.openHamburgerMenu();
//     await this.clickAllItemsLink();
//     await expect (InventoryPage.sortButton).toBeExisting();   
// }
}
 

export default new DropdownMenu();
