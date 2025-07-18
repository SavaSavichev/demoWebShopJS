import { CartPage, Header, SideMenu } from './';

class WishlistPage {
  constructor() {
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }

  getProductName = () => cy.get("td[class='product']");
  getRemoveCheckBox = () => cy.get("[name='removefromcart']");
  getUpdateWishlistButton = () => cy.get("input[value='Update wishlist']");
  getAddToCartCheckBox = () => cy.get('td.add-to-cart');
  getAddToCartButton = () => cy.get("input[value='Add to cart']");
  getEmptyMessage = () => cy.get('.wishlist-content');
  getQuantityField = () => cy.get('.qty-input');

  checkProductName(productName) {
    this.verifyOnWishlistPage();
    this.getProductName()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(productName).to.eq(text.trim());
      });
  }

  clickRemoveCheckBox() {
    this.verifyOnWishlistPage();
    this.getRemoveCheckBox().should('be.visible').click();

    return this;
  }

  clickUpdateWishlistButton() {
    this.verifyOnWishlistPage();
    this.getUpdateWishlistButton().should('be.visible').click();

    return this;
  }

  checkEmptyMessageText(messageText) {
    this.getEmptyMessage()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(messageText).to.eq(text.trim());
      });
  }

  clickAddCartCheckBox() {
    this.getAddToCartCheckBox().should('be.visible').click();

    return this;
  }

  clickAddToCartButton() {
    this.getAddToCartButton().should('be.visible').click();

    return new CartPage();
  }

  setQuantity(quantity) {
    this.getQuantityField().should('be.visible').clear().type(quantity);

    return this;
  }

  verifyOnWishlistPage() {
    cy.url().should('include', '/wishlist');

    return this;
  }
}

export default WishlistPage;
