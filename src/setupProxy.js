const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // This is the API endpoint you want to proxy to the backend. All requests to /api will be proxied.
    createProxyMiddleware({
      target: 'http://localhost:8888', // Your backend server address
      changeOrigin: true
    })
  );
  // You can add additional proxies here
};
