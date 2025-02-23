import digitalreports_page from "../../support/website/digitalreports_page"

describe('User Download Report menu Digital Reports', () => {
    beforeEach(() => {
        cy.visit("")
        cy.xpath(digitalreports_page.figitalreports_menu).click()
        cy.url().should('include', '/digital-reports')
        cy.xpath(digitalreports_page.download_btn).click()
    })

    it('User unsuccessfully Download Report with valid credentials on menu Digital Reports because Captcha', () => {
        cy.fixture('digitalreports_page').then((data) => {
            cy.xpath(digitalreports_page.field_firstname).type(data.firstname_valid)
            cy.xpath(digitalreports_page.field_lastname).type(data.lastname_valid)
            cy.xpath(digitalreports_page.field_email).type(data.email_valid)
            cy.xpath(digitalreports_page.field_whatsapp).type(data.whatsapp_valid)
            cy.xpath(digitalreports_page.field_companyname).type(data.companyname_valid)
            cy.xpath(digitalreports_page.field_jobtitle).type(data.jobtitle_valid)
            cy.xpath(digitalreports_page.dapatkanreport_btn).click()

            cy.xpath(digitalreports_page.show_error_msg).should('be.visible')
            cy.xpath(digitalreports_page.show_error_msg).should('have.text', data.captcha_error_text)
        })
    })

    it('User unsuccessfully Download Report with invalid credentials on menu Digital Reports', () => {
        cy.fixture('digitalreports_page').then((data) => {
            cy.xpath(digitalreports_page.field_firstname).type(data.firstname_invalid)
            cy.xpath(digitalreports_page.firstname_show_error).should('be.visible')
            cy.xpath(digitalreports_page.firstname_show_error).should('have.text', data.firstname_error_text)

            cy.xpath(digitalreports_page.field_lastname).type(data.lastname_invalid)
            cy.xpath(digitalreports_page.lastname_show_error).should('be.visible')
            cy.xpath(digitalreports_page.lastname_show_error).should('have.text', data.lastname_error_text)

            cy.xpath(digitalreports_page.field_email).type(data.email_invalid)
            cy.xpath(digitalreports_page.email_show_error).should('be.visible')
            cy.xpath(digitalreports_page.email_show_error).should('have.text', data.email_error_text)

            cy.xpath(digitalreports_page.field_whatsapp).type(data.whatsapp_invalid)
            cy.xpath(digitalreports_page.whatsapp_show_error).should('be.visible')
            cy.xpath(digitalreports_page.whatsapp_show_error).should('have.text', data.whatsapp_error_text)

            cy.xpath(digitalreports_page.field_companyname).type(data.companyname_invalid)
            cy.xpath(digitalreports_page.companyname_show_error).should('be.visible')
            cy.xpath(digitalreports_page.companyname_show_error).should('have.text', data.companyname_error_text)

            cy.xpath(digitalreports_page.field_jobtitle).type(data.jobtitle_invalid)
            cy.xpath(digitalreports_page.jobtitle_show_error).should('be.visible')
            cy.xpath(digitalreports_page.jobtitle_show_error).should('have.text', data.jobtitle_error_text)

            cy.xpath(digitalreports_page.dapatkanreport_btn).should('be.disabled')
        })
    })



})
