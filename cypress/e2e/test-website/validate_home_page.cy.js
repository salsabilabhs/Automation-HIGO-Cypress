import home_page from "../../support/website/home_page"

describe('User validate Home Page', () => {
    beforeEach(() => {
        cy.visit("")
    })

    it('User successfully access Home Page', () => {
        cy.fixture('home_page_fixtures').then((data) => {
            cy.xpath(home_page.logo_higo).should('be.visible')
            cy.xpath(home_page.image).should('be.visible')
            cy.xpath(home_page.wording_visi).should('have.text', data.visi_text)

            cy.xpath(home_page.wording_misi).should('have.text', data.misi_text)
            cy.xpath(home_page.mission_map).should('be.visible')

            cy.xpath(home_page.wording_how).should('have.text', data.how_title)
            cy.xpath(home_page.wording_how_desc).should('have.text', data.how_desc_text)
            cy.xpath(home_page.image_wifiadvertising).should('be.visible')
            cy.xpath(home_page.image_higospot).should('be.visible')
            cy.xpath(home_page.image_agency).should('be.visible')

            cy.xpath(home_page.wording_testimony).should('have.text', data.testimony_title)
            cy.xpath(home_page.testimony_content).should('be.visible')
            cy.xpath(home_page.testimony_previous).should('be.visible')
            cy.xpath(home_page.testimony_next).should('be.visible')

            cy.xpath(home_page.wording_partnerclient).should('have.text', data.partnerclient_title)
            cy.xpath(home_page.wording_partnerclient_manymore).should('have.text', data.manymore_text)
            
            cy.xpath(home_page.wording_question).should('have.text', data.question_title)
            cy.xpath(home_page.question_content).should('be.visible')
        })
    })

    it('User successfully click WiFi Advertising on Home Page', () => {
        cy.xpath(home_page.image_wifiadvertising).should('be.visible').click()
        // cy.xpath(home_page.wifiadvertising_btn).should('be.visible').click()
        cy.url().should('include', '/wifi-advertising')
    })

    it('User successfully click HIGO Spot on Home Page', () => {
        cy.xpath(home_page.image_higospot).should('be.visible').click()
        // cy.xpath(home_page.image_higospot).should('be.visible').trigger('mouseover')
        // cy.xpath(home_page.higospot_btn).should('be.visible').click()
        cy.url().should('include', '/higospot')
    })

    it('User successfully click Integrated Digital Agency on Home Page', () => {
        cy.xpath(home_page.image_agency).should('be.visible').click()
        // cy.xpath(home_page.image_agency).should('be.visible').trigger('mouseover')
        // cy.xpath(home_page.agency_btn).should('be.visible').click()
        cy.url().should('include', '/integrated-digital-agency')
    })

    it('User successfully click Next & Previous of Testimony on Home Page', () => {
        cy.xpath(home_page.testimony_next).click()
        cy.xpath(home_page.testimony_previous).click()
    })

    it('User successfully see answer of question "Apa saja layanan HIGO? Apakah hanya menyediakan WiFi Advertising dan Marketing saja?" on Home Page', () => {
        cy.fixture('home_page_fixtures').then((data)=> {
            cy.xpath(home_page.question1_btn).click()
            cy.xpath(home_page.wording_answer1).should('be.visible')
            cy.xpath(home_page.wording_answer1).should('have.text', data.answer1_text)
        })
    })

    it('User successfully see answer of question "Dimana saya bisa melihat perkiraan harga jika saya ingin bekerjasama dengan HIGO?" on Home Page', () => {
        cy.fixture('home_page_fixtures').then((data)=> {
            cy.xpath(home_page.question2_btn).click()
            cy.xpath(home_page.wording_answer2).should('be.visible')
            cy.xpath(home_page.wording_answer2).should('have.text', data.answer2_text)
        })
    })

    it('User successfully see answer of question "Apakah saya bisa request target Audience serta lokasi yang saya inginkan, apabila saya minat beriklan di HIGO?" on Home Page', () => {
        cy.fixture('home_page_fixtures').then((data)=> {
            cy.xpath(home_page.question3_btn).click()
            cy.xpath(home_page.wording_answer3).should('be.visible')
            cy.xpath(home_page.wording_answer3).should('have.text', data.answer3_text)
        })
    })

    it('User successfully see answer of question "HIGO itu ISP ya?" on Home Page', () => {
        cy.fixture('home_page_fixtures').then((data)=> {
            cy.xpath(home_page.question4_btn).click()
            cy.xpath(home_page.wording_answer4).should('be.visible')
            cy.xpath(home_page.wording_answer4).should('have.text', data.answer4_text)
        })
    })

    it('User successfully see answer of question "Bisa install HIGO di luar Jawa ga?" on Home Page', () => {
        cy.fixture('home_page_fixtures').then((data)=> {
            cy.xpath(home_page.question5_btn).click()
            cy.xpath(home_page.wording_answer5).should('be.visible')
            cy.xpath(home_page.wording_answer5).should('have.text', data.answer5_text)
        })
    })
    
})