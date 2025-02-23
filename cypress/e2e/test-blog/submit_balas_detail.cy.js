import detailarticle_blog from "../../support/blog/detailarticle_blog"

describe('User submit Balas on Komentar of article detail', () => {

    beforeEach(() => {
        // Menangani uncaught exceptions agar test tidak gagal
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught Exception:', err.message);
            return false;  // Mencegah Cypress menghentikan test
        })
    })

    it('User successfully submit Balas on Komentar of article detail', () => {
        cy.fixture('detailarticle_blog_fixtures').then((data) => {
            cy.origin('https://blog.higo.id', { args: { data, detailarticle_blog } }, ( {data, detailarticle_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/alasan-personalized-marketing-penting-di-tahun-2025', { failOnStatusCode: false })

                cy.xpath(detailarticle_blog.likes_btn).should('be.visible').click()

                // ELEMENT TIDAK BISA DIINTERAKSI MENGGUNAKAN AUTOMATION, HARUS DIDISCUSS BERSAMA DEV.

                cy.xpath(detailarticle_blog.balas_btn).should('be.visible').invoke('click')
                cy.xpath(detailarticle_blog.balas_fieldnama).should('be.visible').invoke('val', data.nama_valid)
                cy.xpath(detailarticle_blog.balas_fieldkomentar).should('be.visible').invoke('val', data.komentar_valid)

                
            })
        })
    })

})