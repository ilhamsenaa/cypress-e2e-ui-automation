import applyCareProData from './applyCarePro.json'
import generalHelper from '../../general/generalHelper'

export default class applyCarePro {
    static applyCarePro(requestParameter) {
      applyCareProData.email = generalHelper.generateEmail();
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