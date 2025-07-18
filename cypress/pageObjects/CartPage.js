import { Header, SideMenu } from './';

class CartPage {
  constructor() {
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }

  getItemAttributes = () =>
    cy.get("td[class='product'] div[class='attributes']");
  getProductName = () => cy.get('.product-name');
  getQuantityInput = () => cy.get('.qty-input');
  getUpdateQuantityButton = () => cy.get("input[name='updatecart']");
  getUnitItemPrice = () => cy.get('.product-unit-price');
  getTotalPrice = () => cy.get('.product-subtotal');
  getCheckoutButton = () => cy.get('.checkout-button');
  getWarningBoxText = () => cy.get('.ui-dialog-content');

  checkSizeFromAttributes(expectedSize) {
    this.verifyOnCartPage();
    this.getItemAttributes()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        const sizeMatch = text.match(/Size:\s*(\d+)/);
        const size = sizeMatch ? sizeMatch[1] : null;

        expect(expectedSize).to.eq(String(size));
      });
  }

  checkColorFromAttributes(expectedColor) {
    this.verifyOnCartPage();
    this.getItemAttributes()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        const colorMatch = text.match(/Color:\s*(.+)/);
        const color = colorMatch ? colorMatch[1] : null;

        expect(expectedColor).to.eq(String(color));
      });
  }

  setQuantity(quantity) {
    this.verifyOnCartPage();
    this.getQuantityInput().should('be.visible').clear().type(quantity);

    return this;
  }

  clickUpdateQuantity() {
    this.getUpdateQuantityButton().should('be.visible').click();

    return this;
  }

  checkTotalPrice(quantity) {
    let unitPrice, totalPrice;

    this.getUnitItemPrice()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        unitPrice = Number(text.trim());
        this.getTotalPrice()
          .invoke('text')
          .then((totalText) => {
            totalPrice = Number(totalText.trim());

            expect(unitPrice * quantity).to.eq(totalPrice);
          });
      });
  }

  clickCheckoutButton() {
    this.verifyOnCartPage();
    this.getCheckoutButton().should('be.visible').click();

    return this;
  }

  checkWarningBoxText(warningBoxText) {
    this.getWarningBoxText()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(warningBoxText).to.eq(text.trim());
      });
  }

  verifyOnCartPage() {
    cy.url().should('include', '/cart');

    return this;
  }
}

export default CartPage;
