const postcss = require('postcss');
const changeCase = require('change-case');
module.exports = postcss.plugin('change-case', options => {
	return css => {
		options = options || {};
		
		css.walkRules(rule => {
			rule.walkDecls((decl, index) => {
        const isVenderPrefix = prop => {
          return RegExp('-(ms|o|webkit|moz)-').test(prop)
        }

        if(isVenderPrefix(decl.prop)){
          decl.prop = `'${decl.prop}'`
          decl.value = `'${decl.value}'`
        } else {
          decl.prop = changeCase.camelCase(decl.prop)
          decl.value = `'${decl.value}'`
        }
			});
		});
	}
});