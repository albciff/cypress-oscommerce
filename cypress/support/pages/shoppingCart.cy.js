export class ShoppingCartPage {
  static getQuantityInput() {
    return cy.get('input[name="cart_quantity[]"]');
  }

  static getUpdateQuantityBtn() {
    return cy.get("#tdb4");
  }

  static getCheckoutBtn() {
    return cy.get("#tdb5");
  }
}
