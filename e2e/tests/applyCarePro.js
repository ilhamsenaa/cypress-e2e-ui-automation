import ApplyCareProScreen from '../../screenobjects/applyCareProScreen';
import generalHelper from '../../helper/general/generalHelper';
import { faker } from '@faker-js/faker';

const applyCareProApiUrl = '/api/v3/carepro/apply'

describe('Given user apply pro care', function () {
  beforeEach(function () {
    ApplyCareProScreen.visitPage();
  });

  it(
    'With professional healthcare experience and without using referral code should redirected to your application has been submitted page', function () {
      const fullName = generalHelper.generateName();

      ApplyCareProScreen.inputBasicDetailsSection({ 
        firstName: fullName.firstName, 
        lastName: fullName.lastName,
        email:faker.internet.exampleEmail({ 
          firstName: fullName.firstName, 
          lastName: fullName.lastName
        }),
        phoneNumber: generalHelper.generatePhoneNumber('sg'),
        isLegalAge: 'Yes',
        residencyStatus: 'Singapore Citizen'
      });

      ApplyCareProScreen.inputRolesSection({
        haveProfessionalHealthcareExperience: 'Yes',
        yearsOExperience: '1 to 3',
        roles: 'Doctor'
      });

      ApplyCareProScreen.inputJobOpportunitySection({ appliedJobOpportunityByPosition: [1,2,3]});
      ApplyCareProScreen.inputEngagementTypeSection({ appliedEngagementTypeByPosition: [2,3]});

      ApplyCareProScreen.getBackgroundCheckButton('No').scrollIntoView();
      ApplyCareProScreen.getBackgroundCheckButton('No').click();
      ApplyCareProScreen.chooseHearAboutThisJob({ hearAboutThisJob: 'Job board - Jobstreet'});

      ApplyCareProScreen.getDeclarationNameField().should('have.value', `${fullName.firstName} ${fullName.lastName}`);

      ApplyCareProScreen.getAgreementCheckboxByPosition(1).scrollIntoView();
      ApplyCareProScreen.getAgreementCheckboxByPosition(1).click();
      ApplyCareProScreen.getAgreementCheckboxByPosition(2).scrollIntoView();
      ApplyCareProScreen.getAgreementCheckboxByPosition(2).click();

      cy.intercept({
        method: 'POST',
        url : applyCareProApiUrl
      }).as('applyCareProApi');

      ApplyCareProScreen.getSubmitApplicationButton().scrollIntoView();
      ApplyCareProScreen.getSubmitApplicationButton().click();

      cy.wait('@applyCareProApi');
      ApplyCareProScreen.getSuccessApplyWording().should('contain', 'Your application has been submitted!');
  });

  it(
    'Without professional healthcare experience and without using referral code should redirected to your application has been submitted page', function () {
      const fullName = generalHelper.generateName();

      ApplyCareProScreen.inputBasicDetailsSection({ 
        firstName: fullName.firstName, 
        lastName: fullName.lastName,
        email:faker.internet.exampleEmail({ 
          firstName: fullName.firstName, 
          lastName: fullName.lastName
        }),
        phoneNumber: generalHelper.generatePhoneNumber('sg'),
        isLegalAge: 'Yes',
        residencyStatus: 'Singapore Citizen'
      });

      ApplyCareProScreen.inputRolesSection({
        haveProfessionalHealthcareExperience: 'No',
        roles: 'Admin'
      });

      ApplyCareProScreen.inputJobOpportunitySection({ appliedJobOpportunityByPosition: [4,1]});
      ApplyCareProScreen.inputEngagementTypeSection({ appliedEngagementTypeByPosition: [1]});

      ApplyCareProScreen.getBackgroundCheckButton('Yes').scrollIntoView();
      ApplyCareProScreen.getBackgroundCheckButton('Yes').click();
      ApplyCareProScreen.chooseHearAboutThisJob({ hearAboutThisJob: 'Job board - Jobstreet'});

      ApplyCareProScreen.getDeclarationNameField().should('have.value', `${fullName.firstName} ${fullName.lastName}`);

      ApplyCareProScreen.getAgreementCheckboxByPosition(1).scrollIntoView();
      ApplyCareProScreen.getAgreementCheckboxByPosition(1).click();
      ApplyCareProScreen.getAgreementCheckboxByPosition(2).scrollIntoView();
      ApplyCareProScreen.getAgreementCheckboxByPosition(2).click();

      cy.intercept({
        method: 'POST',
        url : applyCareProApiUrl
      }).as('applyCareProApi');

      ApplyCareProScreen.getSubmitApplicationButton().scrollIntoView();
      ApplyCareProScreen.getSubmitApplicationButton().click();

      cy.wait('@applyCareProApi');
      ApplyCareProScreen.getSuccessApplyWording().should('contain', 'Your application has been submitted!');
  });

  it(
    'Without professional healthcare experience and with using referral code should redirected to your application has been submitted page', function () {
      const fullName = generalHelper.generateName();
      
      ApplyCareProScreen.inputBasicDetailsSection({ 
        firstName: fullName.firstName, 
        lastName: fullName.lastName,
        email:faker.internet.exampleEmail({ 
          firstName: fullName.firstName, 
          lastName: fullName.lastName
        }),
        phoneNumber: generalHelper.generatePhoneNumber('sg'),
        isLegalAge: 'Yes',
        residencyStatus: 'Singapore Citizen'
      });

      ApplyCareProScreen.inputRolesSection({
        haveProfessionalHealthcareExperience: 'No',
        roles: 'Caregiver'
      });

      ApplyCareProScreen.inputJobOpportunitySection({ appliedJobOpportunityByPosition: [1]});
      ApplyCareProScreen.inputEngagementTypeSection({ appliedEngagementTypeByPosition: [1,2,3]});

      ApplyCareProScreen.getBackgroundCheckButton('Yes').scrollIntoView();
      ApplyCareProScreen.getBackgroundCheckButton('Yes').click();

      ApplyCareProScreen.getReferralCodeField().scrollIntoView();
      ApplyCareProScreen.typeReferralCode(faker.random.alphaNumeric(5).toUpperCase());
      ApplyCareProScreen.chooseHearAboutThisJob({ hearAboutThisJob: 'Job board - SnatchJobs'});

      ApplyCareProScreen.getDeclarationNameField().should('have.value', `${fullName.firstName} ${fullName.lastName}`);

      ApplyCareProScreen.getAgreementCheckboxByPosition(1).scrollIntoView();
      ApplyCareProScreen.getAgreementCheckboxByPosition(1).click();
      ApplyCareProScreen.getAgreementCheckboxByPosition(2).scrollIntoView();
      ApplyCareProScreen.getAgreementCheckboxByPosition(2).click();

      cy.intercept({
        method: 'POST',
        url : applyCareProApiUrl
      }).as('applyCareProApi');

      ApplyCareProScreen.getSubmitApplicationButton().scrollIntoView();
      ApplyCareProScreen.getSubmitApplicationButton().click();

      cy.wait('@applyCareProApi');
      ApplyCareProScreen.getSuccessApplyWording().should('contain', 'Your application has been submitted!');
  });
});
