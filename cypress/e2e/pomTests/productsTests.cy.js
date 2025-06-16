/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";
import mainPageData from "../../fixtures/pom/mainPageData.json";

describe('Product Page Tests', () => {
    const mainPage = new MainPage();

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

    it("Add Review", () => {
        const email = "testovoemylo@mulo.com";
        const password = "123456";
        const reviewTitle = "New title";
        const reviewText = "New review text";
        const expectedMessageText = "Product review is successfully added.";
        
        mainPage
            .header.clickLogIn()
            .enterEmail(email)
            .enterPassword(password)
            .clickLoginButton()
            .clickLaptopLink()
            .clickAddReviewLink()
            .enterRevievTitle(reviewTitle)
            .enterReviexText(reviewText)
            .clickSubmitReview()
            .checkMessageText(expectedMessageText);
    });
    
}); 