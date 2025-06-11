import ProductPage from "./ProductPage";

class MainPage {
    visit() {
        cy.visit('/')
    }

    getOwnComputerLink = () => 
    cy.get("img[title='Show details for Build your own cheap computer']");

    clickOwnComputerLink() {
        this.getOwnComputerLink().click();

        return new ProductPage();
    }
}

export default MainPage;