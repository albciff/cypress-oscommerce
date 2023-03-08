export class CatalogPage {
  static getInputCerca() {
    return cy.get('input[name="keywords"]');
  }

  static getBotoExecutarCerca() {
    return cy.get('input[alt="Quick Find"]');
  }

  static getProductByText(productText) {
    return cy.get('img[title="' + productText + '"]');
  }
}
