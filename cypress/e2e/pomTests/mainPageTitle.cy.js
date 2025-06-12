/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";
import mainPageData from "../../fixtures/pom/mainPageData.json";

it("Verify Free Shippint is display", () => {
    const mainPage = new MainPage();

    mainPage
        .checkPageTitle(mainPageData.pageTitle);
});