class tentanghigo_page {

    menu_tentanghigo="//label[@class='peer-checked:hidden']//span[contains(text(),'Tentang HIGO')]"
    wording_title="//h1[normalize-space()='Tentang HIGO']"
    wording_desc="(//p[@class='z-10 text-sm duration-700 animate-in fade-in slide-in-from-bottom-6 @3xl/page:text-lg'])[1]"
    image="//img[@alt='Tentang HIGO']"

    wording_path1="//h2[normalize-space()='6 Tahun perjalanan']"
    wording_path2="//p[@class='text-center text-sm font-bold @3xl/page:text-lg']"
    wording_path_desc1="(//p[contains(text(),'Hadir menjadi solusi dengan menyajikan perpaduan W')])[2]"
    wording_path_desc2="(//p[contains(text(),'Memperkenalkan layanan terbaru yaitu Integrated Di')])[1]"
    wording_path_desc3="(//p[contains(text(),'Terus berkembang dalam pengintegrasian dan memperl')])[2]"

    wording_corevalue="//h2[normalize-space()='Core value']"
    img_innovative="//img[@alt='Innovative']"
    img_reliable="//img[@alt='Reliable']"
    img_relevant="//img[@alt='Relevant']"
    wording_innovative="//h6[normalize-space()='Innovative']"
    wording_reliable="//h6[normalize-space()='Reliable']"
    wording_relevant="//h6[normalize-space()='Relevant']"
    wording_innovative_desc="//p[contains(text(),'Terus mengembangkan solusi inovatif, melalui data ')]"
    wording_reliable_desc="//p[contains(text(),'Menjadi solusi yang dapat diandalkan oleh setiap m')]"
    wording_relevant_desc="(//p[contains(text(),'Dapat digunakan oleh berbagai skala mitra. Memilik')])"

    img_tumbuhbersama="(//div[@class='row-start-1 row-end-2 grid grid-flow-row place-content-center gap-4 bg-gradient-to-b from-transparent to-primary px-4 py-28 grid-full @2xl/section:px-28'])[1]"
    wording_tumbuhbersama="//h2[normalize-space()='Bertumbuh bersama']"
    wording_tumbuhbersama_desc="(//p[@class='max-w-164 text-center text-sm text-white @3xl/page:text-base'])[1]"
    wording_btn="(//span[@class='text-sm @3xl/page:text-lg'])[1]"
    jadibagiandariHIGO_btn="(//a[@class='grid grid-flow-col items-center gap-x-3 place-self-center rounded-full bg-primary px-7 py-2 text-center text-base text-white hover:bg-[#0EB0C4]'])[1]"

}
module.exports = new tentanghigo_page()