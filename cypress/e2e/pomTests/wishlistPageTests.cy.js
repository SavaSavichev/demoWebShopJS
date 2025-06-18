/// <reference types="cypress" />

import MainPage from "../../pageObjects/MainPage";
import wishlistPageData from "../../fixtures/pom/wishlistPageData.json"

describe("Wishlist Page Tests", () => {
    const mainPage = new MainPage();

    it("Add item to wishlist", () => {
        
        mainPage
            .header.clickCameraPhotoLinkTopMenu()
            .clickSmartPhoneIcon()
            .clickAddToWishlistButton()
            .header.clickWishlist()
            .checkProductName(wishlistPageData.productName);
    });

    it("Delete item from wishlist", () => {
        
        mainPage
            .header.clickCameraPhotoLinkTopMenu()
            .clickSmartPhoneIcon()
            .clickAddToWishlistButton()
            .header.clickWishlist()
            .clickRemoveCheckBox()
            .clickUpdateWishlistButton()
            .checkEmptyMessageText(wishlistPageData.messageText);
    });

    it("Add item from wishlist to cart", () => {
        
        mainPage
            .header.clickCameraPhotoLinkTopMenu()
            .clickSmartPhoneIcon()
            .clickAddToWishlistButton()
            .header.clickWishlist()
            .clickAddCartCheckBox()
            .clickAddToCartButton()
            .getProductName().should("have.text", wishlistPageData.productName);
    });
});