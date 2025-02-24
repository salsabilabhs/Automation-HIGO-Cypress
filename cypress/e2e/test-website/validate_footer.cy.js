import footer from "../../support/website/footer"

describe('User validate Footer', () => {

    beforeEach(() => {
        cy.visit('')
    })

    it('User validate information of the company on Footer', () => {
        cy.fixture('footer').then((data) => {
            cy.xpath(footer.footer_component).should('be.visible')
            cy.xpath(footer.img_logo).should('be.visible')
            cy.xpath(footer.company_address).should('contain', data.company_name)
            cy.xpath(footer.company_address).should('contain', data.company_address1)
            cy.xpath(footer.company_address).should('contain', data.company_address2)
            cy.xpath(footer.company_address).should('contain', data.company_address3)
            cy.xpath(footer.email).should('have.text', data.email)
            cy.xpath(footer.phone).should('have.text', data.phone)
            cy.xpath(footer.credit).should('have.text', data.credit_text)
        })
    })

    it('User validate click menu WiFi Advertising on Footer', () => {
        cy.xpath(footer.wifi_advertising).should('be.visible').click()
        cy.url().should('include', '/wifi-advertising')
    })

    it('User validate click menu HIGOSpot on Footer', () => {
        cy.xpath(footer.higospot).should('be.visible').click()
        cy.url().should('include', '/higospot')
    })

    it('User validate click menu Integrated Digital Agency on Footer', () => {
        cy.xpath(footer.integrated_digital_agency).should('be.visible').click()
        cy.url().should('include', '/integrated-digital-agency')
    })

    it('User validate click menu Tentang HIGO on Footer', () => {
        cy.xpath(footer.tentang_higo).should('be.visible').click()
        cy.url().should('include', '/about-us')
    })

    it('User validate click menu Karir on Footer', () => {
        cy.xpath(footer.karir).should('be.visible').click()
        cy.origin('https://www.linkedin.com', () => {
            cy.url().should('include', '/company/pt-higo-fitur-indonesia')
        })
    })

    it('User validate click menu Blog on Footer', () => {
        cy.xpath(footer.blog)
        .should('have.attr', 'href', 'https://blog.higo.id/')
        .invoke('removeAttr', 'target') // Hapus target="_blank" supaya tetap di tab yang sama
        .click()
    
        cy.origin('https://blog.higo.id', () => {
            cy.on('uncaught:exception', (err) => {
                return false // Abaikan error React agar tes tetap berjalan
            })
            cy.url().should('include', 'blog.higo.id')
        })
    })

    it('User validate click menu Syarat Ketentuan on Footer', () => {
        cy.xpath(footer.syarat_ketentuan).should('be.visible').click()
        cy.url().should('include', '/terms-of-use-higospot')
    })

    it('User validate click menu Syarat Ketentuan on Footer', () => {
        cy.xpath(footer.kebijakan_privasi).should('be.visible').click()
        cy.url().should('include', '/privacy-policy-higospot')
    })
    
})