/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";
import cartPageData from "../../fixtures/pom/cartPageData.json"

describe('Product Page Tests', () => {
    const mainPage = new MainPage();

    it("Add laptop to card from main page", () => {
        
        mainPage
            .clickLaptopAddToCartButton()
            .header.clickShoppingCart()
            .getProductName().should("have.text", cartPageData.productName);
    });

    it("Add laptop to card from product page", () => {
        
        mainPage
            .clickLaptopLink()
            .clickAddCartButton()
            .header.clickShoppingCart()
            .getProductName().should("have.text", cartPageData.productName);
    });

    it("Increase Quantity", () => {
        
        mainPage
            .clickLaptopAddToCartButton()
            .header.clickShoppingCart()
            .setQuantity(cartPageData.productQuantity)
            .clickUpdateQuantity()
            .getQuantityInput().should("have.value", cartPageData.productQuantity);
    });

    it("Increase total price depends quantity", () => {
        
        mainPage
            .clickLaptopAddToCartButton()
            .header.clickShoppingCart()
            .setQuantity(cartPageData.productQuantity)
            .clickUpdateQuantity()
            .checkTotalPrice(cartPageData.productQuantity);
    });

    it("Warning Terms Box", () => {
        
        mainPage
            .clickLaptopAddToCartButton()
            .header.clickShoppingCart()
            .clickCheckoutButton()
            .checkWarningBoxText(cartPageData.warningBoxText);
    });

});