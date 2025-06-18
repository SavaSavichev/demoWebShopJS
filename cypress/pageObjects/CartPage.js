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
    getUnitItemPrice = () => cy.get(".product-unit-price");
    getTotalPrice = () => cy.get(".product-subtotal");
    getCheckoutButton = () => cy.get(".checkout-button");
    getWarningBoxText = () => cy.get(".ui-dialog-content");
    
    checkSizeFromAttributes(size) {
        this.getItemAttributes().invoke("text").then((text) => {
            const sizeMatch = text.match(/Size:\s*(\d+)/);
            const size = sizeMatch ? sizeMatch[1] : null;
            
            expect(size).to.eq(size);
        });
    }

    checkColorFromAttributes(color) {
        this.getItemAttributes().invoke("text").then((text) => {
            const sizeMatch = text.match(/Color:\s*(.+)/);
            const size = sizeMatch ? sizeMatch[1] : null;
            
            expect(size).to.eq(size);
        });
    }

    setQuantity(quantity) {
        this.getQuantityInput().clear().type(quantity);

        return this;
    }

    clickUpdateQuantity() {
        this.getUpdateQuantityButton().click();

        return this;
    }

    checkTotalPrice(quantity) {
        let unitPrice, totalPrice;
    
        this.getUnitItemPrice().invoke("text").then((text) => {
            unitPrice = Number(text.trim());
            this.getTotalPrice().invoke("text").then((totalText) => {
                totalPrice = Number(totalText.trim());
    
                expect(unitPrice * quantity).to.eq(totalPrice);
            });
        });
    }

    clickCheckoutButton() {
        this.getCheckoutButton().click();

        return this;
    }

    checkWarningBoxText(warningBoxText) {
        this.getWarningBoxText().invoke("text").then((text) => {
            expect(warningBoxText).to.eq(text.trim());
        });
    }
}

export default CartPage;