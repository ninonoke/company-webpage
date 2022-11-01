module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        config.module.rules.push({
            test: /\.svg$/,
            loader: 'svg-inline-loader',
        })

        return config
    },
    i18n: {
        locales: ['en_GB'],
        defaultLocale: 'en_GB',
    },
    images: {
        domains: ['s3.eu-central-1.amazonaws.com'],
    },
}
