const mix = require("laravel-mix");

mix.options({
    postCss: [require("autoprefixer")],
});

mix.setPublicPath("public");

mix.webpackConfig({
    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            "@": __dirname + "resources",
        },
    },
    output: {
        chunkFilename: "js/chunks/[name].js",
    },
}).react();

mix.js("resources/js/app.js", "public/js/app.js").version();
mix.copy("resources/frontend/public", "public");
mix.setResourceRoot("../");
mix.browserSync("127.0.0.1:8000");
