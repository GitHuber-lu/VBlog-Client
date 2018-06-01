module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'vblog',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt.js project' },
        ],
        script: [
            { src: '/ueditor/ueditor.config.js', type: 'text/javascript', charset: 'utf-8' },
            { src: '/ueditor/ueditor.all.min.js', type: 'text/javascript', charset: 'utf-8' },
            { src: '/ueditor/lang/zh-cn/zh-cn.js', type: 'text/javascript', charset: 'utf-8' },
            { src: '/ueditor/ueditor.parse.min.js', type: 'text/javascript', charset: 'utf-8' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },
    plugins: [
        { src: '~plugins/axios', ssr: true },
        { src: '~plugins/http', ssr: true },
        { src: '~plugins/muse-ui', ssr: true },
    ],
    css: [
        'assets/css/common.css',
        'muse-ui/dist/muse-ui.css',
        'static/iconfont/material-icons.css',
        'assets/css/muse-ui-reset.css'
    ],
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /*
     ** Build configuration
     */
    build: {
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/,
                });
            }
        },
        vendor: ['axios', 'muse-ui']
    }
}