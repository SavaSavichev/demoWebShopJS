import CartPage from "./CartPage";
import Header from "./Header";
import SideMenu from "./SideMenu";

class WishlistPage {

    constructor() {
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    getProductName = () => cy.get("td.product");
    getRemoveCheckBox = () => cy.get("[name='removefromcart']");
    getUpdateWishlistButton = () => cy.get("input[value='Update wishlist']");
    getAddToCartCheckBox = () => cy.get("td.add-to-cart");
    getAddToCartButton = () => cy.get("input[value='Add to cart']");
    getEmptyMessage = () => cy.get(".wishlist-content");

    checkProductName(productName) {
        this.getProductName().invoke("text").then((text) => {
            expect(productName).to.eq(text.trim());
        });
    }

    clickRemoveCheckBox() {
        this.getRemoveCheckBox().click();

        return this;
    }

    clickUpdateWishlistButton() {
        this.getUpdateWishlistButton().click();

        return this;
    }

    checkEmptyMessageText(messageText) {
        this.getEmptyMessage().invoke("text").then((text) => {
            expect(messageText).to.eq(text.trim());
        }); 
    }

    clickAddCartCheckBox() {
        this.getAddToCartCheckBox().click();

        return this;
    }
    
    clickAddToCartButton() {
        this.getAddToCartButton().click();

        return new CartPage();
    }
}

export default WishlistPage;