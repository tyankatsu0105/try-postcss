const postcss = require('postcss');
module.exports = postcss.plugin('font-px-to-rem', options => {
	return css => {
		const {rootPxValue} = options || {};
		
		css.walkRules(rule => {
			rule.walkDecls((decl, index) => {
				if(decl.prop === 'font-size'){
					const expect = value => {
						let pxValue = value.match(/\d+/)[0];
						pxValue = pxValue / rootPxValue;
						return `${pxValue}rem`
					}
					decl.value = decl.value.replace(/(\d)+px/, expect)	
				}
			});
		});
	}
});