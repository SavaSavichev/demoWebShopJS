import Header from "./Header";
import SideMenu from "./SideMenu";

class RegisterUserPage {

    constructor() {
        this.header = new Header();
        this.sideMenu = new SideMenu();
    }

    getMaleGenderRadio = () => cy.get("#gender-male");
    getFirstNameField = () => cy.get("#FirstName");
    getLastName = () => cy.get("#LastName");
    getEmailField = () => cy.get("#Email");
    getPasswordField = () => cy.get("#Password");
    getConfirmPasswordField = () => cy.get("#ConfirmPassword");
    getRegisterButton = () => cy.get(".register-next-step-button");
    getResultMessage = () => cy.get(".result");

    clickMaleGenderRadio() {
        this.getMaleGenderRadio().click();

        return this;
    }

    enterFirstName(firstName) {
        this.getFirstNameField().clear().type(firstName);

        return this;
    }

    enterLastName(lastName) {
        this.getLastName().clear().type(lastName);

        return this;
    }

    enterEmail() {
        this.getEmailField().clear().type(this.generateEmail());
        return this;
    }

    enterPassword(password) {
        this.getPasswordField().clear().type(password);

        return this;
    }

    enterConfirmPassword(password) {
        this.getConfirmPasswordField().clear().type(password);

        return this;
    }

    clickRegisterButton() {
        this.getRegisterButton().click();

        return this;
    }
    
    checkResultMessage(resultMessage) {
        this.getResultMessage().invoke("text").then((text) => {
            expect(resultMessage).to.eq(text.trim());
        });
    }

    generateEmail() {
        const timestamp = Date.now();
        return `user${timestamp}@test.com`;
    }
}

export default RegisterUserPage;