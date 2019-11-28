const mix = require('laravel-mix');


mix.setPublicPath('public')

// vendor js
mix.js(['resources/js/bootstrap.js'], 'public/js/vendor.min.js')

// vendor css
mix.styles([
	'node_modules/bootstrap/dist/css/bootstrap.css',
	'node_modules/owl.carousel/dist/assets/owl.carousel.css'
],
	'public/css/vendor.min.css'
)

// js
mix.combine(
	[
		'resources/js/app.js'
	],
	'public/js/app.min.js'
)
// css
mix.sass('resources/scss/app.scss', 'public/css/app.min.css')

// copy assets
mix.copyDirectory('resources/fonts', 'public/fonts');
mix.copyDirectory('resources/images', 'public/images');
mix.copyDirectory('resources/css', 'public/css');