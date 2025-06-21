/// <reference types="cypress" />

import { MainPage } from '../../pageObjects';
import { wishlistPageData } from '../../fixtures/pom';

describe('Wishlist Page – Functionality and Interactions', () => {
  const mainPage = new MainPage();

  it('adds a product to the wishlist', () => {
    mainPage.header
      .clickCameraPhotoLinkTopMenu()
      .clickSmartPhoneIcon()
      .clickAddToWishlistButton()
      .header.clickWishlist()
      .checkProductName(wishlistPageData.productName);
  });

  it('removes a product from the wishlist', () => {
    mainPage.header
      .clickCameraPhotoLinkTopMenu()
      .clickSmartPhoneIcon()
      .clickAddToWishlistButton()
      .header.clickWishlist()
      .clickRemoveCheckBox()
      .clickUpdateWishlistButton()
      .checkEmptyMessageText(wishlistPageData.messageText);
  });

  it('moves a product from the wishlist to the cart', () => {
    mainPage.header
      .clickCameraPhotoLinkTopMenu()
      .clickSmartPhoneIcon()
      .clickAddToWishlistButton()
      .header.clickWishlist()
      .clickAddCartCheckBox()
      .clickAddToCartButton()
      .verifyOnCartPage()
      .getProductName()
      .should('be.visible')
      .and('have.text', wishlistPageData.productName);
  });

  it('updates the product quantity in the wishlist', () => {
    mainPage.header
      .clickCameraPhotoLinkTopMenu()
      .clickSmartPhoneIcon()
      .clickAddToWishlistButton()
      .header.clickWishlist()
      .setQuantity(wishlistPageData.quantity)
      .clickUpdateWishlistButton()
      .getQuantityField()
      .should('be.visible')
      .and('have.value', wishlistPageData.quantity);
  });
});
