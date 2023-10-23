/**
 * commitlint 负责用于对commit message 进行格式校验，
 * 检查您的提交信息并确保它们遵循一组规则。
 * 它是一个husky预提交钩子运行,在提交之前运行，如果没有通过校验的话就并阻止提交
 */

// 注意:此规则将约束你在提交时的提交信息格式，如果你的提交信息不符合规则，将会阻止你的提交
// 如 git commit -m "fix: 修复了一个bug" 会被允许
// 如 git commit -m "修复了一个bug" 会被阻止

// build: 影响构建系统或外部依赖项的更改（示例范围：gulp、broccoli、npm）
// ci: 更改我们的 CI 配置文件和脚本（示例范围：Travis、Circle、BrowserStack、SauceLabs）
// docs: 文档修改
// feat: 一个新的功能
// fix: 一个 bug 修复
// perf: 提升性能的代码修改
// refactor: 既不修复错误也不添加功能的代码更改
// style: 不影响代码含义的更改（空格、格式、缺少分号等）
// test: 添加缺失的测试或更正现有测试

module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
        'translation',
        'security',
        'changeset',
      ],
    ],
  },
};
