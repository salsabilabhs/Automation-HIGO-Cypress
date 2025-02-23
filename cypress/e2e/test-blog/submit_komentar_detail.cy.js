import detailarticle from "../../support/blog/detailarticle_blog"
import dashboard from "../../support/blog/dashboard_blog"

describe('User submit Komentar on article detail', () => {
    beforeEach(()=> {
        cy.visit('/alasan-personalized-marketing-penting-di-tahun-2025')
    })

    it('User successfully submit Komentar with valid credentials on article detail', () => {
        cy.fixture('detailarticle_blog').then((data) => {
                cy.xpath(detailarticle.field_nama).type(data.nama_valid)
                cy.xpath(detailarticle.field_nama).type(data.komentar_valid)
        })
    })
})