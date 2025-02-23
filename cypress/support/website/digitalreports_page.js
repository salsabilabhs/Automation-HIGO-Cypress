class digitalreports_page {

    figitalreports_menu="//label[@class='peer-checked:hidden']//span[contains(text(),'Digital Reports')]"

    download_btn="//body//main"

    field_firstname="//input[@id='firstName-input']"
    field_lastname="//input[@id='lastName-input']"
    field_email="//input[@id='email-input']"
    field_whatsapp="//input[@id='phone-input']"
    field_companyname="//input[@id='company-input']"
    field_jobtitle="//input[@id='jobTitle-input']"
    dapatkanreport_btn="//button[normalize-space()='Dapatkan Report']"

    show_error_msg='//*[@id="radix-:r3:"]/div/form/p'
    firstname_show_error="//p[contains(text(),'Nama depan tidak boleh kosong. Silakan masukkan na')]"
    lastname_show_error="//p[contains(text(),'Nama belakang tidak boleh kosong. Silakan masukkan')]"
    email_show_error="//p[contains(text(),'Email kerja tidak boleh kosong. Silakan masukkan e')]"
    whatsapp_show_error="//p[contains(text(),'Nomor telepon tidak boleh kosong. Silakan isi deng')]"
    companyname_show_error="//p[contains(text(),'Nama perusahaan tidak boleh kosong. Silakan isi de')]"
    jobtitle_show_error="//p[contains(text(),'Jabatan tidak boleh kosong. Silakan masukkan jabat')]"
}
module.exports = new digitalreports_page()