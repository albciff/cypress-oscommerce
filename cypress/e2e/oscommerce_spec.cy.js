/**
 * @author albciff
 */
import { CatalogPage } from "../support/pages/catalog.cy";
import { ProductPage } from "../support/pages/product.cy";
import { ShoppingCartPage } from "../support/pages/shoppingCart.cy";
import { LoginPage } from "../support/pages/login.cy";
import { OrderConfirmationPage } from "../support/pages/orderConfirmation.cy";
import { PaymentInformationPage } from "../support/pages/paymentInformation.cy";
import { DeliveryInformationPage } from "../support/pages/deliveryInformation.cy";
import { OrderProcessedPage } from "../support/pages/orderProcessed.cy";

const PAYMENT_METHODS = {
  CASH: "cod",
  PAYPAL: "paypal_express",
};

const ORDER_PROCESSED_TEXT = "Your Order Has Been Processed!";

describe("oscommerce - procés de compra", () => {
  before(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://sqademosatp.net/catalog/");
  });

  it("Comprar producte", () => {
    // cerca
    CatalogPage.getCercaInput().clear().type("Samsung Galaxy Tab");
    CatalogPage.getExecutarCercaBtn().click();
    // anem al detall del producte
    CatalogPage.getProductByText("Samsung Galaxy Tab").click();

    // afegim el producte a la cistella
    ProductPage.getAddToCartBtn().click();

    // actualitzem la quantitat i anem al checkout
    ShoppingCartPage.getQuantityInput().clear().type("2");
    ShoppingCartPage.getUpdateQuantityBtn().click();
    ShoppingCartPage.getCheckoutBtn().click();

    // fem login
    LoginPage.getEmailAdressInput().type("albert.ciffone@gmail.com");
    LoginPage.getPasswordInput().type("albert_oscommerce");
    LoginPage.getLoginBtn().click();

    // revisem la informació d'enviament i continuem
    DeliveryInformationPage.getContinueBtn().click();

    // seleccionem la forma de pagament i continuem
    PaymentInformationPage.getPaymentMethodsRadioBtn().check(
      PAYMENT_METHODS.CASH
    );
    PaymentInformationPage.getContinueBtn().click();

    // confirmem la comanda
    OrderConfirmationPage.getConfirmOrderBtn().click();

    // comprovem que la comanda s'ha realitzat correctament
    OrderProcessedPage.getOrderProcessedElement().should(
      "have.text",
      ORDER_PROCESSED_TEXT
    );
  });
});
