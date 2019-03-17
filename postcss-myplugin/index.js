const postcss = require('postcss');
module.exports = postcss.plugin('myplugin', options => {
	return css => {
		options = options || {};
		
		css.walkRules(rule => {
			rule.walkDecls((decl, index) => {
				console.log(`セレクタ${rule.selector}の${index}番目のプロパティは${decl.prop}で、値は${decl.value}`);
			});
		});
	}
});