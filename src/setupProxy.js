const proxy = require('http-proxy-middleware').createProxyMiddleware
    
module.exports = function(app) {
    app.use(proxy('/auth/google', { target: 'http://localhost:4000/' }))
    app.use(proxy('/auth/fb', { target: 'http://localhost:4000/' }))
    app.use(proxy('/api/*', { target: 'http://localhost:4000/' }))
    app.use(proxy('/api/*/*', { target: 'http://localhost:4000/' }))
}