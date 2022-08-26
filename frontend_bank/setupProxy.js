const { createProxyMiddleware } = require('http-proxy-middleware');

const bank_api = {
  target: 'http://127.0.0.1:7000',
  changeOrigin: true,
};

module.exports = function (app) {
  app.use('/bankapi/*', createProxyMiddleware(bank_api));
};
