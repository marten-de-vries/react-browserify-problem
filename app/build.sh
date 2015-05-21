#!/bin/bash
cd ../app
npm link ../container
npm install

browserify index.js -o bundle.js
