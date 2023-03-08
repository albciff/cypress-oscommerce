// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { CatalogPage } from "../support/pages/catalog.cy";
import { ProductPage } from "../support/pages/product.cy";
import { ShoppingCartPage } from "../support/pages/shoppingCart.cy";
import { LoginPage } from "../support/pages/login.cy";
import { OrderConfirmationPage } from "../support/pages/orderConfirmation.cy";
import { PaymentInformationPage } from "../support/pages/paymentInformation.cy";
import { DeliveryInformationPage } from "../support/pages/deliveryInformation.cy";
import { OrderProcessedPage } from "../support/pages/orderProcessed.cy";

const ORDER_PROCESSED_TEXT = "Your Order Has Been Processed!";

Cypress.Commands.add(
  "purchaseProduct",
  (productName, quantity, paymentMethod, emailAddress, password) => {
    // cerca i selecció del producte per anar al detall
    cy.searchAndSelectProduct(productName);

    // actualitzem la quantitat i anem al checkout
    cy.updateQuantityAndCheckout(quantity);

    // fem login
    cy.login(emailAddress, password);

    // revisem la informació d'enviament i continuem
    DeliveryInformationPage.getContinueBtn().click();

    // seleccionem la forma de pagament i continuem
    PaymentInformationPage.getPaymentMethodsRadioBtn().check(paymentMethod);
    PaymentInformationPage.getContinueBtn().click();

    // confirmem la comanda
    OrderConfirmationPage.getConfirmOrderBtn().click();

    // comprovem que la comanda s'ha realitzat correctament
    OrderProcessedPage.getOrderProcessedElement().should(
      "have.text",
      ORDER_PROCESSED_TEXT
    );
  }
);

Cypress.Commands.add("searchAndSelectProduct", (productName) => {
  // cerca
  CatalogPage.getCercaInput().clear().type(productName);
  CatalogPage.getExecutarCercaBtn().click();
  // anem al detall del producte
  CatalogPage.getProductByText(productName).click();

  // afegim el producte a la cistella
  ProductPage.getAddToCartBtn().click();
});

Cypress.Commands.add("updateQuantityAndCheckout", (quantity) => {
  // actualitzem la quantitat i anem al checkout
  ShoppingCartPage.getQuantityInput().clear().type(quantity);
  ShoppingCartPage.getUpdateQuantityBtn().click();
  ShoppingCartPage.getCheckoutBtn().click();
});

Cypress.Commands.add("login", (emailAddress, password) => {
  // fem login
  LoginPage.getEmailAdressInput().type(emailAddress);
  LoginPage.getPasswordInput().type(password);
  LoginPage.getLoginBtn().click();
});
