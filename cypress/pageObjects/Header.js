import MainPage from "./MainPage";

class Header {

    getLogo = () => cy.get("img[alt='Tricentis Demo Web Shop']");

    clickLogo() {
        this.getLogo().click();

        return new MainPage();
    }
}

export default Header;