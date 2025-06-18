/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";
import userPageData from "../../fixtures/pom/userPageData.json"

describe("User Page Tests", () => {
    const mainPage = new MainPage();

    it("Register new user", () => {
        
        mainPage
            .header.clickRegister()
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

    it("Log in User", () => {
        
        mainPage
            .header.clickLogIn()
            .enterEmail(userPageData.userEmail)
            .enterPassword(userPageData.userPassword)
            .clickLoginButton()
            .header.getAccountEmail()
            .should("have.text", userPageData.userEmail);
    });

    it("Log out User", () => {
        
        mainPage
            .header.clickLogIn()
            .enterEmail(userPageData.userEmail)
            .enterPassword(userPageData.userPassword)
            .clickLoginButton()
            .header.clickLogOut()
            .header.getRegister()
            .should("have.text", "Register");
    });
});