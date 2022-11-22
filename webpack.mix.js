const mix = require("laravel-mix");
const CompressionPlugin = require("compression-webpack-plugin");
require("laravel-mix-purgecss");
require("laravel-mix-compress");

mix.options({
    postCss: [require("autoprefixer")],
    processCssUrls: true,
    terser: {},
    purifyCss: false,
    clearConsole: false,
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
    .sass("resources/css/app.scss", "public/css/app.css")
    .version()
    // .purgeCss({
    //     safelist: [/row*/, /btn*/, /col*/],
    // })
    .copy("resources/frontend/public", "public").compress()
    .setResourceRoot("../")
    .browserSync("127.0.0.1:8000");

mix.webpackConfig({
    plugins: [
        new CompressionPlugin({
            filename: "[path].br[query]",
            algorithm: "brotliCompress",
            test: /\.(js|css|html|svg)$/,
            compressionOptions: { level: 11 },
            minRatio: 1,
            deleteOriginalAssets: false,
        }),
    ],
});
