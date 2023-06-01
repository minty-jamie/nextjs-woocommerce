const path = require('path');
let allowedImageWordPressDomain = '';
try {
	allowedImageWordPressDomain = new URL(process.env.NEXT_PUBLIC_WORDPRESS_SITE_URL).hostname;
} catch (error) {
	console.error('Error parsing WordPress site URL:', error);
	// Handle the error gracefully or set a default domain value
	// allowedImageWordPressDomain = 'example.com';
}

module.exports = {
	trailingSlash: false,
	webpack: (config) => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300,
		};
		return config;
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	images: {
		unoptimized: true,
		domains: [allowedImageWordPressDomain, 'via.placeholder.com', 'secure.gravatar.com'],
	},
};
