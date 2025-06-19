/// <reference types="cypress" />

import { MainPage } from '../../pageObjects';
import { userPageData } from '../../fixtures/pom';

describe('User Account – Registration, Login and Logout', () => {
  const mainPage = new MainPage();

  it('registers a new user successfully', () => {
    mainPage.header
      .clickRegister()
      .clickMaleGenderRadio()
      .clickMaleGenderRadio()
      .enterFirstName(userPageData.firstName)
      .enterLastName(userPageData.lastName)
      .enterEmail()
      .enterPassword(userPageData.password)
      .enterConfirmPassword(userPageData.password)
      .clickRegisterButton()
      .checkResultMessage(userPageData.resultMessage);
  });

  it('logs in an existing user', () => {
    mainPage.header
      .clickLogIn()
      .enterEmail(userPageData.userEmail)
      .enterPassword(userPageData.userPassword)
      .clickLoginButton()
      .header.getAccountEmail()
      .should('be.visible')
      .and('have.text', userPageData.userEmail);
  });

  it('logs out the current user', () => {
    mainPage.header
      .clickLogIn()
      .enterEmail(userPageData.userEmail)
      .enterPassword(userPageData.userPassword)
      .clickLoginButton()
      .header.clickLogOut()
      .header.getRegister()
      .should('be.visible')
      .and('have.text', 'Register');
  });
});
