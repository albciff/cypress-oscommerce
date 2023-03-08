export class LoginPage {
  static getEmailAdressInput() {
    return cy.get('input[name="email_address"]');
  }

  static getPasswordInput() {
    return cy.get('input[name="password"]');
  }

  static getLoginBtn() {
    return cy.get("#tdb1");
  }
}
