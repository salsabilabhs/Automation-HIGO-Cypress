class footer {
    footer_component="(//footer[@class='grid bg-primary py-14 relative grid-container'])[1]"
    img_logo="(//*[name()='svg'][@class='text-white'])[2]"
    company_address="//div[@class='grid grid-flow-row gap-1']"
    email="//a[normalize-space()='E: info@higo.id']"
    phone="//a[normalize-space()='P: (021) 5806860']"

    linkedin="//a[@aria-label='Linkedin']"
    facebook="//a[@aria-label='Facebook']"
    instagram="//a[@aria-label='Instagram']"
    x="//a[@aria-label='X']"

    wifi_advertising="//a[contains(text(),'WiFi Advertising')]"
    higospot="//a[contains(text(),'HIGOspot')]"
    integrated_digital_agency="//a[contains(text(),'Integrated Digital Agency')]"
    tentang_higo="//a[contains(text(),'Tentang HIGO')]"
    karir="//a[normalize-space()='Karir']"
    blog="//a[contains(text(),'Blog')]"
    syarat_ketentuan="//a[normalize-space()='Syarat & Ketentuan']"
    kebijakan_privasi="//a[normalize-space()='Kebijakan Privasi']"

    credit="//p[normalize-space()='© PT HIGO Fitur Indonesia 2024']"
}
module.exports = new footer()