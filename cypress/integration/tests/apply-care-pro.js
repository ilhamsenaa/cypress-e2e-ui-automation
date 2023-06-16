import ApplyCareProPage from '../screenobjects/applyCareProPage';


describe('Given user apply pro care', function () {
  beforeEach(function () {
    ApplyCareProPage.visitpage();
  });

  Cypress.on('uncaught:exception', (err, runnable) => {
    /**
      * i use this because to prevent failing test because there
      * is uncaught exception and that make the test fail
      */
    return false
  });

  it(
    'With', function () {
    }
  );
});
