/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";
import mainPageData from "../../fixtures/pom/mainPageData.json";
import ProductPage from "../../pageObjects/ProductPage";

describe('Product Page Tests', () => {
    const mainPage = new MainPage();
    const productPage = new ProductPage();

    it("Verify Free Shippint is display", () => {
        
        mainPage
            .clickOwnComputerLink()
            .getFreeShipping()
            .should("be.visible");
    });

    it("Return back to Main page", () => {
        
        mainPage
            .clickOwnComputerLink()
            .header.clickLogo()
            .checkPageTitle(mainPageData.pageTitle);
    });

    it("Set Shoe Size", () => {
        const size = "11";
        
        mainPage
            .sideMenu.clickShoesButton()
            .clickSneakersIcon()
            .setSizeSelect(size)
            .clickAddCartButton()
            .header.clickShoppingCart()
            .checkSizeFromAttributes(size);
    });

    it("Set Shoe Color", () => {
        const color = "Green";
        
        mainPage
            .sideMenu.clickShoesButton()
            .clickSneakersIcon()
            .clickGreenColor()
            .clickAddCartButton()
            .header.clickShoppingCart()
            .checkColorFromAttributes(color);
    });
}); 