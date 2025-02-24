class studikasus_page {

    category_all="//li[normalize-space()='All']"
    category_higospot="//li[contains(text(),'HIGOspot')]"
    category_wifi_advertising="//li[contains(text(),'WiFi Advertising')]"

    result_row="//ul[@class='grid grid-cols-1 gap-4 @md/section:grid-cols-2 @2xl/section:grid-cols-4']"
    get_studikasus=""

    // get_category_higospot="(//div[@class='mt-1 text-sm'][normalize-space()='HIGOspot'])[${i}]"
    // get_category_wifiadvertising="(//div[@class='mt-1 text-sm'][normalize-space()='WiFi Advertising'])[${i}]"

}
module.exports = new studikasus_page()