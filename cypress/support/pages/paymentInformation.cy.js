export class PaymentInformationPage {
  static getContinueBtn() {
    return cy.get("#tdb6");
  }
  static getPaymentMethodsRadioBtn() {
    return cy.get('input[name="payment"]');
  }
}
