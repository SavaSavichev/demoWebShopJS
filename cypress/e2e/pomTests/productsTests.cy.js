/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";
import mainPageData from "../../fixtures/pom/mainPageData.json";

describe('Product Page Tests', () => {

    it("Verify Free Shippint is display", () => {
        const mainPage = new MainPage();
        
        mainPage
            .clickOwnComputerLink()
            .getFreeShipping()
            .should("be.visible");
    });

    it("Return back to Main page", () => {
        const mainPage = new MainPage();
        
        mainPage
            .clickOwnComputerLink()
            .clickLogo()
            .checkPageTitle(mainPageData.pageTitle);
    });
}); 