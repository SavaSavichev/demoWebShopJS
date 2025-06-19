import {
  CartPage,
  CatalogPage,
  LoginPage,
  MainPage,
  RegisterUserPage,
  WishlistPage,
} from './';

class Header {
  getLogo = () => cy.get("img[alt='Tricentis Demo Web Shop']");
  getLogIn = () => cy.get('.ico-login');
  getRegister = () => cy.get('.ico-register');
  getShoppingCart = () =>
    cy.get("a[class='ico-cart'] span[class='cart-label']");
  getWishlist = () =>
    cy.get("a[class='ico-wishlist'] span[class='cart-label']");
  getLogOut = () => cy.get('.ico-logout');
  getAccountEmail = () =>
    cy.get("div[class='header-links'] a[class='account']");
  getElectroncsButtonTopMenu = () =>
    cy.get('ul.top-menu > li:nth-child(3) > a');
  getCellPhonesLinkTopMenu = () =>
    cy.get('ul.top-menu > li:nth-child(3) > ul > li:nth-child(2) > a');

  clickLogo() {
    this.getLogo().should('be.visible').click();

    return new MainPage();
  }

  clickShoppingCart() {
    this.getShoppingCart().should('be.visible').click();

    return new CartPage();
  }

  clickLogIn() {
    this.getLogIn().should('be.visible').click();

    return new LoginPage();
  }

  clickRegister() {
    this.getRegister().should('be.visible').click();

    return new RegisterUserPage();
  }

  clickWishlist() {
    this.getWishlist().should('be.visible').click();

    return new WishlistPage();
  }

  clickCameraPhotoLinkTopMenu() {
    this.getElectroncsButtonTopMenu().should('be.visible').trigger('mouseover');
    this.getCellPhonesLinkTopMenu().should('be.visible').click();

    return new CatalogPage();
  }

  clickLogOut() {
    this.getLogOut().should('be.visible').click();

    return new MainPage();
  }
}

export default Header;
