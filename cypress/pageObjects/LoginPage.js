import { MainPage } from './';

class LoginPage {
  getEmailField = () => cy.get('#Email');
  getPasswordField = () => cy.get('#Password');
  getLogInButton = () => cy.get("input[value='Log in']");

  enterEmail(email) {
    this.verifyOnLoginPage();
    this.getEmailField().should('be.visible').type(email);

    return this;
  }

  enterPassword(password) {
    this.getPasswordField().should('be.visible').type(password);

    return this;
  }

  clickLoginButton() {
    this.getLogInButton().should('be.visible').click();

    return new MainPage();
  }

  verifyOnLoginPage() {
    cy.url().should('include', '/login');

    return this;
  }
}

export default LoginPage;