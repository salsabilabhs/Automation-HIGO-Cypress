class home_page {

    logo_higo="//a[@aria-label='HIGO']//*[name()='svg']"
    
    image="(//img[@class='size-full rounded-b-4xl object-cover'])[1]"
    wording_visi="//h1[contains(text(),'Solusi Menyeluruh Pemasaran Digital dengan WiFi & ')]"

    wording_misi="//h2[contains(text(),'HIGO hadir membawa dampak signifikan melalui WiFi ')]"
    mission_map="//img[@alt='Higo']"

    wording_how="//h2[contains(text(),'Bagaimana')]"
    wording_how_desc="(//p[@class='w-fit max-w-164 text-center text-sm @3xl/page:text-lg'])[1]"
    image_wifiadvertising="//img[@alt='WiFi Advertising']"
    wifiadvertising_btn="//div[@class='min-w-0 shrink-0 grow-0 basis-11/12 pl-0 @3xl/page:basis-1/3']//a"
    image_higospot="//img[@alt='HIGOspot']"
    higospot_btn='(//button)[3]'
    image_agency="//img[@alt='Integrated Digital Agency']"
    agency_btn="(//button)[4]"


    wording_testimony="//h2[normalize-space()='Apa kata mereka']"
    testimony_content="//div[@class='flex -ml-4']"
    testimony_previous="//button[@class='absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 left-2 grid place-items-center text-primary disabled:hidden @3xl/carousel:left-5 @3xl/carousel:-translate-y-2x']"
    testimony_next="//button[@class='absolute h-8 w-8 rounded-full top-1/2 -translate-y-1/2 right-2 grid place-items-center text-primary disabled:hidden @3xl/carousel:right-5 @3xl/carousel:-translate-y-2x']"

    wording_partnerclient="//h2[normalize-space()='Partner & klien']"
    wording_partnerclient_manymore="//p[@class='text-center text-sm']"

    wording_question="//h3[normalize-space()='Pertanyaan seputar HIGO']"
    question_content="//div[@class='divide-y']"
    question1_btn="//button[@id='radix-:R6qfjbta:']"
    question2_btn="//button[@id='radix-:Raqfjbta:']"
    question3_btn="//button[@id='radix-:Reqfjbta:']"
    question4_btn="//button[@id='radix-:Riqfjbta:']"
    question5_btn="//button[@id='radix-:Rmqfjbta:']"
    wording_answer1="//div[@class='pb-4 pt-0 text-sm text-primary @2xl/page:text-base'][normalize-space()='HIGO memiliki berbagai layanan lainnya yang tentu dapat membantu brand kamu. Layanan tersebut antara lain WiFi Ads, HIGOspot, dan Intergrated Digital Advertising.']"
    wording_answer2="//div[@class='pb-4 pt-0 text-sm text-primary @2xl/page:text-base'][normalize-space()='Silahkan mengirimkan email ke info@higo.id dan team HIGO akan segera menghubungi kamu.']"
    wording_answer3="//div[@class='pb-4 pt-0 text-sm text-primary @2xl/page:text-base'][normalize-space()='Tentu saja, nantinya kamu bisa berdiskusi dengan team HIGO untuk menentukan target serta lokasi yang sesuai kebutuhan brand kamu. Team HIGO juga akan memberikan rekomendasi terbaik tentunya.']"
    wording_answer4="//div[@class='pb-4 pt-0 text-sm text-primary @2xl/page:text-base'][normalize-space()='Bukan ISP. HIGO adalah WiFi Platform Advertising and Integrated Digital Agency.']"
    wording_answer5="//div[@class='pb-4 pt-0 text-sm text-primary @2xl/page:text-base'][normalize-space()='Bisa, dimana HIGO memang sudah ada di luar jawa seperti Bali, Jambi, Padang, Balikpapan.']"
}
module.exports = new home_page()