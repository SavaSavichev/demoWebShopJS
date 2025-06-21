import { Header, SideMenu } from './';

class RegisterUserPage {
  constructor() {
    this.header = new Header();
    this.sideMenu = new SideMenu();
  }

  getMaleGenderRadio = () => cy.get('#gender-male');
  getFirstNameField = () => cy.get('#FirstName');
  getLastName = () => cy.get('#LastName');
  getEmailField = () => cy.get('#Email');
  getPasswordField = () => cy.get('#Password');
  getConfirmPasswordField = () => cy.get('#ConfirmPassword');
  getRegisterButton = () => cy.get('.register-next-step-button');
  getResultMessage = () => cy.get('.result');

  clickMaleGenderRadio() {
    this.verifyOnRegisterPage();
    this.getMaleGenderRadio().should('be.visible').click();

    return this;
  }

  enterFirstName(firstName) {
    this.getFirstNameField().should('be.visible').clear().type(firstName);

    return this;
  }

  enterLastName(lastName) {
    this.getLastName().should('be.visible').clear().type(lastName);

    return this;
  }

  enterEmail() {
    this.getEmailField().should('be.visible').clear().type(this.generateEmail());
    return this;
  }

  enterPassword(password) {
    this.getPasswordField().should('be.visible').clear().type(password);

    return this;
  }

  enterConfirmPassword(password) {
    this.getConfirmPasswordField().should('be.visible').clear().type(password);

    return this;
  }

  clickRegisterButton() {
    this.getRegisterButton().should('be.visible').click();

    return this;
  }

  checkResultMessage(resultMessage) {
    this.getResultMessage()
      .should('be.visible')
      .invoke('text')
      .then((text) => {
        expect(resultMessage).to.eq(text.trim());
      });
  }

  generateEmail() {
    const timestamp = Date.now();
    return `user${timestamp}@test.com`;
  }

  verifyOnRegisterPage() {
    cy.url().should('include', '/register');

    return this;
  }
}

export default RegisterUserPage;
