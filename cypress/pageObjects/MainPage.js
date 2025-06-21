import { Header, ProductPage, SideMenu } from './';

class MainPage {
  constructor() {
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }

  getOwnComputerLink = () =>
    cy.get("img[title='Show details for Build your own cheap computer']");
  getPageTitle = () => cy.get('.topic-html-content-header');
  getLaptopLink = () =>
    cy.get(
      "div[class='product-item'] img[title='Show details for 14.1-inch Laptop']",
    );
  getLaptopAddCartButton = () =>
    cy.get(
      'body > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > input:nth-child(1)',
    );

  checkPageTitle(expectedText) {
    this.getPageTitle()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(expectedText).to.eq(text.trim());
      });
  }

  clickOwnComputerLink() {
    this.getOwnComputerLink().should('be.visible').click();

    return new ProductPage();
  }

  clickLaptopLink() {
    this.getLaptopLink().should('be.visible').click();

    return new ProductPage();
  }

  clickLaptopAddToCartButton() {
    this.getLaptopAddCartButton().should('be.visible').click();

    return this;
  }

  verifyOnMainPage() {
    cy.url().should('equal', 'https://demowebshop.tricentis.com/');

    return this;
  }
}

export default MainPage;
