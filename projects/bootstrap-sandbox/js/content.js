export const LANGUAGES = {
    EN: "en",
    AZ: "az"
}

export const data = {
    nodeLists: {
        'nav>div>a>span': {
            0: { en: "Demos", az: "Demolar" },
            1: { en: "Pages", az: "Səhifələr" },
            2: { en: "Projects", az: "Proyektlər" },
            3: { en: "Blog", az: "Bloq" },
            4: { en: "Blocks", az: "Bloklar" },
            5: { en: "Documentation", az: "Dokumentasiya" }
        },
        '.mobile-nav>div>span': {
            0: { en: "Demos", az: "Demolar" },
            1: { en: "Pages", az: "Səhifələr" },
            2: { en: "Projects", az: "Proyektlər" },
            3: { en: "Blog", az: "Bloq" },
            4: { en: "Blocks", az: "Bloklar" },
            5: { en: "Documentation", az: "Dokumentasiya" }
        },
        '.intro.container .cards a': {
            0: { en: "Learn More", az: "Ətraflı Öyrən" },
            1: { en: "Learn More", az: "Ətraflı Öyrən" },
            2: { en: "Learn More", az: "Ətraflı Öyrən" },
            3: { en: "Learn More", az: "Ətraflı Öyrən" }
        },
        '.intro h2': {
            0: { en: "Content Marketing", az: "Kontent Marketinq" },
            1: { en: "Social Engagement", az: "Sosial Əlaqələr" },
            2: { en: "Identity & Branding", az: "Şəxsiyyət və Brendinq" },
            3: { en: "Product Design", az: "Məhsul Dizaynı" }
        },
        '.reasons h5': {
            0: { en: "Collect Ideas", az: "İdeya Toplamaq" },
            1: { en: "Data Analysis", az: "Data Analizi" },
            2: { en: "Finalize Product", az: "Məhsulu Yekunlaşdırmaq" }
        },
        '.stat-p': {
            0: { en: "Customer Satisfaction", az: "Müştəri Məmnunluğu" },
            1: { en: "Increased Revenue", az: "Gəlir Artışı" }
        },
        '.grid-section h5': {
            0: { en: "Creativity", az: "Yaradıcılıq" },
            1: { en: "Innovative Thinking", az: "İnnovativ Düşüncə" },
            2: { en: "Rapid Solutions", az: "Cəld Həllər" },
            3: { en: "Top-Notch Support", az: "Keyfiyyətli Dəstək" }
        },
        'footer h5': {
            0: { en: "Get in Touch", az: "Əlaqəyə Keç" },
            1: { en: "Learn More", az: "Məlumat" },
            2: { en: "Our Newsletter", az: "Xəbər Lentimiz" }
        },
        'footer p': {
            0: { en: "© 2024 Sandbox.", az: "© 2024 Sandbox." },
            1: { en: "All Rights Reserved", az: "Bütün Hüquqlar Qorunur" },
            2: { en: "Moonshine St. 14/05", az: "Moonshine St. 14/05" },
            3: { en: "London", az: "London" },
            4: { en: "United Kingdom", az: "United Kingdom" },
            5: { en: "info@email.com", az: "info@email.com" },
            6: { en: "00 (123) 456 78 90", az: "00 (123) 456 78 90" },
            7: { en: "About Us", az: "Haqqımızda" },
            8: { en: "Our Story", az: "Hekayəmiz" },
            9: { en: "Projects", az: "Proyektlər" },
            10: { en: "Terms of Use", az: "İstifadə Qaydaları" },
            11: { en: "Privacy Policy", az: "Gizlilik Siyasəti" },
            12: { en: "Subscribe to our newsletter to get our news & deals delivered to you.", az: "Yenilik və xəbərlərimizi sizə çatdırmağımız üçün xəbər lentimizə abunə olun."}
        }

    },
    elements: {
        // Intro and Nav Section
        '#lang-btn': {en: LANGUAGES.AZ, az: LANGUAGES.EN},
        '.intro.container h1': { en: "We bring solutions to make life easier.", az: "Həyatı asanlaşdıran həllər gətiririk." },
        '.intro.container p': { en: "We are a creative company that focuses on long term relationships with customers.", az: "Biz müştərilərlə uzunmüddətli əlaqələrə fokuslanmış yaradıcı şirkətik." },
        '.intro.container button': { en: "Read More", az: "Ətraflı oxu" },
        // Reasons Section
        '.reasons > p': { en: "WHY CHOOSE SANDBOX?", az: "NİYƏ SANDBOXU SEÇMƏLİ?" },
        '.reasons > h1': { en: "Here are a few reasons why our customers choose Sandbox.", az: "Müştərilərimizin Sandboxu seçməsi üçün bir neçə səbəb." },
        '.reasons h3': { en: "Collect Ideas", az: "İdeyalar Topla" },
        '.reasons button': { en: "Learn More", az: "Ətraflı Öyrən" },
        // Professional Section
        '.professional .statistics-header > p': { en: "SAVE TIME AND MONEY", az: "PULA VƏ VAXTA QƏNAƏT" },
        '.professional .statistics-header > h1': { en: "Save your time and money by choosing our professional team.", az: "Peşəkar komandamızı seçməklə vaxtınıza və pulunuza qənaət edin." },
        '.professional .review': { en: "Marketing Specialist", az: "Marketinq Mütəxəssisi" },
        // Slider Section
        '.slider-section > div > p': { en: "LATEST PROJECTS", az: "YENI PROYEKTLƏR" },
        '.slider-section h1': { en: "Check out some of our awesome projects with creative ideas and great design.", az: "Mükəmməl dizayn və kreativ ideyalarla dolu proyektlərimizə nəzər yetirin." },
        // Grid section
        '.grid-section .opaque-header': { en: "WHAT MAKES US DIFFERENT?", az: "BİZİ FƏRQLİ EDƏN NƏDİR?" },
        '.grid-section h1': { en: "We bring solutions to make life easier for our customers.", az: "Müştərilərimizin həyatını asanlaşdıran həllər təqdim edirik." },
        // Community Section
        '.community p': { en: "JOIN OUR COMMUNITY", az: "CƏMİYYƏTİMİZƏ QOŞUL" },
        '.community h2': { en: "We are trusted by over 5000+ clients. Join them now and grow your business.", az: "5000+ müştəri bizə güvənir. Onlara qoşul və biznesini inkişaf etdir." },
        '.community button': { en: "Get Started", az: "Başla" },
        // Footer Button
        'footer button': { en: "Join", az: "Qoşul" }
    }            
}
