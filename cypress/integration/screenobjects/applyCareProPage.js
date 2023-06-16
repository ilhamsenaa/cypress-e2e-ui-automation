export default class applyCareProPage {
    static visitPage() {
       return cy.visit('https://apply.homage.sg/');
    }

    static getFirstNameField() {
        return cy.get('#firstName');
    }

    static getLastNameField() {
        return cy.get('#lastname');
    }

    static getEmailField() {
        return cy.get('#email');
    }

    static getPhoneNumberField() {
        return cy.get('#phone');
    }

    static getIsLegalAgeButton(isLegalAge) {
        return cy.get('.legalAge > div > .cpf-btn').contains(isLegalAge);
    }

    static getIsCountrySingaporeButton(isCountrySg) {
        return cy.get('#countrysg > .cpf-btn').contains(isCountrySg);
    }

    static getHaveProfessionalHealthcareExperience(haveProfessionalHealthcareExperience) {
        return cy.get('.yes-no-sg > .cpf-btn').contains(haveProfessionalHealthcareExperience);
    }

    static getJobOpportunityByPosition(jobOpportunityPosition) {
        return cy.get('.job_opp > .cpf-sec > .cpf-box.cpf-card').eq(jobOpportunityPosition + 1);
    }

    static getEngagementTypeByPosition(engagementTypePosition) {
        return cy.get('.job_opp > .cpf-sec > .cpf-box.cpf-card').eq(engagementTypePosition + 1);
    }

    static getBackgroundCheck(haveCommitCrime) {
        return cy.get('div:nth-child(17) > .cpf-box.cpf-btn').contains(haveCommitCrime);
    }

    static getReferralField() {
        return cy.get('#referral');
    }

    static getAgreementCheckboxByPosition(checkboxPosition) {
        return cy.get('.cpf-checkbox').eq(checkboxPosition - 1);
    }
}