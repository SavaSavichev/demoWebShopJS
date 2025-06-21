/// <reference types="cypress" />

import { MainPage } from '../../pageObjects';
import { cartPageData } from '../../fixtures/pom';

describe('Cart Page – User Interactions and Validations', () => {
  const mainPage = new MainPage();

  it('adds laptop to cart from the main page', () => {
    mainPage
      .clickLaptopAddToCartButton()
      .header.clickShoppingCart()
      .verifyOnCartPage()
      .getProductName()
      .should('be.visible')
      .and('have.text', cartPageData.productName);
  });

  it('adds laptop to cart from the product page', () => {
    mainPage
      .clickLaptopLink()
      .clickAddCartButton()
      .header.clickShoppingCart()
      .verifyOnCartPage()
      .getProductName()
      .should('be.visible')
      .and('have.text', cartPageData.productName);
  });

  it('increases quantity of the product in the cart', () => {
    mainPage
      .clickLaptopAddToCartButton()
      .header.clickShoppingCart()
      .setQuantity(cartPageData.productQuantity)
      .clickUpdateQuantity()
      .getQuantityInput()
      .should('be.visible')
      .and('have.value', cartPageData.productQuantity);
  });

  it('updates total price according to quantity', () => {
    mainPage
      .clickLaptopAddToCartButton()
      .header.clickShoppingCart()
      .setQuantity(cartPageData.productQuantity)
      .clickUpdateQuantity()
      .checkTotalPrice(cartPageData.productQuantity);
  });

  it('displays warning popup if terms are not accepted', () => {
    mainPage
      .clickLaptopAddToCartButton()
      .header.clickShoppingCart()
      .clickCheckoutButton()
      .checkWarningBoxText(cartPageData.warningBoxText);
  });
});
