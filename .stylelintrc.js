module.exports = {
  // 需要下载stylelint-config-standard
  extends: ['stylelint-config-standard'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['extends', 'tailwind'],
      },
    ],
    'no-descending-specificity': null, // 允许使用低优先级的选择器覆盖高优先级的选择器
    'declaration-colon-space-after': null, // 允许在冒号后使用空格
    'no-eol-whitespace': null, // 允许使用行尾空白
    'selector-pseudo-class-no-unknown': null, // 允许使用未知的伪类选择器
    'selector-class-pattern': null,
    'font-family-no-missing-generic-family-keyword': null, // 允许使用不带引号的中文
    'rule-empty-line-before': null, // 允许规则前空行
    'string-quotes': 'single', // 字符串使用单引号
  },
  ignoreFiles: ['node_modules/**/*.(css|less)', 'dist/**/*.(css|less)'],
};
