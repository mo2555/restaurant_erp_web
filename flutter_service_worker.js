'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "d895197022cc912941d7dcc60ff3d81e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7680b1d4f5ef9ee290818421d144fdfb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7be85afe74c4a676bd47752703ef38aa",
".git/logs/refs/heads/master": "7be85afe74c4a676bd47752703ef38aa",
".git/logs/refs/remotes/origin/master": "67fc979e7083f927c186b22e95d86041",
".git/objects/01/3ce6f9c46b60062912ceccd905059268e41f3f": "11e74553dd9b1dfbf44def1e342f1dfa",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/13033895e5803fa92d02d042d3ac321b564e67": "db61492a8a5d9a1c3d817be1d56b58c1",
".git/objects/05/534b43693dcb6e9046de97b68d446ca86a90ef": "0203d28ae9dfb7fa310bb6f2f9caa56c",
".git/objects/09/8d2fb5851c92236b72f68263cd91886db729b6": "7605759c2a5f639931d24fdc64171045",
".git/objects/09/fc7becca34fa9d816c85ab34865014ae2c46dc": "c223ea3484e68ece96d9c6bff15fa845",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0e/fe207bc1642f0477196fb5b2afdd6ac4a2897d": "f6c99df6be256a7930d58bae8ffb35ac",
".git/objects/11/66df2f054bf07747ef69e424881be805e9535f": "5f06c9c8665f6d7bc3764169f0f93ec7",
".git/objects/19/49491fe9516a8989f036896a3e154583671459": "c597fc5e3d4267aa11ceba8cade49846",
".git/objects/1b/2cfc96bcfcbe3b0ec0a867c06f33b4c08c8443": "ecc7cb5cf0386fef1c25c4b9c5a7abea",
".git/objects/1e/727aefc44c39e1197960ea9579a496dc469929": "f822872fb8623c94de480b45c918a3e8",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/25/53c50c3b3523588fae14f9beade6fe8f0672ef": "0baa168e06796cf13e4f2e31bd23086b",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2d/b39d413a20d25f6bf57eabf2c37330a9c0e54a": "f587100a47ed3ff94c18373e49c4857c",
".git/objects/2e/096c3d20abcae9ff58ba2fbc3150e12dee6b81": "de8060d418e193b33c2a12d364704bf7",
".git/objects/30/acc8035d57efe02338401bdc58ee80a412280f": "30733a79c4739c95c9b2749d06326d40",
".git/objects/30/c6924850a8f8266cfea0ec1a5cc4ce804c9279": "2790dbe79e7edab548dc7fe1af5d7c3c",
".git/objects/38/d283493b380d5e85a9f4ce365648a6936a77cf": "5e20375ef9fe2f04fdf052cc0428c88a",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/40958c4632c774465438a8c698c90cdebc704d": "c50c99833b74d6cfff948eacec53796f",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4b/57a9c62ac80ac4219ac4c6be5fc1345999639c": "6ea9fcecf1a344e015a03ed541cb7749",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/52/b8f4edcd552daad699bb6c3dd51a16268302ba": "1a59bb6f149e6e4da08e73bee2e69cec",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/adf64201d2a0a56c7cfbb605c06921f6b6b11b": "d06e54d61b4de988fd827e73015f5a40",
".git/objects/58/4b99dfa78c74287d7b6db9f76f8bcb15dd62e5": "69a020798d7545489566bad86df386e3",
".git/objects/59/00cdb901de8ec21b580869c01c70d32e764dae": "498630bca95d427f12739acd32c22b3c",
".git/objects/61/91064686fb2e2650b125cd1ad19ece06737f78": "b49c6fe7661e7477e937a260c12c2bc6",
".git/objects/62/1a92dad236857fd1a57d2002fe7666a566002b": "f7cf2920181a5eb69d0529e6411480ea",
".git/objects/67/2e9e49d2f0c4c8aa44b496beb98f32cb36720e": "8b66be9a4797f8f3922fb5816494c68e",
".git/objects/72/65979edf50c7de7239b13085b2c6cbb5b39331": "c519eaeffc85481f003657f88ecbc295",
".git/objects/75/7e2e61ba2b24b94e30a2490103a4eb09c60ff5": "c886352518f96786dff2e89754449a45",
".git/objects/77/c90058b7daa1b453cf0e079fb4b9a6de6b4b8e": "2bc2adedb48395cb1dedb2310df969b4",
".git/objects/78/0cb278d30911adfa3239b365240d1a3a90752c": "9d1b0db0ff30b3d3cec67555e049badc",
".git/objects/7c/caee9e7b7bab8fde7a18083464a95de035e7e6": "07b90f1fed19ada91d1c5218645f32b3",
".git/objects/7f/a567bb8f4e4a48dd1bc32b1b22dfcceae1cdcd": "d974ea56d24f3597f15a9329e736c335",
".git/objects/7f/bdd9753d91be1ef500670ec52dce4de2897cc0": "0bac624ab1ea539b08fd0d9eecf8dd25",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/98/f314efb6abffcda2284a8297c6ff38cbc4d636": "d73029095b734422d480b738fdc5bc87",
".git/objects/9c/cd5c38b0fdd9fbf44a5df3b1d780358fae6c45": "cf197854dc946e5088866b6003e1ec60",
".git/objects/9d/1e74828d5437fdaac3e32864ea81f121cb5e19": "570ebab9cd22e34a1ea77b1f117b18d8",
".git/objects/a8/9a711db73e99a3f4b9a7eb368f4af1cc5cf4e4": "160988f52b1c5d37dee28f576fdd03a1",
".git/objects/a9/c424ea5c9b5635c58226a09e40ca99fb9c0b9d": "070a00722f5daaf2b590d7983ee06190",
".git/objects/ae/cc150e43c9860efc0a742314db3c47ff279fa3": "4a14a48cc28340d527ed69ba26bf21da",
".git/objects/b0/0c915a301c8891835721cd7292ff3a21a14462": "15f4d89157582971fb53d610919b9d10",
".git/objects/b7/fd13bc0acc681f46bdc6f95951004445422b57": "25b50e8cd22b8986b6e57f569718783c",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/01ffb8d0372ded758dfcac3d81d16069a78d40": "e2e272b1ec3e952b0766ba15f87ab013",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/5069b5296024168d212b6b2b5513e37e54bba3": "270d75f8a41c0a1d4bc99a68bbc1d294",
".git/objects/bf/d966fdf58c9a03d660e14aeaf92fd95c5f8c41": "c0578704007bafae99866f2701525c6c",
".git/objects/c0/d3b03f95b3a934ec0b8fd674a7309e1fd06039": "312d3e0fd1c98324fc1be1f4febf70cb",
".git/objects/c4/546bb874d939205abc1ce3d7d3f97d32143dc1": "0deaf08459bc6601e684553249617bf3",
".git/objects/c5/e8111b2a56c3283d667d0e8ad0dad0489f9c7d": "940637cc6c86958ecfb3a32ea72809e3",
".git/objects/d3/2cca838ab320b6809cd5146e39747e0d7d6345": "f1eba3705c25dc359a38454b010e0c93",
".git/objects/d4/ea375a082fba3a7b4af52b8cb8015f0b2970b5": "bcaaf6e82538cc30eb400277b79db797",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e1/1db3b262d569aeafa4b07ebc28ae1fa023bcbe": "0623b206c0960c84b402ef537dd4d4c6",
".git/objects/e2/b82ba387bf70fe312423bf37085a73a2603e0c": "b4b5742fcf259c36ad3c2a28e91774e3",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f2/1b13de2c5d6a04f68c285953ee3aff9deb35b3": "55507e7d67a8eeda024ecece1adf361e",
".git/objects/f6/17290ad994d16372a88650e53c6b3137851667": "53c4d9754f65e74c557648d007beeaa4",
".git/objects/f8/3bae74aea21101d2d3cdddc38fd381e00249b8": "01f03e759c1aeeac9adb90dad6ffe2de",
".git/objects/f9/80b577c24744e27632ad804d0f896f5518b7d6": "a46e52ee55540a1b9c1bc7573fe562ad",
".git/objects/fb/9e6cc6ba56b5af11c5360d62d5557eb245ae61": "38f6f997814965211bad605acb8e54e8",
".git/objects/fd/f0c6bd0029a5a0f7b19b32b5f7b11713eff642": "388b3bbb48988446e241c927db2cd922",
".git/refs/heads/master": "27747e2350b007f516e3a0e5813d5cdf",
".git/refs/remotes/origin/master": "27747e2350b007f516e3a0e5813d5cdf",
".idea/workspace.xml": "096a712c70e3c3612649ed97d6568ef3",
"assets/AssetManifest.bin": "3d9ef86e8bee974e49b51ebf6ca6a577",
"assets/AssetManifest.bin.json": "5dc6b17d2dbfd78510048124bca9631a",
"assets/AssetManifest.json": "420ae6a7766a6c7767ac693d19a16506",
"assets/assets/fonts/Cairo-Bold.ttf": "ad486798eb3ea4fda12b90464dd0cfcd",
"assets/assets/fonts/Cairo-Light.ttf": "c4a2ada0dd57e03f921b8f7d45820268",
"assets/assets/fonts/Cairo-Medium.ttf": "2b76c14c6934874d64ab85d92c4949e1",
"assets/assets/fonts/Cairo-Regular.ttf": "5ccd08939f634db387c40d6b4b0979c3",
"assets/assets/fonts/Cairo-SemiBold.ttf": "e11b6bc7a07669209243fce5de153be4",
"assets/assets/icons/empty.png": "517e54ec0307ceb9b46a09e6594bd0a2",
"assets/assets/icons/logo.png": "6bb27445098a986973555a4dcc697a69",
"assets/assets/icons/logo_splash_android12.png": "8e930174a512e82972fc82a6e981b401",
"assets/assets/icons/logo_splash_android12_dark.png": "291ab86acbcfc623c3a8c36ec9d01b63",
"assets/assets/icons/profile.png": "c4cd8f8dd5dd68bc2d125fb198b10eb8",
"assets/assets/test/pizza.png": "af1bfa9990a8874e44a80e1aa50eeb84",
"assets/assets/test/ring.mp3": "b079fd5f93760d8f99b5138c72da358d",
"assets/assets/translations/ar.json": "6072fe9d43478711a540cb713241138f",
"assets/assets/translations/en.json": "381e02801b16824e9771540a9b551fed",
"assets/FontManifest.json": "145f013e3bbe4def196f5f07bd91820c",
"assets/fonts/MaterialIcons-Regular.otf": "4b59e3a5292bc25f6b4bf67812301042",
"assets/NOTICES": "d1c8f5981b09c2efd311c3a12fedecc3",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/window_manager/images/ic_chrome_close.png": "75f4b8ab3608a05461a31fc18d6b47c2",
"assets/packages/window_manager/images/ic_chrome_maximize.png": "af7499d7657c8b69d23b85156b60298c",
"assets/packages/window_manager/images/ic_chrome_minimize.png": "4282cd84cb36edf2efb950ad9269ca62",
"assets/packages/window_manager/images/ic_chrome_unmaximize.png": "4a90c1909cb74e8f0d35794e2f61d8bf",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "94d1a725f62075eb5ead9ff4dd64d7fe",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "bf74791d08cfbff7b7230cbef705e282",
"icons/Icon-512.png": "837bde29078e62065c484e2b2cc32f00",
"icons/Icon-maskable-192.png": "bf74791d08cfbff7b7230cbef705e282",
"icons/Icon-maskable-512.png": "837bde29078e62065c484e2b2cc32f00",
"index.html": "b4dda49dc24555d95ca9d636a2b3dda9",
"/": "b4dda49dc24555d95ca9d636a2b3dda9",
"main.dart.js": "cdb73ff9689afc222c8533cf61c7b4a2",
"manifest.json": "4b518a9f0c836cf6fbd19a8d675d505c",
"splash/img/dark-1x.png": "af1da74adc4ff32252b10017f86a8fdd",
"splash/img/dark-2x.png": "12d6b7c8056a7d507f3871478bae3ca3",
"splash/img/dark-3x.png": "0598449bf61f15ab8fb7aed6cacbc04a",
"splash/img/dark-4x.png": "fb795aea2c9191985eae428e15b2d55c",
"splash/img/light-1x.png": "af1da74adc4ff32252b10017f86a8fdd",
"splash/img/light-2x.png": "12d6b7c8056a7d507f3871478bae3ca3",
"splash/img/light-3x.png": "0598449bf61f15ab8fb7aed6cacbc04a",
"splash/img/light-4x.png": "fb795aea2c9191985eae428e15b2d55c",
"version.json": "33872125c2f2ba715e174807f6fbf452"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
