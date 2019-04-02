module.exports = {
  plugins: [
    require('./postcss-font-px-to-rem')({
      rootPxValue: 10
    }),
    require('./postcss-change-case')(),
  ]
}