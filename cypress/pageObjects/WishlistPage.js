import Header from "./Header";
import SideMenu from "./SideMenu";

class WishlistPage {

    constructor() {
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    getProductName = () => cy.get("td.product");

    checkProductName(productName) {
        this.getProductName().invoke("text").then((text) => {
            expect(productName).to.eq(text.trim());
        });
    }
}

export default WishlistPage;