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

    static getIsSingaporeResidentButton(isSingaporeResident) {
        return cy.get('#countrysg > .cpf-btn').contains(isSingaporeResident);
    }

    static getHaveProfessionalHealthcareExperienceButton(haveProfessionalHealthcareExperience) {
        return cy.get('.yes-no-sg > .cpf-btn').contains(haveProfessionalHealthcareExperience);
    }

    static getYearsProfessionalHealthExperienceButton(year) {
        return cy.get('.cpf-box.cpf-border > .g').contains(year);
    }

    static getRolesButton(roles) {
        return cy.get('.cpf-box.cpf-border.justify-between > div > .g').contains(roles);
    }

    static getJobOpportunityByPosition(jobOpportunityPosition) {
        return cy.get('.job_opp > .cpf-sec > .cpf-box.cpf-card').eq(jobOpportunityPosition - 1);
    }

    static getEngagementTypeByPosition(engagementTypePosition) {
        return cy.get('.job_opp > .cpf-sec > .cpf-box.cpf-card').eq(engagementTypePosition - 1);
    }

    static getBackgroundCheck(haveCommitCrime) {
        return cy.get('div:nth-child(17) > .cpf-box.cpf-btn').contains(haveCommitCrime);
    }

    static getReferralCodeField() {
        return cy.get('#referral');
    }

    static getAgreementCheckboxByPosition(checkboxPosition) {
        return cy.get('.cpf-checkbox').eq(checkboxPosition - 1);
    }

    static getSubmitApplicationButton() {
        return cy.get('.cpf-submit');
    }

    static typeFirstname(firstName) {
        this.getFirstNameField().type(firstName);
    }

    static typeLastname(lastName) {
        this.getLastNameField().type(lastName);
    }

    static typeEmail(email) {
        this.getEmailField().type(email);
    }

    static typePhoneNumber(phoneNumber) {
        this.getPhoneNumberField().type(phoneNumber);
    }

    static typeReferralCode(referralCode) {
        this.getReferralCodeField().type(referralCode);
    }

    static inputBasicDetailsSection({ firstName, lastName, email, phoneNumber, isLegalAge, isSingaporeResident}) {
        this.typeFirstname(firstName);
        this.typeLastname(lastName)
        this.typeEmail(email);
        this.phoneNumber(phoneNumber);

        this.getIsLegalAgeButton(isLegalAge);
        this.getIsSingaporeResidentButton(isSingaporeResident);
    }

    static inputRolesSection({haveProfessionalHealthcareExperience, yearsOExperience, roles}) {
        cy.scrollIntoView(this.getHaveProfessionalHealthcareExperienceButton(haveProfessionalHealthcareExperience));
        this.getHaveProfessionalHealthcareExperienceButton(haveProfessionalHealthcareExperience).click();
        if (haveProfessionalHealthcareExperience === 'Yes') {
            cy.scrollIntoView(this.getYearsProfessionalHealthExperienceButton(years));
            this.getYearsProfessionalHealthExperienceButton(yearsOExperience).click();
            cy.scrollIntoView(this.getRolesButton(roles));
            this.getRolesButton(roles).click();
        } else {
            cy.scrollIntoView(this.getRolesButton(roles));
            this.getRolesButton(roles).click();
        }
    }
}