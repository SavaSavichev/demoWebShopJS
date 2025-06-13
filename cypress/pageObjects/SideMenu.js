import CatalogPage from "./CatalogPage";

class SideMenu {
    getShoesButton = () => cy.get("div[class='block block-category-navigation'] li:nth-child(4) a:nth-child(1)");

    clickShoesButton() {
        this.getShoesButton().click();

        return new CatalogPage();
    }

}

export default SideMenu;