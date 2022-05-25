const { defineConfig } = require('@vue/cli-service')
import Env from '@/common/constants/Env.json'
module.exports = {
    baseName: Env.PROJECT_NAME,
    touchIconUrl:Env.TOUCH_ICON_PATH,
    devServer:{
        port:9001,
        proxy:{
            '/api':{
                target:'http://newkayak.iptime.org:1247/',
                changeOrigin:true
            },
            '/admin':{
                target:'http://newkayak.iptime.org:1247/',
                changeOrigin:true
            }
        }
    }
}