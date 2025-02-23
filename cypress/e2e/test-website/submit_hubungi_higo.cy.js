import hubungihigo_page from "../../support/website/hubungihigo_page"

describe('User submit needs/questions for HIGO on menu Hubungi HIGO', () => {
    beforeEach(() => {
        cy.visit("")
        cy.xpath(hubungihigo_page.hubungihigo_menu).click()
        cy.url().should('include', '/contact-us')
    })

    it('User successfully submit needs/questions for HIGO (HIGOSPOT) with valid credentials on menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.field_namalengkap).type(data.namalengkap_valid)
            cy.xpath(hubungihigo_page.field_email).type(data.email_valid)
            cy.xpath(hubungihigo_page.field_notelp).type(data.notelp_valid)
            cy.xpath(hubungihigo_page.field_namaclient).type(data.namaclient_valid)
            cy.xpath(hubungihigo_page.dropdown_layanan).select('Higospot')
            cy.xpath(hubungihigo_page.textbox_pesan).type(data.pesan_valid)
            cy.xpath(hubungihigo_page.submit_btn).click()

            cy.xpath(hubungihigo_page.submit_success_msg).should('be.visible')
            cy.xpath(hubungihigo_page.submit_success_msg).should('have.text', data.submit_success_text)
        })   
    })

    it('User successfully submit needs/questions for HIGO (Integrated Digital Agency) with valid credentials on menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.field_namalengkap).type(data.namalengkap_valid)
            cy.xpath(hubungihigo_page.field_email).type(data.email_valid)
            cy.xpath(hubungihigo_page.field_notelp).type(data.notelp_valid)
            cy.xpath(hubungihigo_page.field_namaclient).type(data.namaclient_valid)
            cy.xpath(hubungihigo_page.dropdown_layanan).select('Integrated Digital Agency')
            cy.xpath(hubungihigo_page.textbox_pesan).type(data.pesan_valid)
            cy.xpath(hubungihigo_page.submit_btn).click()

            cy.xpath(hubungihigo_page.submit_success_msg).should('be.visible')
            cy.xpath(hubungihigo_page.submit_success_msg).should('have.text', data.submit_success_text)
        })   
    })

    it('User successfully submit needs/questions for HIGO (Wifi Advertising) with valid credentials on menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.field_namalengkap).type(data.namalengkap_valid)
            cy.xpath(hubungihigo_page.field_email).type(data.email_valid)
            cy.xpath(hubungihigo_page.field_notelp).type(data.notelp_valid)
            cy.xpath(hubungihigo_page.field_namaclient).type(data.namaclient_valid)
            cy.xpath(hubungihigo_page.dropdown_layanan).select('Wifi Advertising')
            cy.xpath(hubungihigo_page.textbox_pesan).type(data.pesan_valid)
            cy.xpath(hubungihigo_page.submit_btn).click()

            cy.xpath(hubungihigo_page.submit_success_msg).should('be.visible')
            cy.xpath(hubungihigo_page.submit_success_msg).should('have.text', data.submit_success_text)
        })   
    })

    it('User unsuccessfully submit needs/question for HIGO when input invalid Nama Lengkap on menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.field_namalengkap).type(data.namalengkap_invalid)
            cy.xpath(hubungihigo_page.field_email).type(data.email_valid)
            cy.xpath(hubungihigo_page.field_notelp).type(data.notelp_valid)
            cy.xpath(hubungihigo_page.field_namaclient).type(data.namaclient_valid)
            cy.xpath(hubungihigo_page.dropdown_layanan).select('Wifi Advertising')
            cy.xpath(hubungihigo_page.textbox_pesan).type(data.pesan_valid)
            
            cy.xpath(hubungihigo_page.submit_btn).should('be.disabled')
            cy.xpath(hubungihigo_page.namalengkap_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.namalengkap_show_error).should('have.text', data.namalengkap_error_msg)
            
        })
    })

    it('User unsuccessfully submit needs/question for HIGO when input invalid Email on menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.field_namalengkap).type(data.namalengkap_valid)
            cy.xpath(hubungihigo_page.field_email).type(data.email_invalid)
            cy.xpath(hubungihigo_page.field_notelp).type(data.notelp_valid)
            cy.xpath(hubungihigo_page.field_namaclient).type(data.namaclient_valid)
            cy.xpath(hubungihigo_page.dropdown_layanan).select('Wifi Advertising')
            cy.xpath(hubungihigo_page.textbox_pesan).type(data.pesan_valid)
            
            cy.xpath(hubungihigo_page.submit_btn).should('be.disabled')
            cy.xpath(hubungihigo_page.email_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.email_show_error).should('have.text', data.email_error_msg)
            
        })
    })

    it('User unsuccessfully submit needs/question for HIGO when input invalid No Telephone format on menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.field_namalengkap).type(data.namalengkap_valid)
            cy.xpath(hubungihigo_page.field_email).type(data.email_valid)
            cy.xpath(hubungihigo_page.field_notelp).type(data.notelp_invalid)
            cy.xpath(hubungihigo_page.field_namaclient).type(data.namaclient_valid)
            cy.xpath(hubungihigo_page.dropdown_layanan).select('Wifi Advertising')
            cy.xpath(hubungihigo_page.textbox_pesan).type(data.pesan_valid)
            
            cy.xpath(hubungihigo_page.submit_btn).should('be.disabled')
            cy.xpath(hubungihigo_page.notelp_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.notelp_show_error).should('have.text', data.notelp_error_msg) 
        })
    })

    it('User unsuccessfully submit needs/question for HIGO when input invalid Nama Client on menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.field_namalengkap).type(data.namalengkap_valid)
            cy.xpath(hubungihigo_page.field_email).type(data.email_valid)
            cy.xpath(hubungihigo_page.field_notelp).type(data.notelp_valid)
            cy.xpath(hubungihigo_page.field_namaclient).type(data.namaclient_invalid)
            cy.xpath(hubungihigo_page.dropdown_layanan).select('Wifi Advertising')
            cy.xpath(hubungihigo_page.textbox_pesan).type(data.pesan_valid)
            
            cy.xpath(hubungihigo_page.submit_btn).should('be.disabled')
            cy.xpath(hubungihigo_page.namaclient_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.namaclient_show_error).should('have.text', data.namaclient_error_msg) 
        })
    })

    it('User unsuccessfully submit needs/question for HIGO when input invalid Pesan on menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.field_namalengkap).type(data.namalengkap_valid)
            cy.xpath(hubungihigo_page.field_email).type(data.email_valid)
            cy.xpath(hubungihigo_page.field_notelp).type(data.notelp_valid)
            cy.xpath(hubungihigo_page.field_namaclient).type(data.namaclient_valid)
            cy.xpath(hubungihigo_page.dropdown_layanan).select('Wifi Advertising')
            cy.xpath(hubungihigo_page.textbox_pesan).type(data.pesan_invalid)
            
            cy.xpath(hubungihigo_page.submit_btn).should('be.disabled')
            cy.xpath(hubungihigo_page.pesan_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.pesan_show_error).should('have.text', data.pesan_error_msg) 
        })
    })

    it('User unsuccessfully submit needs/questions for HIGO when fields are empty on menu Hubungi HIGO', () => {
        cy.fixture('hubungihigo_page_fixtures').then((data) => {
            cy.xpath(hubungihigo_page.field_namalengkap).clear()
            cy.xpath(hubungihigo_page.field_email).clear()
            cy.xpath(hubungihigo_page.field_notelp).clear()
            cy.xpath(hubungihigo_page.field_namaclient).clear()
            cy.xpath(hubungihigo_page.textbox_pesan).clear()
            cy.xpath(hubungihigo_page.submit_btn).click()

            cy.xpath(hubungihigo_page.submit_success_msg).should('not.exist')
            cy.xpath(hubungihigo_page.namalengkap_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.email_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.notelp_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.namaclient_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.pesan_show_error).should('be.visible')
            cy.xpath(hubungihigo_page.namalengkap_show_error).should('have.text', data.namalengkap_error_msg)
            cy.xpath(hubungihigo_page.email_show_error).should('have.text', data.email_error_msg)
            cy.xpath(hubungihigo_page.notelp_show_error).should('have.text', data.notelp_error_msg)
            cy.xpath(hubungihigo_page.namaclient_show_error).should('have.text', data.namaclient_error_msg)
            cy.xpath(hubungihigo_page.pesan_show_error).should('have.text', data.pesan_error_msg)
        })
    })

})