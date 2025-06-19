/// <reference types="cypress" />

import { MainPage } from '../../pageObjects';
import { mainPageData, productPageData } from '../../fixtures/pom';

describe('Product Page – Interactions and Validations', () => {
  const mainPage = new MainPage();

  it('displays Free Shipping label on product page', () => {
    mainPage.clickOwnComputerLink().getFreeShipping().should('be.visible');
  });

  it('returns to main page after clicking the logo', () => {
    mainPage
      .clickOwnComputerLink()
      .header.clickLogo()
      .checkPageTitle(mainPageData.pageTitle);
  });

  it('sets shoe size and verifies it in the cart', () => {
    mainPage.sideMenu
      .clickShoesButton()
      .clickSneakersIcon()
      .setSizeSelect(productPageData.shoeSize)
      .clickAddCartButton()
      .header.clickShoppingCart()
      .checkSizeFromAttributes(productPageData.shoeSize);
  });

  it('sets shoe color and verifies it in the cart', () => {
    mainPage.sideMenu
      .clickShoesButton()
      .clickSneakersIcon()
      .clickGreenColor()
      .clickAddCartButton()
      .header.clickShoppingCart()
      .checkColorFromAttributes(productPageData.shoeColor);
  });

  it('adds a product review and verifies success message', () => {
    mainPage.header
      .clickLogIn()
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
