class hubungihigo_page {

    hubungihigo_menu="//label[@class='peer-checked:hidden']//span[contains(text(),'Hubungi HIGO')]"

    wording_title="//h1[normalize-space()='Hubungi tim HIGO']"
    wording_desc="(//p[@class='text-sm font-light text-white duration-700 animate-in fade-in slide-in-from-bottom-6 @3xl/page:text-lg'])[1]"

    contact_section="(//ul[@class='grid grid-cols-2 gap-4 divide-white @3xl/page:grid-flow-col @3xl/page:grid-cols-none @3xl/page:divide-x'])[1]"
    higo_email="//p[normalize-space()='info@higo.id']"
    higo_phone="//p[normalize-space()='(021) 5806860']"
    higo_location="//p[@class='text-sm text-white'][contains(text(),'Jl. Panjang Raya, Kedoya Elok Plaza, Blok DA No.3-')]"

    form_section="(//div[@class='grid min-h-96 content-start gap-4 rounded-3xl bg-white p-6'])[1]"
    form_title="//h6[normalize-space()='Sampaikan kebutuhan/pertanyaan untuk HIGO']"
    field_namalengkap="//input[@placeholder='ex.Clara']"
    field_email="//input[@placeholder='clara@gmail.com']"
    field_notelp="//input[@placeholder='+628******']"
    field_namaclient="//input[@placeholder='ex.HIGO']"
    dropdown_layanan="//select[@name='service']"
    textbox_pesan="//textarea[@placeholder='Tulis pesan kamu']"
    submit_btn="//button[normalize-space()='Submit']"

    namalengkap_show_error="(//p[@class='text-xs text-red-500'][normalize-space()='Isi nama kamu'])[2]"
    email_show_error="//p[normalize-space()='Isi email kamu']"
    notelp_show_error="//p[normalize-space()='Isi dengan nomor telpon kamu']"
    namaclient_show_error="//p[normalize-space()='Isi nama usaha kamu']"
    pesan_show_error="//p[normalize-space()='Isi dengan pesan kamu']"

    submit_success_msg="(//div[@class='rounded border border-green-200 bg-green-50 px-3 py-2 text-green-950'])[1]"
}
module.exports = new hubungihigo_page()