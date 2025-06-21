import { CartPage, Header, ReviewPage, SideMenu } from './';

class ProductPage {
  constructor() {
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }

  getFreeShipping = () => cy.get('.free-shipping');
  getSizeSelect = () => cy.get('#product_attribute_28_7_10');
  getAddCartButton = () => cy.get('.add-to-cart-button');
  getGreenColor = () => cy.get("span[title='Green'] span[class='color']");
  getAddReviewButton = () =>
    cy.get(
      'body > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > a:nth-child(3)',
    );
  getAddToWishlistButton = () => cy.get('.add-to-wishlist-button');

  setSizeSelect(size) {
    this.getSizeSelect().select(size);

    return this;
  }

  clickAddCartButton() {
    this.getAddCartButton().should('be.visible').click();

    return new CartPage();
  }

  clickGreenColor() {
    this.getGreenColor().should('be.visible').click();

    return this;
  }

  clickAddReviewLink() {
    this.getAddReviewButton().should('be.visible').click();

    return new ReviewPage();
  }

  clickAddToWishlistButton() {
    this.getAddToWishlistButton().should('be.visible').click();

    return this;
  }

  verifyOnProductPage() {
    cy.url().should('not.eq', 'https://demowebshop.tricentis.com/');

    return this;
  }
}

export default ProductPage;
