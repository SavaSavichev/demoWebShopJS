import ProductPage from "./ProductPage";

class MainPage {
    visit() {
        cy.visit('/')
        return this;
    }

    getOwnComputerLink = () => 
    cy.get("img[title='Show details for Build your own cheap computer']");

    getPageTitle = () => cy.get(".topic-html-content-header");

    checkPageTitle(expectedText) {
        this.getPageTitle().invoke('text').then((text) => {
          expect(text.trim()).to.eq(expectedText);
        });
    }

    clickOwnComputerLink() {
        this.getOwnComputerLink().click();

        return new ProductPage();
    }
}

export default MainPage;