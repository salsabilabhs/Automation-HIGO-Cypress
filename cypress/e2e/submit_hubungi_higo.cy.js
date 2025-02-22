import hubungihigo_page from "../support/website/hubungihigo_page"

describe('User submit needs/questions for HIGO on menu Hubungi HIGO', () => {
    beforeEach(() => {
        cy.visit("")
        cy.xpath(hubungihigo_page.hubungihigo_menu).click()
        cy.url().should('include', '/contact-us')
    })

})