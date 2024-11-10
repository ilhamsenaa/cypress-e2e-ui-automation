export default class applyCareProScreen {
    static visitPage() {
       return cy.visit('https://apply.homage.sg/');
    }

    static getFirstNameField() {
        return cy.get('#firstName');
    }

    static getLastNameField() {
        return cy.get('#lastName');
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

    static getResidencyStatusDropdownField() {
        return cy.get('div#nationality');
    }

    static getResidencyStatusDropdownValue(residencyStatus) {
        return cy.get(`[data-value="${residencyStatus}"]`);
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

    static getJobOpportunityButtonByPosition(jobOpportunityPosition) {
        return cy.get('.job_opp > .cpf-sec > .cpf-box.cpf-card').eq(jobOpportunityPosition - 1);
    }

    static getEngagementTypeButtonByPosition(engagementTypePosition) {
        return cy.get('.engage_type > .cpf-sec > .cpf-box.cpf-card').eq(engagementTypePosition - 1);
    }

    static getBackgroundCheckButton(haveCommitCrime) {
        return cy.get('div:nth-child(17) > .cpf-box.cpf-btn').contains(haveCommitCrime);
    }

    static getReferralCodeField() {
        return cy.get('#referral');
    }

    static getHearAboutThisJobDropdownField() {
        return cy.get('#source');
    }

    static getDeclarationNameField() {
        return cy.get('#declarationName');
    }

    static getHearAboutThisJobDropdownValue(hearAboutThisJob) {
        return cy.get(`[data-value="${hearAboutThisJob}"]`);
    }

    

    static getAgreementCheckboxByPosition(checkboxPosition) {
        return cy.get('.cpf-checkbox').eq(checkboxPosition - 1);
    }

    static getSubmitApplicationButton() {
        return cy.get('.cpf-submit');
    }

    static getSuccessApplyWording() {
        return cy.get('.cpf-content.cpf-success > h1');
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

    static chooseResidencyStatus(residencyStatus) {
        this.getResidencyStatusDropdownField().scrollIntoView();
        this.getResidencyStatusDropdownField().click();
        this.getResidencyStatusDropdownValue(residencyStatus).scrollIntoView();
        this.getResidencyStatusDropdownValue(residencyStatus).click();
    }

    static inputBasicDetailsSection({ firstName, lastName, email, phoneNumber, isLegalAge, residencyStatus}) {
        this.typeFirstname(firstName);
        this.typeLastname(lastName)
        this.typeEmail(email);
        this.typePhoneNumber(phoneNumber);

        this.getIsLegalAgeButton(isLegalAge).click();
        this.chooseResidencyStatus(residencyStatus)
        // this.getIsSingaporeResidentButton(isSingaporeResident).click();
    }

    static inputRolesSection({ haveProfessionalHealthcareExperience, yearsOExperience, roles }) {
        this.getHaveProfessionalHealthcareExperienceButton(haveProfessionalHealthcareExperience).scrollIntoView();
        this.getHaveProfessionalHealthcareExperienceButton(haveProfessionalHealthcareExperience).click();
        if (haveProfessionalHealthcareExperience === 'Yes') {
            this.getYearsProfessionalHealthExperienceButton(yearsOExperience).scrollIntoView
            this.getYearsProfessionalHealthExperienceButton(yearsOExperience).click();
            this.getRolesButton(roles).scrollIntoView();
            this.getRolesButton(roles).click();
        } else {
            this.getRolesButton(roles).scrollIntoView();
            this.getRolesButton(roles).click();
        }
    }

    static inputJobOpportunitySection({ appliedJobOpportunityByPosition }) {
        for (let index = 0; index < appliedJobOpportunityByPosition.length; index++ ) {
            this.getJobOpportunityButtonByPosition(appliedJobOpportunityByPosition[index]).scrollIntoView();
            this.getJobOpportunityButtonByPosition(appliedJobOpportunityByPosition[index]).click();
        }
    }

    static inputEngagementTypeSection({ appliedEngagementTypeByPosition }) {
        for (let index = 0; index < appliedEngagementTypeByPosition.length; index++ ) {
            this.getEngagementTypeButtonByPosition(appliedEngagementTypeByPosition[index]).scrollIntoView();
            this.getEngagementTypeButtonByPosition(appliedEngagementTypeByPosition[index]).click();
        }
    }

    static chooseHearAboutThisJob({ hearAboutThisJob }) {
        this.getHearAboutThisJobDropdownField().scrollIntoView();
        this.getHearAboutThisJobDropdownField().click();
        this.getHearAboutThisJobDropdownValue(hearAboutThisJob).scrollIntoView();
        this.getHearAboutThisJobDropdownValue(hearAboutThisJob).click();
    }
}