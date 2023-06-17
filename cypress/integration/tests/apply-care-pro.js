import ApplyCareProPage from '../screenobjects/applyCareProPage';
import { faker } from '@faker-js/faker';

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
    'With professional healthcare experience and without using referral code', function () {
      const firstName = faker.person.firstName();
      const lastName = faker.person.lastName();

      ApplyCareProPage.inputBasicDetailsSection({ 
        firstName: firstName, 
        lastName: lastName,
        email:faker.internet.exampleEmail({ 
          firstName: firstName, 
          lastName: lastName
        }),
        phoneNumber: faker.phone.number('3#######'),
        isLegalAge: 'Yes',
        isSingaporeResident: 'Yes'
      });

      ApplyCareProPage.inputRolesSection({
        haveProfessionalHealthcareExperience: 'Yes',
        yearsOExperience: '1 to 3',
        roles: Doctor
      });

      ApplyCareProPage.inputJobOpportunitySection({ appliedJobOpportunityByPosition: [1,2,3]});
      ApplyCareProPage.inputEngagementTypeSection({ appliedEngagementTypeByPosition: [2,3,1]});

      cy.scrollIntoView(ApplyCareProPage.getBackgroundCheckButton('No'));
      ApplyCareProPage.getBackgroundCheckButton('No').click();
      ApplyCareProPage.chooseHearAboutThisJob({ hearAboutThisJob: 'YouTube'});

      cy.scrollIntoView(ApplyCareProPage.getAgreementCheckboxByPosition(1));
      ApplyCareProPage.getAgreementCheckboxByPosition(1).click();
      cy.scrollIntoView(ApplyCareProPage.getAgreementCheckboxByPosition(2));
      ApplyCareProPage.getAgreementCheckboxByPosition(2).click();

      cy.scrollIntoView(ApplyCareProPage.getSubmitApplicationButton());
      ApplyCareProPage.getSubmitApplicationButton().click();
  });

  it(
    'Without experience and without using referral code', function () {


  });

  it(
    'Without experience and with using referral code', function () {
    
  });
});
