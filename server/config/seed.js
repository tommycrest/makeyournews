/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Language from '../api/language/language.model';

Language.find({}).remove()
  .then(() => {
	Language.create(
	{
		"label": "Argentina",
		"language": "es_ar",
		"ned": "es_ar",
		"hl": "es",
		"title": "Noticias",
		"topic1": "Noticias destacadas",
		"topic2": "Internacional",
		"active": "true"
	},
	{
		"label": "Australia",
		"language": "au",
		"ned": "au",
		"hl": "en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
	},
     {
		"label": "België",
		"language": "nl_be",
		"ned": "nl_be",
		"hl": "nl",
		"title": "Nieuws",
		"topic1": "Belangrijke artikelen",
		"topic2": "Buitenland",
		"active": "true"
	},
     {
		"label": "Belgique",
		"language": "fr_be",
		"ned": "fr_be",
		"hl": "fr",
		"title": "Actualités",
		"topic1": "À la une",
		"topic2": "International",
		"active": "true"
	},{
		"label": "Botswana",
		"language": "en_bw",
		"ned": "en_bw",
		"hl": "en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
	},
     {
		"label": "Brasil",
		"language": "pt_br",
		"ned": "pt-BR_br",
		"hl": "pt-BR",
		"title": "Notícias",
		"topic1": "Últimas notícias",
		"topic2": "Mundo",
		"active": "true"
	},{
		"label": "Canada Fr",
		"language": "fr",
		"ned": "ca",
		"hl": "fr",
		"title": "Actualités",
		"topic1": "À la une",
		"topic2": "International",
		"active": "true"
	},
     {
		"label": "Canada En",
		"language": "en",
		"ned": "ca",
		"hl": "en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
	},{
		"label": "Česká republika",
		"language": "cs",
		"ned": "cs_cz",
		"hl": "cs",
		"title": "Zprávy",
		"topic1": "Hlavní události",
		"topic2": "Svět",
		"active": "true"
	},{
		"label": "Chile",
		"language": "es_cl",
		"ned": "es_cl",
		"hl": "es",
		"title": "Noticias",
		"topic1": "Noticias destacadas",
		"topic2": "Internacional",
		"active": "true"
	},{
        "label":"Colombia",
        "language":"es_co",
        "ned":"es_co",
        "hl":"es",
		"title": "Noticias",
		"topic1": "Noticias destacadas",
		"topic2": "Internacional",
		"active": "true"
    },{
        "label":"Cuba",
        "language":"es_cu",
        "ned":"es_cu",
        "hl":"es",
		"title": "Noticias",
		"topic1": "Noticias destacadas",
		"topic2": "Internacional",
		"active": "true"
    },{
        "label":"Deutschland",
        "language":"de",
        "ned":"de",
        "hl":"de",
		"title": "News",
		"topic1": "Schlagzeilen",
		"topic2": "Internacional",
		"active": "true"
    },{
        "label":"España",
        "language":"en",
        "ned":"en",
        "hl":"en",
		"title": "Noticias",
		"topic1": "Noticias destacadas",
		"topic2": "Internacional",
		"active": "true"
    },{
        "label":"Estados Unidos",
        "language":"es_us",
        "ned":"es_us",
        "hl":"es",
		"title": "Noticias",
		"topic1": "Noticias destacadas",
		"topic2": "Internacional",
		"active": "true"
    },{
        "label":"Ethiopia",
        "language":"en_et",
        "ned":"en_et",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
        "label":"France",
        "language":"fr",
        "ned":"fr",
        "hl":"fr",
		"title": "Actualités",
		"topic1": "À la une",
		"topic2": "International",
		"active": "true"
    },{
        "label":"Ghana",
        "language":"en_gh",
        "ned":"en_gh",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    	"label":"India",
    	"language":"in",
        "ned":"in",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    	"label":"Indonesia",
    	"language":"id_id",
        "ned":"id_id",
        "hl":"id",
		"title": "Warta",
		"topic1": "Berita Terhangat",
		"topic2": "Dunia",
		"active": "true"
    },{
    	"label":"Ireland",
    	"language":"en_ie",
        "ned":"en_ie",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    	"label":"Israel English",
    	"language":"en_il",
        "ned":"en_il",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    	"label":"Italia",
    	"language":"it",
        "ned":"it",
        "hl":"it",
		"title": "News",
		"topic1": "Prima Pagina",
		"topic2": "Esteri",
		"active": "true"
    },{
    "label":"Kenya",
    "language":"en_ke",
        "ned":"en_ke",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    "label":"Latvija",
    "language":"lv_lv",
        "ned":"lv_lv",
        "hl":"lv",
		"title": "Ziņas",
		"topic1": "Populārākie raksti",
		"topic2": "Pasaulē",
		"active": "true"
    },{
		"label":"Lietuva",
		"language":"lt_lt",
        "ned":"lt_lt",
        "hl":"lt",
		"title": "Naujienos",
		"topic1": "Svarbiausios naujienos",
		"topic2": "Pasaulis",
		"active": "true"
    },{
		"label":"Magyarország",
		"language":"hu_hu",
        "ned":"hu_hu",
        "hl":"hu",
		"title": "Hírek",
		"topic1": "Vezető hírek",
		"topic2": "Nemzetközi",
		"active": "true"
    },{
		"label":"Malaysia",
		"language":"en_my",
        "ned":"en_my",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
		"label":"Maroc",
		"language":"fr_ma",
        "ned":"fr_ma",
        "hl":"fr",
		"title": "Actualités",
		"topic1": "À la une",
		"topic2": "International",
		"active": "true"
    },{
		"label":"México",
		"language":"es_mx",
        "ned":"es_mx",
        "hl":"es",
		"title": "Noticias",
		"topic1": "Noticias destacadas",
		"topic2": "Internacional",
		"active": "true"
    },{
		"label":"Namibia",
		"language":"en_na",
        "ned":"en_na",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    	"label":"Nederland",
		"language":"nl_nl",
        "ned":"nl_nl",
        "hl":"nl",
		"title": "Nieuws",
		"topic1": "Voorpaginanieuws",
		"topic2": "Buitenland",
		"active": "true"
    },{
    	"label":"New Zealand",
		"language":"nz",
        "ned":"nz",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
		"label":"Nigeria",
		"language":"en_ng",
        "ned":"en_ng",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
		"label":"Norge",
		"language":"no_no",
        "ned":"no_no",
        "hl":"no",
		"title": "Nyheter",
		"topic1": "Hovedoppslag",
		"topic2": "Utenriks",
		"active": "true"
    },{
		"label":"Österreich",
		"language":"de_at",
        "ned":"de_at",
        "hl":"de",
		"title": "News",
		"topic1": "Schlagzeilen",
		"topic2": "International",
		"active": "true"
    },{
		"label":"Pakistan",
		"language":"en_pk",
        "ned":"en_pk",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
		"label":"Perú",
		"language":"es_pe",
        "ned":"es_pe",
        "hl":"es",
		"title": "Noticias",
		"topic1": "Noticias destacadas",
		"topic2": "Internacional",
		"active": "true"
    },{
		"label":"Philippines",
		"language":"en_ph",
        "ned":"en_ph",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    	"label":"Polska",
		"language":"pl_pl",
        "ned":"pl_pl",
        "hl":"pl",
		"title": "Wiadomości",
		"topic1": "Najważniejsze artykuły",
		"topic2": "Świat",
		"active": "true"
    },{
    "label":"Portugal",
    "language":"pt-PT_pt",
        "ned":"pt-PT_pt",
        "hl":"pt-PT",
		"title": "Notícias",
		"topic1": "Notícias principais",
		"topic2": "Mundo",
		"active": "true"
    },{
    "label":"România",
    "language":"ro_ro",
        "ned":"ro_ro",
        "hl":"ro",
		"title": "Ştiri",
		"topic1": "Cele mai populare subiecte",
		"topic2": "Internațional",
		"active": "true"
    },{
    	"label":"Schweiz",
    	"language":"de_ch",
        "ned":"de_ch",
        "hl":"de",
		"title": "News",
		"topic1": "Schlagzeilen",
		"topic2": "International",
		"active": "true"
    },{
    "label":"Sénégal",
    "language":"fr_sn",
        "ned":"fr_sn",
        "hl":"fr",
		"title": "Actualités",
		"topic1": "À la une",
		"topic2": "International",
		"active": "true"
    },{
    	"label":"Singapore",
   		"language":"en_sg",
        "ned":"en_sg",
        "hl":"en_sg",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
		"label":"Slovenija",
    	"language":"sl_si",
        "ned":"sl_si",
        "hl":"sl",
		"title": "Novice",
		"topic1": "Najpomembnejše novice",
		"topic2": "Svet",
		"active": "true"
    },{
		"label":"Slovensko",
		"language":"sk_sk",
        "ned":"sk_sk",
        "hl":"sk",
		"title": "News",
		"topic1": "Hlavné správy",
		"topic2": "Svet",
		"active": "true"
    },{
    	"label":"South Africa",
		"language":"en_za",
        "ned":"en_za",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
		"label":"Suisse",
		"language":"fr_ch",
        "ned":"fr_ch",
        "hl":"fr",
		"title": "Actualités",
		"topic1": "À la une",
		"topic2": "International",
		"active": "true"
    },{
    	"label":"Sverige",
    	"language":"sv_se",
        "ned":"sv_se",
        "hl":"sv",
		"title": "Nyheter",
		"topic1": "Huvudnyheter",
		"topic2": "Världen",
		"active": "true"
    },{
    	"label":"Tanzania",
    	"language":"en_tz",
        "ned":"en_tz",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    	"label":"Türkiye",
    	"language":"tr_tr",
        "ned":"tr_tr",
        "hl":"tr",
		"title": "Haberler",
		"topic1": "En Çok Okunan Haberler",
		"topic2": "Dünya",
		"active": "true"
    },{
    	"label":"U.K.",
    	"language":"uk",
        "ned":"uk",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    	"label":"U.S.",
	    "language":"us",
        "ned":"us",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    "label":"Uganda",
    "language":"en_ug",
        "ned":"en_ug",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    "label":"Venezuela",
    "language":"es_ve",
        "ned":"es_ve",
        "hl":"es",
		"title": "Noticias",
		"topic1": "Noticias destacadas",
		"topic2": "Internacional",
		"active": "true"
    },{
    "label":"Việt Nam (Vietnam)",
    "language":"vi_vn",
        "ned":"vi_vn",
        "hl":"vi",
		"title": "Tin tức",
		"topic1": "Tin bài hàng đầu",
		"topic2": "Thế giới",
		"active": "true"
    },{
		"label":"Zimbabwe",
    	"language":"en_zw",
        "ned":"en_zw",
        "hl":"en",
		"title": "News",
		"topic1": "Top Stories",
		"topic2": "World",
		"active": "true"
    },{
    "label":"Ελλάδα (Greece)",
    "language":"el_gr",
        "ned":"el_gr",
        "hl":"el",
		"title": "Ειδήσεις",
		"topic1": "Κυριότερες ειδήσεις",
		"topic2": "Κόσμος",
		"active": "true"
    },{
    "label":"България (Bulgaria)",
    "language":"bg_bg",
        "ned":"bg_bg",
        "hl":"bg",
		"title": "Новини",
		"topic1": "Водещи материали",
		"topic2": "По света",
		"active": "true"
    },{
    "label":"Россия (Russia)",
    "language":"ru",
        "ned":"ru_ru",
        "hl":"ru",
		"title": "Новости",
		"topic1": "Главные новости",
		"topic2": "В мире",
		"active": "true"
    },{
    "label":"Србија (Serbia)",
    "language":"sr_rs",
        "ned":"sr_rs",
        "hl":"sr",
		"title": "Вести",
		"topic1": "Најважније вести",
		"topic2": "Свет",
		"active": "true"
    },{
    "label":"Україна / українська (Ukraine)",
    "language":"uk_ua",
        "ned":"uk_ua",
        "hl":"uk",
		"title": "Новини",
		"topic1": "Головні новини",
		"topic2": "Світ",
		"active": "true"
    },{
    "label":"Украина / русский (Ukraine)",
    "language":"ru_ua",
        "ned":"ru_ua",
        "hl":"ru",
		"title": "Новости",
		"topic1": "Главные новости",
		"topic2": "В мире",
		"active": "true"
	},{
    "label":"ישראל (Israel)",
    "language":"iw_il",
        "ned":"iw_il",
        "hl":"iw",
		"title": "חדשות",
		"topic1": "בראש החדשות",
		"topic2": "עולם",
		"active": "true"
    },{
    "label":"الإمارات (UAE)",
    "language":"ar_ae",
        "ned":"ar_ae",
        "hl":"ar",
		"title": "الأخبار",
		"topic1": "العالم",
		"topic2": "أخبار محلية",
		"active": "true"
    },{
    "label":"السعودية (KSA)",
    "language":"ar_sa",
        "ned":"ar_sa",
        "hl":"ar",
		"title": "إصدار السعودية",
		"topic1": "أهم الأخبار",
		"topic2": "العالم",
		"active": "true"
    },{
    "label":"العالم العربي (Arabic)",
    "language":"ar_me",
        "ned":"ar_me",
        "hl":"ar",
		"title": "إصدار العالم العربي",
		"topic1": "أهم الأخبار",
		"topic2": "العالم",
		"active": "true"
    },{
    "label":"لبنان (Lebanon)",
    "language":"ar_lb",
        "ned":"ar_lb",
        "hl":"ar",
		"title": "إصدار لبنان",
		"topic1": "أهم الأخبار",
		"topic2": "العالم",
		"active": "true"
    },{
    	"label":"مصر (Egypt)",
    	"language":"ar_eg",
        "ned":"ar_eg",
        "hl":"ar_eg",
		"title": "إصدار مصر",
		"topic1": "أهم الأخبار",
		"topic2": "العالم",
		"active": "true"
    },{
    	"label":"हिन्दी (India)",
    	"language":"hi_in",
        "ned":"hi_in",
        "hl":"hi_in",
		"title": "समाचार",
		"topic1": "सुर्खियां",
		"topic2": "विश्व",
		"active": "true"
    },{
    	"label":"বাংলাদেশ (Bangladesh)",
    	"language":"bn_bd",
        "ned":"bn_bd",
        "hl":"bn",
		"title": "সংবাদ",
		"topic1": "সেরা খবর",
		"topic2": "বিশ্ব",
		"active": "true"
    },{
    	"label":"தமிழ்(India)",
    	"language":"ta_in",
        "ned":"ta_in",
        "hl":"ta_in",
		"title": "செய்திகள்",
		"topic1": "முக்கிய செய்திகள்",
		"topic2": "உலகம்",
		"active": "true"
    },{
    	"label":"മലയാളം (India)",
    	"language":"te_in",
        "ned":"te_in",
        "hl":"te",
		"title": "వార్తలు",
		"topic1": "ముఖ్య కథనాలు",
		"topic2": "ప్రపంచం",
		"active": "true"
    },{
    	"label":"తెలుగు (India)",
    	"language":"ml_in",
        "ned":"ml_in",
        "hl":"ml",
		"title": "വാര്‍‌ത്ത",
		"topic1": "പ്രധാന വാർത്തകൾ",
		"topic2": "ലോകം",
		"active": "true"
	},{
    	"label":"ประเทศไทย (Thailand)",
    	"language":"th_th",
        "ned":"th_th",
        "hl":"th",
		"title": "ข่าวสาร",
		"topic1": "เรื่องเด่น",
		"topic2": "ข่าวทั่วโลก",
		"active": "true"
    },{
    	"label":"한국 (Korea)",
   		"language":"kr",
        "ned":"kr",
        "hl":"ko",
		"title": "뉴스 - 한국 (Korea) 버전",
		"topic1": "주요 뉴스",
		"topic2": "국제",
    },{
    	"label":"中国 (China)",
		"language":"cn",
        "ned":"cn",
        "hl":"zh-CN",
		"title": "新闻",
		"topic1": "焦点新闻",
		"topic2": "国际/港台",
		"active": "true"
    },{
    "label":"台灣 (Taiwan)",
    "language":"tw",
        "ned":"tw",
        "hl":"zh-TW",
		"title": "新聞",
		"topic1": "焦點新聞",
		"topic2": "國際",
		"active": "true"
    },{
    "label":"日本 (Japan) ",
    "language":"jp",
        "ned":"jp",
        "hl":"ja",
		"title": "ニュース",
		"topic1": "トップニュース",
		"topic2": "国際",
		"active": "true"
    },{
        "label":"香港 (Hong Kong)",
        "language":"",
        "ned":"hk",
        "hl":"zh-TW",
		"title": "新聞",
		"topic1": "焦點新聞",
		"topic2": "國際",
		"active": "true"
    });
});

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });
