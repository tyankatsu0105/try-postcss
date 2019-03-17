const postcss = require('postcss')
const fs = require('fs')

const style = fs.readFileSync('./tests/style.css', {encoding: "utf-8"});

const root = postcss.parse(style)
const decl = root.first
console.log(decl.toString());