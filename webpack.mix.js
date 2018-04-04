let mix = require('laravel-mix');

mix.setPublicPath('public');

mix.sass('src/sass/styles.scss', 'public/css')
  .js('src/js/main.js', 'public/js')
  .copy('src/index.html', 'public/index.html')
  .copy('src/slides', 'public/slides');


mix.browserSync({"serveStatic":["./public"],"files":["./public"]});