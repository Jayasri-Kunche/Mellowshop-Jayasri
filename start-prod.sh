#!/bin/bash
echo "Building and starting Mellow Shop E-Commerce Frontend in production mode..."
cd "$(dirname "$0")"
npm run build && npm start