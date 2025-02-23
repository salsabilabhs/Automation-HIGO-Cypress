class detailarticle_blog {

    field_nama="input[placeholder='Tulis Nama Kamu']"
    field_komentar="textarea[placeholder='Tulis Komentar Kamu']"
    submit_komentar_btn='[class="w-full place-self-end rounded-full bg-primary px-3 py-1.5 text-white disabled:cursor-auto disabled:opacity-50 @2xl/section:mt-4 @2xl/section:w-fit @2xl/section:place-self-end @2xl/section:px-5 @2xl/section:py-3"]'

    nama_error_msg="/html/body/main/div/div[2]/section[4]/form/div[1]/p"
    komentar_error_msg="/html/body/main/div/div[2]/section[4]/form/div[2]/p"

    balas_btn="(//button[contains(text(),'Balas')])[1]"
    balas_fieldnama="(//input[@placeholder='Tulis Nama Kamu'])[2]"
    balas_fieldkomentar="(//textarea[@placeholder='Tulis Komentar Kamu'])[2]"
    submit_balas_btn="(//button[@type='submit'][normalize-space()='Kirim'])[2]"

    likes_btn="(//button[@class='grid grid-flow-col items-center gap-1'][normalize-space()='0'])[1]"
    
}
module.exports = new detailarticle_blog()