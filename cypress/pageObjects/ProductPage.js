import CartPage from "./CartPage";
import Header from "./Header";
import SideMenu from "./SideMenu";

class ProductPage {
    
    constructor() {
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    getFreeShipping = () => cy.get(".free-shipping");
    getSizeSelect = () => cy.get("#product_attribute_28_7_10");
    getAddCartButton = () => cy.get(".add-to-cart-button");
    getGreenColor = () => cy.get("span[title='Green'] span[class='color']");

    setSizeSelect(size) {
        this.getSizeSelect().select(size);

        return this;
    }

    clickAddCartButton() {
        this.getAddCartButton().click();

        return new CartPage();
    }

    clickGreenColor() {
        this.getGreenColor().click();

        return this;
    }
}

export default ProductPage;