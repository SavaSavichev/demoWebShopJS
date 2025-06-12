/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";
import ProductPage from "../../pageObjects/ProductPage";

it("Verify Free Shippint is display", () => {
    const mainPage = new MainPage();
    const productPage = new ProductPage();

    mainPage
        .clickOwnComputerLink()
        .getFreeShipping()
        .should("be.visible");

});