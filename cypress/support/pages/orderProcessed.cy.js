export class OrderProcessedPage {
  static getOrderProcessedElement() {
    return cy.get("#bodyContent").find("h1");
  }
}
