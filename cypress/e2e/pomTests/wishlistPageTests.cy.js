/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";

describe("Wishlist Page Tests", () => {
    const mainPage = new MainPage();

    it("Add item to wishlist", () => {
        
        mainPage
            .header.clickCameraPhotoLinkTopMenu()
            .clickSmartPhoneIcon()
            .clickAddToWishlistButton()
            .header.clickWishlist()
            .checkProductName("Smartphone");
    });
});