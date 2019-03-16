const postcss = require('postcss')
const fs = require('fs')

const style = fs.readFileSync('style.css', {encoding: "utf-8"});

const root = postcss.parse(style)
console.log(root);