import Header from "./Header";
import SideMenu from "./SideMenu";

class CartPage {

    constructor() {
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    getItemAttributes = () => cy.get("td[class='product'] div[class='attributes']");
    
    checkSizeFromAttributes(size) {
        this.getItemAttributes().invoke('text').then((text) => {
            const sizeMatch = text.match(/Size:\s*(\d+)/);
            const size = sizeMatch ? sizeMatch[1] : null;
            
            expect(size).to.eq(size);
        });
    }
}

export default CartPage;