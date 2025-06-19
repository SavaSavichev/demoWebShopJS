import { MainPage } from './';

class LoginPage {
  getEmailField = () => cy.get('#Email');
  getPasswordField = () => cy.get('#Password');
  getLogInButton = () => cy.get("input[value='Log in']");

  enterEmail(email) {
    this.getEmailField().type(email);

    return this;
  }

  enterPassword(password) {
    this.getPasswordField().type(password);

    return this;
  }

  clickLoginButton() {
    this.getLogInButton().click();

    return new MainPage();
  }
}

export default LoginPage;
