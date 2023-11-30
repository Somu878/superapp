const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://newsapi.org',
    changeOrigin: true,
    pathRewrite: {
        '^/api': '/v2',
      },
    headers: {
      'X-Api-Key': 'd9eeab569a2247de8983f8ac4b16cdbcs',
    },
  })
);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
