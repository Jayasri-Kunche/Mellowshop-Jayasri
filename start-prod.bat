@echo off
echo Building and starting Mellow Shop E-Commerce Frontend in production mode...
cd /d %~dp0
npm run build && npm start