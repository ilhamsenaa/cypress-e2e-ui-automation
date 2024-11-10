import applyCareProData from './applyCarePro.json'

export default class applyCarePro {
    static applyCarePro(requestParameter) {
        const url = 'https://api.homage.sg/api/v3/carepro/apply'
        cy.request({
            method: 'POST',
            url: url,
            body: applyCareProData
          }).then((response) => {
            expect(response.status).to.eq(200)
          })
    }
}