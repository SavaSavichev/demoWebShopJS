import CartPage from "./CartPage";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";

class Header {

    getLogo = () => cy.get("img[alt='Tricentis Demo Web Shop']");
    getLogIn = () => cy.get(".ico-login");
    getShoppingCart = () => cy.get("a[class='ico-cart'] span[class='cart-label']");

    clickLogo() {
        this.getLogo().click();

        return new MainPage();
    }

    clickShoppingCart() {
        this.getShoppingCart().click();

        return new CartPage();
    }

    clickLogIn() {
        this.getLogIn().click();

        return new LoginPage();
    }
}

export default Header;