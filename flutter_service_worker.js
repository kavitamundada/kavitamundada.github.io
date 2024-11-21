'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f0917e8aab73202e61b11a9663ba2edd",
"version.json": "c420e205d8eac4ccea99913b4a50bfa7",
"index.html": "a606e5384b58f6a80ef6b78e25890f8d",
"/": "a606e5384b58f6a80ef6b78e25890f8d",
"main.dart.js": "070d1c70aed6a71b99824c218c0f9a0e",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "4d2a074e955647542596586cbde41715",
"assets/AssetManifest.json": "18a4a5f4e2fd0b787c08a7a3590c1caa",
"assets/NOTICES": "abb16340c7cfaab57bdde81d40c285ce",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "21f6c520a74f786cbaa84a5e17d515fb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4ef9893efa01cfda3949bb8a030ea494",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "658b490c9da97710b01bd0f8825fce94",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5070443340d1d8cceb516d02c3d6dee7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d7791ef376c159f302b8ad90a748d2ab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d5384a595559580ad808a69e9d9e1b6e",
"assets/fonts/MaterialIcons-Regular.otf": "7e8d2f3f03b55fdff7a207bf867a7261",
"assets/assets/images/social_media_posting/social_media_posting14.jpg": "06f1315c02c31a4dc862a31b61626f35",
"assets/assets/images/social_media_posting/social_media_posting2.jpg": "504fcbb0029fef6913a150df0cd8be43",
"assets/assets/images/social_media_posting/social_media_posting3.jpg": "df078c1e652ce91aa8504580b7e614a6",
"assets/assets/images/social_media_posting/social_media_posting15.jpg": "7811b21dff21fc18f7263de7b49a5400",
"assets/assets/images/social_media_posting/social_media_posting17.jpg": "ec8e5e13eedc551d62b6257ab749c9b8",
"assets/assets/images/social_media_posting/social_media_posting1.jpg": "3893bbe972ff392d969dc5e5c0388a4d",
"assets/assets/images/social_media_posting/social_media_posting16.jpg": "1c3b477b5bbdeb3e107aed3e8cf15b06",
"assets/assets/images/social_media_posting/social_media_posting12.jpg": "8ee5f83c277d3d307dba74fb76333d7c",
"assets/assets/images/social_media_posting/social_media_posting4.jpg": "b3e22f85fd1712a656c5d908e3f2adb2",
"assets/assets/images/social_media_posting/social_media_posting5.jpg": "4c10b9b2ed426cb0386d98854276d119",
"assets/assets/images/social_media_posting/social_media_posting13.jpg": "38040ffd8c495602e330205b40d61f62",
"assets/assets/images/social_media_posting/social_media_posting11.jpg": "d75ac044ebd3dcf1d1b7996c7cd347c0",
"assets/assets/images/social_media_posting/social_media_posting7.jpg": "9bd06647c5801dd59b956ed7283e123a",
"assets/assets/images/social_media_posting/social_media_posting6.jpg": "fb96e832784d8e7c6e8538c0b786a2dd",
"assets/assets/images/social_media_posting/social_media_posting10.jpg": "2825acab8941b190aa31684a6b6fbb3c",
"assets/assets/images/social_media_posting/social_media_posting21.jpg": "f8345b54f1a799a66a44791dc126c905",
"assets/assets/images/social_media_posting/social_media_posting20.jpg": "d3a616b12e8348167c3a08a93f9df087",
"assets/assets/images/social_media_posting/social_media_posting22.jpg": "a1c891957d188bca881abdec500c6aa8",
"assets/assets/images/social_media_posting/social_media_posting8.jpg": "6fe4d41648c1062ffbdcfbbd479836c8",
"assets/assets/images/social_media_posting/social_media_posting9.jpg": "b386c97bf9d17ae13e489fdaa39394ce",
"assets/assets/images/social_media_posting/social_media_posting23.jpg": "173d470e414a3715e54f63ba07935fe3",
"assets/assets/images/social_media_posting/social_media_posting18.jpg": "34ce684784624139d9045cc5876b3cb2",
"assets/assets/images/social_media_posting/social_media_posting19.jpg": "6daac28d8bb16bcf15e92ba17baad1c1",
"assets/assets/images/posters/poster9.jpg": "55f4c134cc519d3aad63a9fcee04d742",
"assets/assets/images/posters/poster8.jpg": "d6578311131d10dd0afae1fd717bcc01",
"assets/assets/images/posters/poster26.jpg": "0e90be5cabbb2395234ae9d9ea8c7dfa",
"assets/assets/images/posters/poster24.jpg": "c59b2787bf996093f6744b8a54abd48e",
"assets/assets/images/posters/poster18.jpg": "2772e7d106b0d7f588ed3d0c2d327580",
"assets/assets/images/posters/poster19.jpg": "bf3fd9651c1803531fd70279f9795bd9",
"assets/assets/images/posters/poster25.jpg": "c3fe7ab3c6d44fa0dbdb3abc845a4f76",
"assets/assets/images/posters/poster21.jpg": "3c0d49cff366fbfade8f7e857145e805",
"assets/assets/images/posters/poster20.jpg": "9f7c8834acf6bbfd79c39ec0f9e46f46",
"assets/assets/images/posters/poster22.jpg": "6abf623237659565ff2c1ef79733e6af",
"assets/assets/images/posters/poster23.jpg": "100db43234be848e32df7b9ae8b5e0a8",
"assets/assets/images/posters/poster12.jpg": "8e05088b12cc596883292224fac5b4b8",
"assets/assets/images/posters/poster13.jpg": "d99edc03acf738f12386419c708296bc",
"assets/assets/images/posters/poster11.jpg": "b3076fea2069d745c003b1e0c79404a9",
"assets/assets/images/posters/poster10.jpg": "5191e67819775a6cbafd5b9c3f3a8665",
"assets/assets/images/posters/poster14.jpg": "a76b614877da35e2d8195f64fb0a80fb",
"assets/assets/images/posters/poster15.jpg": "5a3d2b243cd654d7a2bbc4ebf73adea7",
"assets/assets/images/posters/poster17.jpg": "3d62f44802ee413fc4ead842bd551a34",
"assets/assets/images/posters/poster16.jpg": "8ae8216c28631a0dbc5e043ad5943f26",
"assets/assets/images/posters/poster6.jpg": "fca67f3d37d67dff25b40b5ac4ca9101",
"assets/assets/images/posters/poster7.jpg": "b189710d9d3417010da2429e60352dca",
"assets/assets/images/posters/poster5.jpg": "5b1a57d258d5e09e290cddb0114210ca",
"assets/assets/images/posters/poster4.jpg": "a84e4dba29e13fdc8fcad39c197629cb",
"assets/assets/images/posters/poster1.jpg": "161ccd5adc4e85d514ea82d13f398104",
"assets/assets/images/posters/poster3.jpg": "19ba792157e6bfa647fce5a44894888f",
"assets/assets/images/posters/poster2.jpg": "d6578311131d10dd0afae1fd717bcc01",
"assets/assets/images/logos/logo15.jpg": "a61dda570cbd705f0daa8454761acf39",
"assets/assets/images/logos/logo14.jpg": "2180d6d5adca31070b7b0fe66ab58952",
"assets/assets/images/logos/logo10.jpg": "08df586149a3f03d4b1f4deeb09367e8",
"assets/assets/images/logos/logo11.jpg": "2651d69431181bba0b01948ac9f43528",
"assets/assets/images/logos/logo13.jpg": "09bb825600f553b2980d4afd06ea0252",
"assets/assets/images/logos/logo12.jpg": "23d28c07c208ee3f581068cdf0d397e5",
"assets/assets/images/logos/logo9.jpg": "9d126fabd71e6807a24b599c0079978a",
"assets/assets/images/logos/logo8.jpg": "d67a1d8dcbf33e29c97f0029fec0a578",
"assets/assets/images/logos/logo1.png": "5a4fe0bc19e2178ff2da8d3ef72d8cd4",
"assets/assets/images/logos/logo3.png": "a00b640f2b1e03befa6b37ea5c415ab0",
"assets/assets/images/logos/logo2.jpg": "4907be71530f4824d3ac4bfa3113e4e9",
"assets/assets/images/logos/logo6.jpg": "2676adb88acea480390b98dbd3e27348",
"assets/assets/images/logos/logo7.jpg": "6c94e57505cd25c07044148991d2377e",
"assets/assets/images/logos/logo5.jpg": "aa2471846809b01e8c27caccf8d25c18",
"assets/assets/images/logos/logo4.jpg": "0746a101d7a8fc2ae74ed1b09539bcaf",
"assets/assets/images/festival_special_posts/festival_special_posts16.jpg": "331247fac19185fc13c83b353a34952f",
"assets/assets/images/festival_special_posts/festival_special_posts17.jpg": "ae5e68198c664eb65fef3f49be6b0fbe",
"assets/assets/images/festival_special_posts/festival_special_posts29.jpg": "94d9a22ade85bfba9f37386bb96784f8",
"assets/assets/images/festival_special_posts/festival_special_posts15.jpg": "dd03548d6b9e4ba977cf736652674290",
"assets/assets/images/festival_special_posts/festival_special_posts14.jpg": "9693d9465e515ddbdf6290edbae73f94",
"assets/assets/images/festival_special_posts/festival_special_posts28.jpg": "afa06658559e9239cc93379d3a119a3a",
"assets/assets/images/festival_special_posts/festival_special_posts10.jpg": "4ab8d3fad8a8f7a1967e1f5456fabad4",
"assets/assets/images/festival_special_posts/festival_special_posts11.jpg": "4967dc58c42d95e9c26f5f9a5d486a47",
"assets/assets/images/festival_special_posts/festival_special_posts13.jpg": "96c37585214df22c8406adab04554f52",
"assets/assets/images/festival_special_posts/festival_special_posts9.jpg": "66610a768f1e5c26ab80805290bb4297",
"assets/assets/images/festival_special_posts/festival_special_posts8.jpg": "85b98b6be4d3f8432202e35d80423891",
"assets/assets/images/festival_special_posts/festival_special_posts12.jpg": "4f2c9c0c2d9aa43e34b8e4f9b164abde",
"assets/assets/images/festival_special_posts/festival_special_posts23.jpg": "071a294900f560c3a7a1165fd4e5a58a",
"assets/assets/images/festival_special_posts/festival_special_posts5.jpg": "a3a18fce68bb6d70b8d5b0bd87578477",
"assets/assets/images/festival_special_posts/festival_special_posts4.jpg": "1a754b35bab830b84b21082b91967739",
"assets/assets/images/festival_special_posts/festival_special_posts22.jpg": "f526c40d29fde82ec99090f5c3bf229d",
"assets/assets/images/festival_special_posts/festival_special_posts20.jpg": "0de95aae17ef8643056322ffdbb8ad65",
"assets/assets/images/festival_special_posts/festival_special_posts34.jpg": "6567505b8e3454bd65dffd1001108d11",
"assets/assets/images/festival_special_posts/festival_special_posts6.jpg": "b713e3e2f99524696492fe3064d03048",
"assets/assets/images/festival_special_posts/festival_special_posts7.jpg": "77fb3cf1b29ca7c469cebf647625076d",
"assets/assets/images/festival_special_posts/festival_special_posts35.jpg": "2445a9aa3dc70aec847d88c05266633b",
"assets/assets/images/festival_special_posts/festival_special_posts21.jpg": "a43b1ffa4070a7799f45802ff9c79c50",
"assets/assets/images/festival_special_posts/festival_special_posts25.jpg": "9bc609010f7231fa2c85bd9714cd89cb",
"assets/assets/images/festival_special_posts/festival_special_posts31.jpg": "a87b11a83eea147fb87f29fc84059bac",
"assets/assets/images/festival_special_posts/festival_special_posts19.jpg": "36d5ed64029724041ad90d26bce236f6",
"assets/assets/images/festival_special_posts/festival_special_posts3.jpg": "af561846b6d03bd9557c47f2e4f32a31",
"assets/assets/images/festival_special_posts/festival_special_posts2.jpg": "a21d70e006b00e85245b7f210ca593c7",
"assets/assets/images/festival_special_posts/festival_special_posts18.jpg": "dac479722d5a2e9cea52c3eaca3badba",
"assets/assets/images/festival_special_posts/festival_special_posts30.jpg": "f058c9c4b59018ed74cfc506549c2f5f",
"assets/assets/images/festival_special_posts/festival_special_posts24.jpg": "8927853fbf96eee49dc3ac27b6bae7bd",
"assets/assets/images/festival_special_posts/festival_special_posts32.jpg": "dffce3f8c481c69ec974ee32281d0c9b",
"assets/assets/images/festival_special_posts/festival_special_posts26.jpg": "fa926e45b0fcb2fb54e02005a8728225",
"assets/assets/images/festival_special_posts/festival_special_posts1.jpg": "0d75a1952b004d85f673d0f46575b4ca",
"assets/assets/images/festival_special_posts/festival_special_posts27.jpg": "34f0df88c4216c5a1154299df07ffc1d",
"assets/assets/images/festival_special_posts/festival_special_posts33.jpg": "fc4e904a41a0d7ae42f24119726becb3",
"assets/assets/images/banners/banner18.jpg": "bc9536cded13735b2c708e2c627da018",
"assets/assets/images/banners/banner24.jpg": "b8af31c3deb5c4a553013e249f90bfdb",
"assets/assets/images/banners/banner25.jpg": "0033ca029f10a9d7827ea431c7985ed1",
"assets/assets/images/banners/banner19.jpg": "79951d6d6d2620dc719ad544ed57dae9",
"assets/assets/images/banners/banner27.jpg": "084143e3bf3b15d5f2668c97fca8fead",
"assets/assets/images/banners/banner26.jpg": "e7c3f47f66407fe7026e0a6451903820",
"assets/assets/images/banners/banner22.jpg": "1e9a2216a378173391a7636708f5aae8",
"assets/assets/images/banners/banner23.jpg": "87edc2973c00d5fc94af9a5b09f44086",
"assets/assets/images/banners/banner21.jpg": "cfb2d6caa0be52e3cbf384271f3015d0",
"assets/assets/images/banners/banner20.jpg": "ddcf824a02194d3f857644da8880c9cb",
"assets/assets/images/banners/banner2.jpg": "082f82d5e0f216d5817b42b05d90608d",
"assets/assets/images/banners/banner3.jpg": "6d4a84faff12e88dc9cf5618e2101504",
"assets/assets/images/banners/banner1.jpg": "b831298dc9482f802794b18b422ce43e",
"assets/assets/images/banners/banner4.jpg": "9b6b3a67527b111358cb3cafd8e6f900",
"assets/assets/images/banners/banner5.jpg": "42a850f051ad8624c8fd1e6df9713c03",
"assets/assets/images/banners/banner7.jpg": "dc8a9449c054f0cf4b92c5eb3f407f2c",
"assets/assets/images/banners/banner6.jpg": "9af8cd2e7f8f2fc6c4c8dc3c59db3596",
"assets/assets/images/banners/banner8.jpg": "0004a9ae9291942a99ce002773306f0e",
"assets/assets/images/banners/banner9.jpg": "db500b08438fd002a7de959f75e65b5e",
"assets/assets/images/banners/banner11.jpg": "9996f7e8d6183a684de1b1152c9b6435",
"assets/assets/images/banners/banner10.jpg": "b40837c0c883e563ef8e52697a6bc71a",
"assets/assets/images/banners/banner12.jpg": "9ae56cea954af07a83b3b4781a0fba29",
"assets/assets/images/banners/banner13.jpg": "1c70177ac5cbe6ed2a1f0357afb95807",
"assets/assets/images/banners/banner17.jpg": "f728899021a44eac0c6a1812ef1820af",
"assets/assets/images/banners/banner16.jpg": "91e8d7642106aaf702ce62183f1c2757",
"assets/assets/images/banners/banner14.jpg": "dcc1f7766c8c8d32ca0d228bc1983f32",
"assets/assets/images/banners/banner15.jpg": "39fe465a55ceeae1fa4d39e29a77349e",
"assets/assets/images/creative_designs/creative_designs1.jpg": "73bf9f6a650ab4aa0999cc8ab9d39561",
"assets/assets/images/creative_designs/creative_designs11.jpg": "423271b4dae16e1ee8c0fef7badc9a0d",
"assets/assets/images/creative_designs/creative_designs10.jpg": "de0cd73258c9de9966f9dc3d0c1b30b7",
"assets/assets/images/creative_designs/creative_designs2.jpg": "f1d16a1e0993a22d3760bcf1cc810d0b",
"assets/assets/images/creative_designs/creative_designs12.jpg": "f12c6801d940b10009a5a76ca4305dc6",
"assets/assets/images/creative_designs/creative_designs13.jpg": "698a951e45a7dd2418e50e3f14b16bcb",
"assets/assets/images/creative_designs/creative_designs3.jpg": "078ecab5709226ca890abce792545a4b",
"assets/assets/images/creative_designs/creative_designs7.jpg": "4161c068424f47465841d6a14a3a88e3",
"assets/assets/images/creative_designs/creative_designs17.jpg": "ba4c322496500e66e33495454dc4bf04",
"assets/assets/images/creative_designs/creative_designs16.jpg": "0e594e64c4af5da32218ed6e5fb724ef",
"assets/assets/images/creative_designs/creative_designs6.jpg": "24938d2f086bfbbb965d320c5934fe33",
"assets/assets/images/creative_designs/creative_designs4.jpg": "fe99e866156e802f4e7a63a2b1e6b33e",
"assets/assets/images/creative_designs/creative_designs14.jpg": "7826c0f3fbae04de85c5d3d48bca305b",
"assets/assets/images/creative_designs/creative_designs15.jpg": "ca07a187b4e8a1ffc4e6ff309ffbaf76",
"assets/assets/images/creative_designs/creative_designs5.jpg": "91d4e52ddf2c236b8326e42ba1df4fc1",
"assets/assets/images/creative_designs/creative_designs8.jpg": "8267e0874a9305f71e427e2659d81829",
"assets/assets/images/creative_designs/creative_designs18.jpg": "f666cb224e0c7fa51e01e029c018857f",
"assets/assets/images/creative_designs/creative_designs19.jpg": "b2e2a759604366a50a914fbb97a3ae3a",
"assets/assets/images/creative_designs/creative_designs9.jpg": "9b0a04cd3ec0d9c001785e388fdc99fe",
"assets/assets/images/creative_designs/creative_designs20.jpg": "0cc6d59a7a6c44ba055e6812a47d886b",
"assets/assets/images/profile.jpg": "45ba80ea698e0a419429a9888e7dedfb",
"assets/assets/images/logo_mockups/logo_mockup4.jpg": "a1dabefe347f8194b21fc880e4042071",
"assets/assets/images/logo_mockups/logo_mockup5.jpg": "c197d2d8996d14682bbadb8455d4edbe",
"assets/assets/images/logo_mockups/logo_mockup7.jpg": "9050751d699a9da80ef0becb949fc59f",
"assets/assets/images/logo_mockups/logo_mockup6.jpg": "d3e71184ba06817e02b0dfb9547433ad",
"assets/assets/images/logo_mockups/logo_mockup2.jpg": "f7e52a33cd794a4843cdc18a24009fb2",
"assets/assets/images/logo_mockups/logo_mockup3.jpg": "c6cd559dc6d807573ebfd90dbecd480b",
"assets/assets/images/logo_mockups/logo_mockup1.jpg": "78ff097b4d76a1da4dcafcd7d5873793",
"assets/assets/images/logo_mockups/logo_mockup10.jpg": "7faad3e102c7ff1423108fb69acf2ad6",
"assets/assets/images/logo_mockups/logo_mockup11.jpg": "d6ae00cda3c4258c9045fff3e924630a",
"assets/assets/images/logo_mockups/logo_mockup13.jpg": "56e01153216e57c83fdaa476602c154d",
"assets/assets/images/logo_mockups/logo_mockup12.jpg": "38b10673790d78c728d6de7c6b1d8dd3",
"assets/assets/images/logo_mockups/logo_mockup15.jpg": "f0a3af9fac14d784637548149759e06e",
"assets/assets/images/logo_mockups/logo_mockup14.jpg": "404cca768f16cad9dca926f1d64dd8bd",
"assets/assets/images/logo_mockups/logo_mockup8.jpg": "c9f711543db3736ee455ee2f28422077",
"assets/assets/images/logo_mockups/logo_mockup9.jpg": "31ab2c2f19dd379fe7e7fd382dd4aa7f",
"assets/assets/images/triange_icon.png": "086ab5ca50d3e558e3307ff009975083",
"assets/assets/images/image.png": "9fb5704e719f93940bba93d69ebbd5cb",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/google-drive.svg": "e8f9f6863622e805ea31ef17bafb1c52",
"assets/assets/icons/flutter.png": "1105c9a994c1a6638daed558d5b631fd",
"assets/assets/icons/instagram.svg": "341a67c538d67f9ce92005cf14255dc2",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/firebase.png": "36170822afe4c716cfbdb96dac8cd10e",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/bloc.png": "977fbfba561065f9a68c4b47f9774531",
"assets/assets/icons/whatsapp.svg": "b65e7fbc7a6bb9e96984d3d2a4784e4f",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/icons/dart.png": "1ab71d33e7ba834836197b4fa8726da0",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
