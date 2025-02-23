class search_page_blog {
    search_box='[class="w-full rounded-full border px-2.5 py-1.5 text-sm disabled:animate-pulse disabled:bg-gray-100"]'
    search_btn="button[aria-label='Cari Artikel']"
    resultsearch_more_btn='[class="w-full rounded-full bg-primary px-3 py-1.5 text-white disabled:opacity-50 @2xl/section:mt-4 @2xl/section:w-fit @2xl/section:place-self-center @2xl/section:px-20 @2xl/section:py-3"]'

    row_result="//div[@class='@container/list']//ul//li"
    row_result_not_found="(//div[@class='@2xl/section:place-self-center'])[1]"
}
module.exports = new search_page_blog()

// (//div[@class='@container/list'])[1]
//     (//ul[@class='grid content-start gap-6 @3xl/list:gap-8 grid-flow-row'])[1]
//     //ul[@class='grid content-start gap-6 @3xl/list:gap-8 grid-flow-row']
// (//div[@class='grid grid-flow-row content-start gap-2'])[1]
//     (//div[@class='grid grid-flow-row content-start gap-2'])[2]

        
