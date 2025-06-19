import { CatalogPage } from './';

class SideMenu {
  getShoesButton = () =>
    cy.get(
      "div[class='block block-category-navigation'] li:nth-child(4) a:nth-child(1)",
    );

  clickShoesButton() {
    this.getShoesButton().should('be.visible').click();

    return new CatalogPage();
  }
}

export default SideMenu;
