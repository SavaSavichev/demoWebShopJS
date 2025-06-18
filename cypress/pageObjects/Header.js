import CartPage from "./CartPage";
import CatalogPage from "./CatalogPage";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import WishlistPage from "./WishlistPage";

class Header {

    getLogo = () => cy.get("img[alt='Tricentis Demo Web Shop']");
    getLogIn = () => cy.get(".ico-login");
    getShoppingCart = () => cy.get("a[class='ico-cart'] span[class='cart-label']");
    getWishlist = () => cy.get("a[class='ico-wishlist'] span[class='cart-label']");
    getElectroncsButtonTopMenu = () => cy.get("ul.top-menu > li:nth-child(3) > a");
    getCellPhonesLinkTopMenu = () => cy.get("ul.top-menu > li:nth-child(3) > ul > li:nth-child(2) > a");

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

    clickWishlist() {
        this.getWishlist().click();

        return new WishlistPage();
    }

    clickCameraPhotoLinkTopMenu() {
        this.getElectroncsButtonTopMenu().trigger("mouseover");
        this.getCellPhonesLinkTopMenu().should("be.visible").click();

        return new CatalogPage();
    }
}

export default Header;