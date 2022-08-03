const mix = require("laravel-mix");
require("laravel-mix-purgecss");
mix.options({
    postCss: [require("autoprefixer")],
})
    .setPublicPath("public")
    .webpackConfig({
        resolve: {
            extensions: [".js", ".jsx"],
            alias: {
                "@": __dirname + "resources",
            },
        },
        output: {
            chunkFilename: "js/chunks/[name].js",
        },
    })
    .react()
    .js("resources/js/app.js", "public/js/app.js")
    .version()
    .sass("resources/css/app.scss", "public/css/app.css").version()
    .copy("resources/frontend/public", "public")
    .setResourceRoot("../")
    .browserSync("127.0.0.1:8000");
    