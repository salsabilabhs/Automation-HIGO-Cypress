import tentanghigo_page from "../../support/website/tentanghigo_page"

describe('User validate Tentang HIGO Page', () => {
    beforeEach(() => {
        cy.visit("")
        cy.xpath(tentanghigo_page.menu_tentanghigo).click()
    })

    it('User successfully access Tentang HIGO Page', () => {
        cy.url().should('include', '/about-us')
    })

    it('User successfully see Tentang HIGO Page', () => {
        cy.fixture('tentanghigo_page_fixtures').then((data) => {
            cy.xpath(tentanghigo_page.wording_title).should('have.text', data.tentanghigo_title)
            
            cy.xpath(tentanghigo_page.wording_desc).invoke('text').then((text) => {
              expect(text.replace(/\s+/g, ' ').trim()).to.eq(data.desc_text)
            })
            
            cy.xpath(tentanghigo_page.wording_path1).should('have.text', data.path_title_text)
            cy.xpath(tentanghigo_page.wording_path2).should('have.text', data.path_title2_text)
            cy.xpath(tentanghigo_page.wording_path_desc1).should('have.text', data.path_desc1_text)
            cy.xpath(tentanghigo_page.wording_path_desc2).should('have.text', data.path_desc2_text)
            cy.xpath(tentanghigo_page.wording_path_desc3).should('have.text', data.path_desc3_text)

            cy.xpath(tentanghigo_page.wording_corevalue).should('have.text', data.corevalue_title_text)
            cy.xpath(tentanghigo_page.img_innovative).should('be.visible')
            cy.xpath(tentanghigo_page.img_reliable).should('be.visible')
            cy.xpath(tentanghigo_page.img_relevant).should('be.visible')
            cy.xpath(tentanghigo_page.wording_innovative).should('have.text', data.innovative_text)
            cy.xpath(tentanghigo_page.wording_innovative_desc).should('have.text', data.innovative_desc_text)
            cy.xpath(tentanghigo_page.wording_reliable).should('have.text', data.reliable_text)
            cy.xpath(tentanghigo_page.wording_reliable_desc).should('have.text', data.reliable_desc_text)
            cy.xpath(tentanghigo_page.wording_relevant).should('have.text', data.relevant_text)
            cy.xpath(tentanghigo_page.wording_relevant_desc).should('have.text', data.relevant_desc_text)

            cy.xpath(tentanghigo_page.img_tumbuhbersama).should('be.visible')
            cy.xpath(tentanghigo_page.wording_tumbuhbersama).should('have.text', data.tumbuhbersama_title_text)
            
            cy.xpath(tentanghigo_page.wording_tumbuhbersama_desc).invoke('text').then((text) => {
              expect(text.replace(/\s+/g, ' ').trim()).to.eq(data.tumbuhbersama_desc_text)
            })
            
            cy.xpath(tentanghigo_page.jadibagiandariHIGO_btn).should('be.visible')
            cy.xpath(tentanghigo_page.wording_btn).should('have.text', data.btn_text)
        })
    })

    it('User successfully click button "Jadi Bagian Dari HIGO" on Tentang HIGO Page', () => {
        cy.xpath(tentanghigo_page.jadibagiandariHIGO_btn).click()
        cy.origin('https://www.linkedin.com', () => {
            cy.url().should('eq', 'https://www.linkedin.com/company/pt-higo-fitur-indonesia')
          })
    })

})