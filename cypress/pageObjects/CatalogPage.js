import Header from "./Header";
import ProductPage from "./ProductPage";
import SideMenu from "./SideMenu";

class CatalogPage {

    constructor() {
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    getSneakersIcon = () => cy.get("div[class='product-item'] img[title='Show details for Blue and green Sneaker']");
    
    clickSneakersIcon() {
        this.getSneakersIcon().click();

        return new ProductPage();
    }
}

export default CatalogPage;