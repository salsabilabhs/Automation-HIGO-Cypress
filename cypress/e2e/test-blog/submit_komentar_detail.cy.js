import detailarticle_blog from "../../support/blog/detailarticle_blog"

describe('User submit Komentar on article detail', () => {

    beforeEach(() => {
        // Menangani uncaught exceptions agar test tidak gagal
        Cypress.on('uncaught:exception', (err, runnable) => {
            console.error('Uncaught Exception:', err.message);
            return false;  // Mencegah Cypress menghentikan test
        })
    })

    it('User successfully submit Komentar with valid credentials on article detail', () => {
        cy.fixture('detailarticle_blog_fixtures').then((data) => {
            cy.origin('https://blog.higo.id', { args: { data, detailarticle_blog } }, ( {data, detailarticle_blog} ) => {
                cy.visit('/alasan-personalized-marketing-penting-di-tahun-2025', { failOnStatusCode: false })
                
                cy.get(detailarticle_blog.field_nama).should('be.visible')
                cy.get(detailarticle_blog.field_komentar).should('be.visible')

                cy.get(detailarticle_blog.field_nama).invoke('val', data.nama_valid)
                cy.get(detailarticle_blog.field_komentar).invoke('val', data.komentar_valid, '{tab} {enter}')
                // .trigger('input').focus().type('{tab}{enter}')
                // cy.get(detailarticle_blog.submit_komentar_btn).invoke('click')

                // BUTTON KIRIM TIDAK BISA DIKLIK KETIKA RUN AUTOMATION KARENA MASALAH REACTJS. SEBAIKNYA DISKUSIKAN DENGAN DEV.
                cy.get(detailarticle_blog.submit_komentar_btn).should('be.visible').click({force:true})
            })
        })
    })

    it('User unsuccessfully submit Komentar with invalid credentials on article detail', () => {
        cy.fixture('detailarticle_blog_fixtures').then((data) => {
            cy.origin('https://blog.higo.id', { args: { data, detailarticle_blog } }, ( {data, detailarticle_blog} ) => {
                cy.visit('/alasan-personalized-marketing-penting-di-tahun-2025', { failOnStatusCode: false })
                
                cy.get(detailarticle_blog.field_nama).should('be.visible').invoke('val', data.nama_invalid)
                .focus().blur()
                cy.get(detailarticle_blog.field_komentar).should('be.visible').invoke('val',data.komentar_invalid)
                .focus().blur()

                // BUTTON KIRIM TIDAK BISA DIKLIK KETIKA RUN AUTOMATION KARENA MASALAH REACTJS. SEBAIKNYA DISKUSIKAN DENGAN DEV.

                // cy.get(detailarticle_blog.nama_error_msg).should('be.visible')
                cy.get(detailarticle_blog.nama_error_msg).should('have.text', data.nama_error_text)
                // cy.get(detailarticle_blog.komentar_error_msg).should('be.visible')
                cy.get(detailarticle_blog.nama_error_msg).should('have.text', data.komentar_error_text)
                cy.get(detailarticle_blog.submit_komentar_btn).should('be.disabled')

                // cy.get(detailarticle_blog.field_komentar).then(($el) => {
                    //     $el[0].value = '         '; // Isi input secara langsung
                    //     $el[0].dispatchEvent(new Event('input', { bubbles: true })); // Paksa React mendeteksi perubahan
                    //   });
            })
        })
    })
})