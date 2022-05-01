const { defineConfig } = require('@vue/cli-service')
module.exports = {
    devServer:{

        port:9001,
        proxy:{
            // '/api':{
            //     target:'',
            //     changeOrigin:true
            // },
        }
    }
}