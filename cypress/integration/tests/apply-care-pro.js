import ApplyCareProPage from '../screenobjects/applyCareProPage';
import { faker } from '@faker-js/faker';

const applyCareProApiUrl = '/api/v3/carepro/apply'

describe('Given user apply pro care', function () {
  beforeEach(function () {
    ApplyCareProPage.visitPage();
  });

  it(
    'With professional healthcare experience and without using referral code should redirected to your application has been submitted page', function () {
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
        roles: 'Doctor'
      });

      ApplyCareProPage.inputJobOpportunitySection({ appliedJobOpportunityByPosition: [1,2,3]});
      ApplyCareProPage.inputEngagementTypeSection({ appliedEngagementTypeByPosition: [2,3]});

      ApplyCareProPage.getBackgroundCheckButton('No').scrollIntoView();
      ApplyCareProPage.getBackgroundCheckButton('No').click();
      ApplyCareProPage.chooseHearAboutThisJob({ hearAboutThisJob: 'YouTube'});

      ApplyCareProPage.getDeclarationNameField().should('have.value', `${firstName} ${lastName}`);

      ApplyCareProPage.getAgreementCheckboxByPosition(1).scrollIntoView();
      ApplyCareProPage.getAgreementCheckboxByPosition(1).click();
      ApplyCareProPage.getAgreementCheckboxByPosition(2).scrollIntoView();
      ApplyCareProPage.getAgreementCheckboxByPosition(2).click();

      cy.intercept({
        method: 'POST',
        url : applyCareProApiUrl
      }).as('applyCareProApi');

      ApplyCareProPage.getSubmitApplicationButton().scrollIntoView();
      ApplyCareProPage.getSubmitApplicationButton().click();

      cy.wait('@applyCareProApi');
      ApplyCareProPage.getSuccessApplyWording().should('contain', 'Your application has been submitted!');
  });

  it(
    'Without professional healthcare experience and without using referral code should redirected to your application has been submitted page', function () {
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
        isSingaporeResident: 'No'
      });

      ApplyCareProPage.inputRolesSection({
        haveProfessionalHealthcareExperience: 'No',
        roles: 'Admin'
      });

      ApplyCareProPage.inputJobOpportunitySection({ appliedJobOpportunityByPosition: [4,1]});
      ApplyCareProPage.inputEngagementTypeSection({ appliedEngagementTypeByPosition: [1]});

      ApplyCareProPage.getBackgroundCheckButton('Yes').scrollIntoView();
      ApplyCareProPage.getBackgroundCheckButton('Yes').click();
      ApplyCareProPage.chooseHearAboutThisJob({ hearAboutThisJob: 'Community clubs & groups'});

      ApplyCareProPage.getDeclarationNameField().should('have.value', `${firstName} ${lastName}`);

      ApplyCareProPage.getAgreementCheckboxByPosition(1).scrollIntoView();
      ApplyCareProPage.getAgreementCheckboxByPosition(1).click();
      ApplyCareProPage.getAgreementCheckboxByPosition(2).scrollIntoView();
      ApplyCareProPage.getAgreementCheckboxByPosition(2).click();

      cy.intercept({
        method: 'POST',
        url : applyCareProApiUrl
      }).as('applyCareProApi');

      ApplyCareProPage.getSubmitApplicationButton().scrollIntoView();
      ApplyCareProPage.getSubmitApplicationButton().click();

      cy.wait('@applyCareProApi');
      ApplyCareProPage.getSuccessApplyWording().should('contain', 'Your application has been submitted!');
  });

  it(
    'Without professional healthcare experience and with using referral code should redirected to your application has been submitted page', function () {
    
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
        isSingaporeResident: 'No'
      });

      ApplyCareProPage.inputRolesSection({
        haveProfessionalHealthcareExperience: 'No',
        roles: 'Caregiver'
      });

      ApplyCareProPage.inputJobOpportunitySection({ appliedJobOpportunityByPosition: [1]});
      ApplyCareProPage.inputEngagementTypeSection({ appliedEngagementTypeByPosition: [1,2,3]});

      ApplyCareProPage.getBackgroundCheckButton('Yes').scrollIntoView();
      ApplyCareProPage.getBackgroundCheckButton('Yes').click();

      ApplyCareProPage.getReferralCodeField().scrollIntoView();
      ApplyCareProPage.typeReferralCode(faker.random.alphaNumeric(5).toUpperCase());
      ApplyCareProPage.chooseHearAboutThisJob({ hearAboutThisJob: 'TV'});

      ApplyCareProPage.getDeclarationNameField().should('have.value', `${firstName} ${lastName}`);

      ApplyCareProPage.getAgreementCheckboxByPosition(1).scrollIntoView();
      ApplyCareProPage.getAgreementCheckboxByPosition(1).click();
      ApplyCareProPage.getAgreementCheckboxByPosition(2).scrollIntoView();
      ApplyCareProPage.getAgreementCheckboxByPosition(2).click();

      cy.intercept({
        method: 'POST',
        url : applyCareProApiUrl
      }).as('applyCareProApi');

      ApplyCareProPage.getSubmitApplicationButton().scrollIntoView();
      ApplyCareProPage.getSubmitApplicationButton().click();

      cy.wait('@applyCareProApi');
      ApplyCareProPage.getSuccessApplyWording().should('contain', 'Your application has been submitted!');
  });
});
