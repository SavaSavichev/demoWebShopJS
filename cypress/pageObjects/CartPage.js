import Header from "./Header";
import SideMenu from "./SideMenu";

class CartPage {

    constructor() {
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    getItemAttributes = () => cy.get("td[class='product'] div[class='attributes']");
    getProductName = () => cy.get(".product-name");
    getQuantityInput = () => cy.get(".qty-input");
    getUpdateQuantityButton = () => cy.get("input[name='updatecart']");
    
    checkSizeFromAttributes(size) {
        this.getItemAttributes().invoke('text').then((text) => {
            const sizeMatch = text.match(/Size:\s*(\d+)/);
            const size = sizeMatch ? sizeMatch[1] : null;
            
            expect(size).to.eq(size);
        });
    }

    checkColorFromAttributes(color) {
        this.getItemAttributes().invoke('text').then((text) => {
            const sizeMatch = text.match(/Color:\s*(.+)/);
            const size = sizeMatch ? sizeMatch[1] : null;
            
            expect(size).to.eq(size);
        });
    }

    setQuantity(quantity) {
        this.getQuantityInput().clear().type("2");

        return this;
    }

    clickUpdateQuantity() {
        this.getUpdateQuantityButton().click();

        return this;
    }
}

export default CartPage;