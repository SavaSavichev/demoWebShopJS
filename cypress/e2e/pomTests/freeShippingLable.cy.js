/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";


it("Verify Free Shippint is display", () => {
    const mainPage = new MainPage();

    mainPage.visit();
    mainPage.clickOwnComputerLink();

});