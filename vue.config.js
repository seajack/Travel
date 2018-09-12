module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'styles': '@/assets/styles',
                'views': '@/views',
            }
        }
    },
}