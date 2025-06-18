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
    getLaptopAddCartButton = () => cy.get("body > div:nth-child(4) > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(2) > input:nth-child(1)");

    checkPageTitle(expectedText) {
        this.getPageTitle().invoke("text").then((text) => {
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

    clickLaptopAddToCartButton() {
        this.getLaptopAddCartButton().click();

        return this;
    }
}

export default MainPage;