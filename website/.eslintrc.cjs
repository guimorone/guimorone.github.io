module.exports = {
	env: { browser: true, es2020: true, amd: true, node: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:react-hooks/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	plugins: ['react-refresh', 'prettier'],
	rules: {
		'no-mixed-spaces-and-tabs': 0,
		'react-refresh/only-export-components': 'warn',
		'@typescript-eslint/ban-ts-comment': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
		'prettier/prettier': [
			'warn',
			{
				trailingComma: 'es5',
				arrowParens: 'avoid',
				bracketSpacing: true,
				endOfLine: 'lf',
				htmlWhitespaceSensitivity: 'css',
				insertPragma: false,
				singleAttributePerLine: false,
				bracketSameLine: false,
				jsxBracketSameLine: false,
				jsxSingleQuote: false,
				printWidth: 115,
				proseWrap: 'preserve',
				quoteProps: 'as-needed',
				requirePragma: false,
				semi: true,
				singleQuote: true,
				tabWidth: 2,
				useTabs: true,
				plugins: ['@ianvs/prettier-plugin-sort-imports'],
				importOrder: [
					'^react$',
					'<BUILTIN_MODULES>',
					'<THIRD_PARTY_MODULES>',
					'^[.]',
          '<TYPES>^react$',
					'<TYPES>^(node:)',
					'<TYPES>',
					'<TYPES>^[.]',
          '<TYPES>^[@]',
				],
				importOrderCaseSensitive: true,
			},
		],
	},
};
