import layananhigo_page from "../support/website/layananhigo_page"

describe('User validate menu Layanan HIGO', () => {

    beforeEach(() => {
        cy.visit("/wifi-advertising")
    })

    it('User successfully access Layanan HIGO (WiFi Advertising) Page', () => {
        cy.fixture('layananhigo_page_fixtures').then((data) => {
            // VALIDATE TITLE
            cy.xpath(layananhigo_page.image).should('be.visible')
            cy.xpath(layananhigo_page.wording_title).should('have.text', data.title_text)
            cy.xpath(layananhigo_page.wording_desc).should('have.text', data.desc_text)
            
            // VALIDATE FOOTPRINTS SECTION
            cy.xpath(layananhigo_page.wording_footprint).should('have.text', data.footprint_text)
            cy.xpath(layananhigo_page.wording_footprint_desc).should('have.text', data.footprint_desc_text)
            cy.xpath(layananhigo_page.footprint_mrt).should('have.text', data.mrt_text)
            cy.xpath(layananhigo_page.footprint_transjkt).should('have.text', data.transjkt_text)
            cy.xpath(layananhigo_page.footprint_asdp).should('have.text', data.asdp_text)
            cy.xpath(layananhigo_page.footprint_airplane).should('have.text', data.airplane_text)
            cy.xpath(layananhigo_page.footprint_foodbeverage).should('have.text', data.foodbeverage_text)
            cy.xpath(layananhigo_page.footprint_livingquarter).should('have.text', data.livingquarter_text)
            cy.xpath(layananhigo_page.footprint_lrt).should('have.text', data.lrt_text)
            cy.xpath(layananhigo_page.footprint_officelocation).should('have.text', data.officelocation_text)
            cy.xpath(layananhigo_page.footprint_shoppingdestination).should('have.text', data.shoppingdestination_text)
            
            // VALIDATE KENALI USER SECTION
            cy.xpath(layananhigo_page.wording_kenaliuser).should('have.text', data.kenaliuser_text)
            // VALIDATE KENALI USER > PEMBUATAN PROFIL
            cy.xpath(layananhigo_page.img_pembuatanprofil).should('be.visible').click()
            cy.xpath(layananhigo_page.wording_pembuatanprofil).should('have.text', data.pembuatanprofil_text)
            cy.xpath(layananhigo_page.wording_pembuatanprofil_desc).should('have.text', data.pembuatanprofil_desc_text)
            // VALIDATE KENALI USER > PENAYANGAN
            cy.xpath(layananhigo_page.img_penayangan).should('be.visible').trigger('mouseover')
            cy.xpath(layananhigo_page.wording_penayangan).should('have.text', data.penayangan_text)
            cy.xpath(layananhigo_page.wording_penayangan_desc).should('have.text', data.penayangan_desc_text)
            // VALIDATE KENALI USER > INTERAKSI
            cy.xpath(layananhigo_page.img_interaksi).should('be.visible').trigger('mouseover')
            cy.xpath(layananhigo_page.wording_interaksi).should('have.text', data.interaksi_text)
            cy.xpath(layananhigo_page.wording_interaksi_desc).should('have.text', data.interaksi_desc_text)
            // VALIDATE KENALI USER > RESPON LANGSUNG
            cy.xpath(layananhigo_page.img_responlangsung).should('be.visible').trigger('mouseover')
            cy.xpath(layananhigo_page.wording_responlangsung).should('have.text', data.responlangsung_text)
            cy.xpath(layananhigo_page.wording_responlangsung_desc).should('have.text', data.responlangsung_desc_text)
            
            // VALIDATE CAMPAIGN SECTION
            cy.xpath(layananhigo_page.wording_campaign).should('have.text', data.campaign_text)
            cy.xpath(layananhigo_page.wording_campaign_desc).should('have.text', data.campaign_desc_text)
            cy.xpath(layananhigo_page.wording_estimatedclick).should('have.text', data.estimatedclick_text)
            cy.xpath(layananhigo_page.wording_estimatedclick_desc).should('have.text', data.estimatedclick_desc_text)
            cy.xpath(layananhigo_page.wording_estimatedview).should('have.text', data.estimatedview_text)
            cy.xpath(layananhigo_page.wording_estimatedview_desc).should('have.text', data.estimatedview_desc_text)
            
            // VALIDATE KEUNTUNGAN SECTION
            cy.xpath(layananhigo_page.wording_keuntungan).should('have.text', data.keuntungan_text)
            cy.xpath(layananhigo_page.wording_keuntungan_desc).should('have.text', data.keuntungan_desc_text)
            // VALIDATE KEUNTUNGAN > POINT 1
            cy.xpath(layananhigo_page.img_keuntungan1).should('be.visible')
            cy.xpath(layananhigo_page.wording_keuntungan1).should('have.text', data.keuntungan1_text)
            cy.xpath(layananhigo_page.wording_keuntungan1_desc).should('have.text', data.keuntungan1_desc_text)
           // VALIDATE KEUNTUNGAN > POINT 2
            cy.xpath(layananhigo_page.img_keuntungan2).should('be.visible')
            cy.xpath(layananhigo_page.wording_keuntungan2).should('have.text', data.keuntungan2_text)
            cy.xpath(layananhigo_page.wording_keuntungan2_desc).should('have.text', data.keuntungan2_desc_text)
            // VALIDATE KEUNTUNGAN > POINT 3
            cy.xpath(layananhigo_page.img_keuntungan3).should('be.visible')
            cy.xpath(layananhigo_page.wording_keuntungan3).should('have.text', data.keuntungan3_text)
            cy.xpath(layananhigo_page.wording_keuntungan3_desc).should('have.text', data.keuntungan3_desc_text)
            // VALIDATE KEUNTUNGAN > POINT 4
            cy.xpath(layananhigo_page.img_keuntungan4).should('be.visible')
            cy.xpath(layananhigo_page.wording_keuntungan4).should('have.text', data.keuntungan4_text)
            cy.xpath(layananhigo_page.wording_keuntungan4_desc).should('have.text', data.keuntungan4_desc_text)

            // VALIDATE MITRA KAMI SECTION
            cy.xpath(layananhigo_page.wording_mitrakami).should('have.text', data.mitrakami_text)
            cy.xpath(layananhigo_page.images_mitra).should('be.visible')

            // VALIDATE CONTAINER TARGET AUDIENCE
            cy.xpath(layananhigo_page.img_targetaudience).should('be.visible')
            cy.xpath(layananhigo_page.wording_targetaudience).should('have.text', data.targetaudience_text)
            cy.xpath(layananhigo_page.beriklansekarang_btn).should('be.visible')
            cy.xpath(layananhigo_page.wording_btn).should('have.text', data.beriklansekarang_btn_text)
        })
    })

    it('User successfully click button "Beriklan Sekarang" on menu Layanan HIGO (WiFi Advertising) Page', () => {
        cy.xpath(layananhigo_page.beriklansekarang_btn).click()
        cy.url().should('include', '/contact-us')
    })
        
})