import Header from "./Header";
import ProductPage from "./ProductPage";
import SideMenu from "./SideMenu";

class MainPage {

    constructor() {
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    getOwnComputerLink = () => 
    cy.get("img[title='Show details for Build your own cheap computer']");
    getPageTitle = () => cy.get(".topic-html-content-header");
    getLaptopLink = () => cy.get("div[class='product-item'] img[title='Show details for 14.1-inch Laptop']");

    checkPageTitle(expectedText) {
        this.getPageTitle().invoke('text').then((text) => {
          expect(text.trim()).to.eq(expectedText);
        });
    }

    clickOwnComputerLink() {
        this.getOwnComputerLink().click();

        return new ProductPage();
    }

    clickLaptopLink() {
        this.getLaptopLink().click();

        return new ProductPage();
    }
}

export default MainPage;