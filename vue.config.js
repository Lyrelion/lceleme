module.exports = {
    // 服务器代理解决跨域问题
    devServer:{
        proxy:{
            '/api':{
                target:"http://localhost:3000",
                pathRewrite:{
                    '^/api':""
                }
            }
        }
    }
}