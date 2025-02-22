import hubungihigo_page from "../support/website/hubungihigo_page"

describe('User User validate menu Hubungi HIGO', () => {
    beforeEach(() => {
        cy.visit("")
        cy.xpath(hubungihigo_page.hubungihigo_menu).click()
        cy.url().should('include', '/contact-us')
    })

    it('User successfully access menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.wording_title).should('have.text', data.title_text)
            cy.xpath(hubungihigo_page.wording_desc).should('have.text', data.desc_text)

            cy.xpath(hubungihigo_page.contact_section).should('be.visible')
            cy.xpath(hubungihigo_page.higo_email).should('have.text', data.higo_email_text)
            cy.xpath(hubungihigo_page.higo_phone).should('have.text', data.higo_phone_text)
            cy.xpath(hubungihigo_page.higo_location).should('have.text', data.higo_location_text)

            cy.xpath(hubungihigo_page.form_section).should('be.visible')
            cy.xpath(hubungihigo_page.form_title).should('have.text', data.form_title_text)
            cy.xpath(hubungihigo_page.field_namalengkap).should('be.visible')
            cy.xpath(hubungihigo_page.field_email).should('be.visible')
            cy.xpath(hubungihigo_page.field_notelp).should('be.visible')
            cy.xpath(hubungihigo_page.field_namaclient).should('be.visible')
            cy.xpath(hubungihigo_page.dropdown_layanan).should('be.visible')
            cy.xpath(hubungihigo_page.textbox_pesan).should('be.visible')
            cy.xpath(hubungihigo_page.submit_btn).should('be.visible')
        })
    })
})