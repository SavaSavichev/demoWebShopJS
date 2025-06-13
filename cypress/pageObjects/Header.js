import CartPage from "./CartPage";
import MainPage from "./MainPage";

class Header {

    getLogo = () => cy.get("img[alt='Tricentis Demo Web Shop']");
    getShoppingCart = () => cy.get("a[class='ico-cart'] span[class='cart-label']");

    clickLogo() {
        this.getLogo().click();

        return new MainPage();
    }

    clickShoppingCart() {
        this.getShoppingCart().click();

        return new CartPage();
    }
}

export default Header;