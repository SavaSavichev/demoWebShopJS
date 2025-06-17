/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";
import mainPageData from "../../fixtures/pom/mainPageData.json";
import productPageData from "../../fixtures/pom/productPageData.json"

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
        
        mainPage
            .sideMenu.clickShoesButton()
            .clickSneakersIcon()
            .setSizeSelect(productPageData.shoeSize)
            .clickAddCartButton()
            .header.clickShoppingCart()
            .checkSizeFromAttributes(productPageData.shoeSize);
    });

    it("Set Shoe Color", () => {
        
        mainPage
            .sideMenu.clickShoesButton()
            .clickSneakersIcon()
            .clickGreenColor()
            .clickAddCartButton()
            .header.clickShoppingCart()
            .checkColorFromAttributes(productPageData.shoeColor);
    });

    it("Add Review", () => {
        
        mainPage
            .header.clickLogIn()
            .enterEmail(productPageData.userEmail)
            .enterPassword(productPageData.userPassword)
            .clickLoginButton()
            .clickLaptopLink()
            .clickAddReviewLink()
            .enterRevievTitle(productPageData.reviewTitle)
            .enterReviewText(productPageData.reviewText)
            .clickSubmitReview()
            .checkMessageText(productPageData.expectedAddMessageText);
    });
    
}); 