import {createProxyMiddleware} from 'http-proxy-middleware'

module.exports = app =>{
    app.use(
        createProxyMiddleware("admin/login",
        {
            target: "https://vaccine-passport-app-backend.vercel.app",
            changeOrigin:true
        }
        )
    )
}