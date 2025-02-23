import dashboard_blog from "../../support/blog/dashboard_blog"

describe("User validate article by category on Blog", () => {
    
    it("User successfully see articles with tag HIGOes Update after clicking HIGOes Update Category", () => {
        cy.fixture('category_name_fixtures').then((data) => {
            cy.origin('https://blog.higo.id/', { args: { data, dashboard_blog } }, ( {data, dashboard_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/')

                cy.xpath(dashboard_blog.category_higoes).should('be.visible').invoke('click')
            })
        })
    })

    it("User successfully see articles with tag Hangout after clicking Hangout Category", () => {
        cy.fixture('category_name_fixtures').then((data) => {
            cy.origin('https://blog.higo.id/', { args: { data, dashboard_blog } }, ( {data, dashboard_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/')

                cy.xpath(dashboard_blog.category_hangout).should('be.visible').invoke('click')
            })
        })
    })

    it("User successfully see articles with tag Lifestyle after clicking Lifestyle Category", () => {
        cy.fixture('category_name_fixtures').then((data) => {
            cy.origin('https://blog.higo.id/', { args: { data, dashboard_blog } }, ( {data, dashboard_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/')

                cy.xpath(dashboard_blog.category_lifestyle).should('be.visible').invoke('click')
            })
        })
    })
})