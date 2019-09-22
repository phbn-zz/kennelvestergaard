const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/phbr/kennelvestergaard/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/phbr/kennelvestergaard/src/pages/404.js"))),
  "component---src-pages-dog-development-js": hot(preferDefault(require("/home/phbr/kennelvestergaard/src/pages/DogDevelopment.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/phbr/kennelvestergaard/src/pages/index.js"))),
  "component---src-pages-nana-galleri-js": hot(preferDefault(require("/home/phbr/kennelvestergaard/src/pages/NanaGalleri.js"))),
  "component---src-pages-prius-js": hot(preferDefault(require("/home/phbr/kennelvestergaard/src/pages/Prius.js")))
}

