class dashboard_blog {
    blog_menu="//label[@class='peer-checked:hidden']//span[contains(text(),'Blog')]"

    datatest_article="//h6[contains(text(),'Alasan Personalized Marketing Penting di Tahun 202')]"

    artikelterbaru="(//a)[23]"
    title_artikelterbaru="//h6[normalize-space()='5 Rekomendasi Cafe Nyaman WFC di Jakarta Selatan']"

    artikelpopuler="(//li)[23]"
    title_artikelpopuler="//h6[normalize-space()='Alasan KKV Ganti Nama Jadi OH! SOME']"

    topikpopuler_chip="//button[normalize-space()='Instagram']"
    topikpopuler="//a[@href='/feed-instagram-berubah']"
    title_topikpopuler="//h6[normalize-space()='5 Keunggulan Feed Instagram Berubah Jadi Vertikal']"

    bycategory="//a[@href='/video-hook-cara-jitu-menarik-perhatian-audiens']"
    title_bycategory="//h6[normalize-space()='Video Hook: Cara Jitu Menarik Perhatian Audiens']"

    category_higoes="//button[normalize-space()='HIGOes Update']"
    category_hangout="//button[normalize-space()='Hangout']"
    category_lifestyle="//button[normalize-space()='Lifestyle']"

}
module.exports = new dashboard_blog()

// 