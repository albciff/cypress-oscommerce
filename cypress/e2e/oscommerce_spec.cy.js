/**
 * @author albciff
 */
import { CatalogPage } from "../support/pages/catalog.cy";

describe("oscommerce - procés de compra", () => {
  before(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit("http://sqademosatp.net/catalog/");
  });

  it("Cercar el producte al cataleg", () => {
    // cerca
    CatalogPage.getInputCerca().type("Samsung Galaxy Tab");
    CatalogPage.getBotoExecutarCerca().click();

    // anem al detall del producte
    CatalogPage.getProductByText("Samsung Galaxy Tab").click();
  });
});
