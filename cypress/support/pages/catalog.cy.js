export class CatalogPage {
  static getCercaInput() {
    return cy.get('input[name="keywords"]');
  }

  static getExecutarCercaBtn() {
    return cy.get('input[alt="Quick Find"]');
  }

  static getProductByText(productText) {
    // a vegades el producte està com a resultat de la cerca i en algun altre punt de la
    // pantalla, per evitar que el click ens rebenti en aquests casos recuperem el primer
    return cy.get('img[title="' + productText + '"]').first();
  }
}
