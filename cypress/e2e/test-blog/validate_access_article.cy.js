import dashboard_blog from "../../support/blog/dashboard_blog"
import 'cypress-xpath'

describe("User validate article detail on Blog", () => {
    
    it("User successfully access article detail from Artikel Terbaru", () => {
        cy.fixture('access_article_fixtures').then((data) => {
            cy.origin('https://blog.higo.id/', { args: { data, dashboard_blog } }, ( {data, dashboard_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/')
                cy.xpath(dashboard_blog.artikelterbaru).should('be.visible')
                cy.xpath(dashboard_blog.title_artikelterbaru).should('have.text', data["data-artikelterbaru"]).invoke('click')
                cy.url({ timeout: 10000 }).should('include', `/${data["data-artikelterbaru"].replace(/ /g, '-')}`);
            })
        })
    })

    it("User successfully access article detail from Artikel Populer", () => {
        cy.fixture('access_article_fixtures').then((data) => {
            cy.origin('https://blog.higo.id/', { args: { data, dashboard_blog } }, ( {data, dashboard_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/')
                cy.xpath(dashboard_blog.artikelpopuler).should('be.visible')
                cy.xpath(dashboard_blog.title_artikelpopuler).should('have.text', data["data-artikelpopuler"]).invoke('click')
                cy.url({ timeout: 10000 }).should('include', `/${data["data-artikelpopuler"].replace(/ /g, '-')}`);
            })
        })
    })

    it("User successfully access article detail from Topik Populer", () => {
        cy.fixture('access_article_fixtures').then((data) => {
            cy.origin('https://blog.higo.id/', { args: { data, dashboard_blog } }, ( {data, dashboard_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/')
                cy.xpath(dashboard_blog.topikpopuler_chip).should('be.visible')
                cy.xpath(dashboard_blog.topikpopuler_chip).should('have.text', data["data-topikpopuler"]).invoke('click')
                
                cy.url({ timeout: 10000 }).should('include', `/search?q=J${data["data-artikelpopuler"].replace(/ /g, '-')}`)
                cy.xpath(dashboard_blog.topikpopuler).should('be.visible')
                cy.xpath(dashboard_blog.title_topikpopuler).should('have.text', data["data_titletopikpopuler"]).invoke('click')
                cy.url({ timeout: 10000 }).should('include', '/feed-instagram-berubah')
            })
        })
    })

    it.only("User successfully access article detail from Category (All)", () => {
        cy.fixture('access_article_fixtures').then((data) => {
            cy.origin('https://blog.higo.id/', { args: { data, dashboard_blog } }, ( {data, dashboard_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/')
                cy.xpath(dashboard_blog.bycategory).should('be.visible')
                cy.xpath(dashboard_blog.title_bycategory).should('have.text', data["data-titlebycategory"]).invoke('click')
                
                cy.url({ timeout: 10000 }).should('include', `/search?q=J${data["data-titlebycategory"].replace(/ /g, '-')}`)
            })
        })
    })
})