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

describe("oscommerce - procés de compra", () => {
  beforeEach(() => {
    cy.visit("http://sqademosatp.net/catalog/");
  });

  it("Comprar producte Samsung Galaxy Tab", () => {
    cy.purchaseProduct(
      "Samsung Galaxy Tab",
      "2",
      PAYMENT_METHODS.CASH,
      "albert.ciffone@gmail.com",
      "albert_oscommerce"
    );
  });

  it("Comprar producte Beloved", () => {
    cy.purchaseProduct(
      "Beloved",
      "3",
      PAYMENT_METHODS.CASH,
      "albert.ciffone@gmail.com",
      "albert_oscommerce"
    );
  });
});
