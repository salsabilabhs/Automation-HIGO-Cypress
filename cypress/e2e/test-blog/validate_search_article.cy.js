import search_page_blog from "../../support/blog/search_page_blog"
import 'cypress-xpath';

describe("User validate search article using Cari Artikel on Blog", () => {
    
    it("User search for existing article on Blog", () => {
        cy.fixture('search_blog_fixtures').then((data) => {
            cy.origin('https://blog.higo.id/', { args: { data, search_page_blog } }, ( {data, search_page_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/search?q=n', { failOnStatusCode: false })

                cy.get(search_page_blog.search_box).should('be.visible').clear()
                cy.get(search_page_blog.search_box).type(data.input_search)
                cy.get(search_page_blog.search_btn).click()

                //Fungsi untuk klik tombol "Tampilkan lebih banyak"
                function click_moreresults() {
                    cy.get('body').then(($body) => {
                    if ($body.find(search_page_blog.resultsearch_more_btn).length > 0) {
                        cy.get(search_page_blog.resultsearch_more_btn).click();
                        cy.wait(1000) // Tunggu result lain tampil
                        click_moreresults() // Cek kembali apakah masih ada tombol "Tampilkan lebih banyak"
                    } else {
                        cy.log('Tidak ada lagi tombol "Tampilkan lebih banyak"')
                        }
                    })
                }
                click_moreresults()

                
                //Fungsi untuk cek per artikel apakah ada wording yang dicari
                function validate_allresult_ismatch() {
                    // Cari semua row yang ada di dalam div @container/list
                    cy.xpath(search_page_blog.row_result).then(($rows) => {
                        const rowCount = $rows.length; // Hitung jumlah row
                        cy.log(rowCount)

                        let allMatch = true; // Variabel untuk validasi
                        
                        for (let i = 1; i <= rowCount; i++) {
                            let title_xpath = `//div[@class='@container/list']//ul//li[${i}]`;

                            // Ambil teks dari kolom mitra type
                            cy.xpath(title_xpath).invoke('text').then((title_text) => {
                                if (!title_text.includes(data.input_search)) {
                                    allMatch = false;
                                    cy.log(`❌ Baris ${i} tidak sesuai`);
                                } else {
                                    cy.log(`✅ Baris ${i} valid`);
                                }
                            });
                        }

                        // Jika ada satu saja yang tidak sesuai inputan search, fail test
                        cy.wrap(null).then(() => {
                            if (!allMatch) {
                                throw new Error("❌ Result search ada yang tidak sesuai!");
                            } else {
                                cy.log("✅ Semua result mengandung kata yang dicari!");
                            }
                        });
                    });
                }
                validate_allresult_ismatch()
            })
        })
    })

    it("User search for not existing article on Blog", () => {
        cy.fixture('search_blog_fixtures').then ((data) => {
            cy.origin('https://blog.higo.id/', { args: { data, search_page_blog } }, ( {data, search_page_blog} ) => {
                Cypress.require('cypress-xpath');
                cy.visit('/search?q=n', { failOnStatusCode: false })
                
                cy.get(search_page_blog.search_box).should('be.visible').clear()
                cy.get(search_page_blog.search_box).type(data.input_search_not_exist)
                cy.get(search_page_blog.search_btn).click()

                cy.xpath(search_page_blog.row_result_not_found).should('be.visible')
                cy.xpath(search_page_blog.row_result_not_found).should('have.text', 'Artikel yang terkait dengan "' + data.input_search_not_exist + '" tidak ditemukan')
            })
         })
}   )
})