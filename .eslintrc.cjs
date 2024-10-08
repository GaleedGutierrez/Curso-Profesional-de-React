/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line unused-imports/no-unused-vars, no-unused-vars
const TESTING_FILES = ['*.test.ts', '*.spec.ts', '*.spec.tsx', '*.e2e.ts', '*.test.js', '*.spec.js', '*.e2e.js'];
const TS_FILES = ['*.ts', '*.mts', '*.cts'];
const TS_FILES_REACT = [...TS_FILES, '*.tsx'];
const JS_FILES = ['*.js', '*.mjs', '*.cjs'];
const JS_FILES_REACT = [...JS_FILES, '*.jsx'];

module.exports = {
	root: true,
	env: {
		es2020: true,
		browser: true,
		amd: true,
		node: true,

		// Testing
		// 'jest/globals': true,
		// 'cypress/globals': true,
		// mocha: true,
	},
	extends: ['eslint:recommended', 'plugin:import/recommended', 'plugin:editorconfig/noconflict', 'plugin:prettier/recommended'],
	overrides: [
		// TypeScript
		{
			files: TS_FILES_REACT,
			extends: ['plugin:@typescript-eslint/recommended', 'plugin:@typescript-eslint/recommended-type-checked', 'plugin:@typescript-eslint/stylistic-type-checked', 'plugin:import/typescript'],
			plugins: ['@typescript-eslint', 'eslint-plugin-tsdoc'],
			// parserOptions: {
			// 	project: [
			// 		'./tsconfig.app.json',
			// 		'./tsconfig.node.json',
			// 		'./tsconfig.json',
			// 	],
			// },
			rules: {
				'tsdoc/syntax': 'warn',
				'@typescript-eslint/explicit-module-boundary-types': 'error',
				'@typescript-eslint/explicit-function-return-type': 'error',
				'@typescript-eslint/no-non-null-assertion': 'error',
				'@typescript-eslint/consistent-type-definitions': 'error',
				'@typescript-eslint/no-unnecessary-condition': 'error',
				'@typescript-eslint/no-useless-constructor': 'error',
				'@typescript-eslint/prefer-readonly': 'error',
				'@typescript-eslint/switch-exhaustiveness-check': 'error',
				'@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
				'@typescript-eslint/promise-function-async': ['error', { checkArrowFunctions: false }],
				'@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
				'@typescript-eslint/naming-convention': [
					'error',
					{
						selector: 'class',
						format: ['PascalCase'],
					},
					{
						selector: 'variable',
						types: ['boolean'],
						format: ['PascalCase'],
						prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
					},
					{
						selector: 'function',
						format: ['camelCase', 'PascalCase'],
					},
					{
						selector: 'typeLike',
						format: ['PascalCase'],
					},
				],
				'unused-imports/no-unused-vars': 'off',
				'@typescript-eslint/no-unused-vars': [
					'error',
					{
						args: 'all',
						argsIgnorePattern: '^_',
						caughtErrors: 'all',
						caughtErrorsIgnorePattern: '^_',
						destructuredArrayIgnorePattern: '^_',
						varsIgnorePattern: '^_',
						ignoreRestSiblings: true,
					},
				],
				'@typescript-eslint/member-ordering': [
					'error',
					{
						default: [
							// Index signature for interfaces
							'signature',
							'call-signature',

							// Fields o variables
							'public-instance-field',
							'protected-instance-field',
							'private-instance-field',
							'#private-instance-field',

							'public-static-field',
							'protected-static-field',
							'private-static-field',
							'#private-static-field',

							'public-decorated-field',
							'protected-decorated-field',
							'private-decorated-field',

							'public-abstract-field',
							'protected-abstract-field',

							'public-field',
							'protected-field',
							'private-field',
							'#private-field',

							'instance-field',
							'static-field',
							'decorated-field',
							'abstract-field',

							'field',

							// Static initialization
							'static-initialization',

							// Constructors
							'public-constructor',
							'protected-constructor',
							'private-constructor',

							'constructor',

							// Methods
							'public-instance-method',
							'protected-instance-method',
							'private-instance-method',
							'#private-instance-method',

							'public-static-method',
							'protected-static-method',
							'private-static-method',
							'#private-static-method',

							'public-decorated-method',
							'protected-decorated-method',
							'private-decorated-method',

							'public-abstract-method',
							'protected-abstract-method',

							'public-method',
							'protected-method',
							'private-method',
							'#private-method',

							'instance-method',
							'static-method',
							'decorated-method',
							'abstract-method',

							'method',

							// Getters
							'public-instance-get',
							'protected-instance-get',
							'private-instance-get',
							'#private-instance-get',

							'public-static-get',
							'protected-static-get',
							'private-static-get',
							'#private-static-get',

							'public-decorated-get',
							'protected-decorated-get',
							'private-decorated-get',

							'public-abstract-get',
							'protected-abstract-get',

							'public-get',
							'protected-get',
							'private-get',
							'#private-get',

							'instance-get',
							'static-get',
							'decorated-get',
							'abstract-get',

							'get',

							// Setters
							'public-instance-set',
							'protected-instance-set',
							'private-instance-set',
							'#private-instance-set',

							'public-static-set',
							'protected-static-set',
							'private-static-set',
							'#private-static-set',

							'public-decorated-set',
							'protected-decorated-set',
							'private-decorated-set',

							'public-abstract-set',
							'protected-abstract-set',

							'public-set',
							'protected-set',
							'private-set',
							'#private-set',

							'instance-set',
							'static-set',
							'decorated-set',
							'abstract-set',

							'set',
						],
					},
				],
			},
			settings: {
				'import/resolver': {
					typescript: {
						project: './tsconfig.json',
					},
				},
			},
		},
		{
			files: ['*.tsx'],
			rules: {
				'@typescript-eslint/no-misused-promises': [
					'error',
					{
						checksVoidReturn: {
							attributes: false,
						},
					},
				],
			},
		},

		// React
		{
			files: ['*.tsx', '*.jsx'],
			extends: ['plugin:jsx-a11y/strict', 'plugin:react-hooks/recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime'],
			plugins: ['jsx-a11y', 'react', 'react-refresh'],
			rules: {
				'react/boolean-prop-naming': [
					'error',
					{
						rule: '^(is|has|can|should|did|will)[A-Z]([A-Za-z0-9]*)$',
						message: "'{{ propName }}' must start with 'is', 'has', or 'can'. For example: `isEnabled`.",
						validateNested: true,
					},
				],
				'react/button-has-type': [
					'error',
					{
						button: true,
						submit: true,
						reset: false,
					},
				],
				'react/default-props-match-prop-types': ['error', { allowRequiredDefaults: false }],
				'react/destructuring-assignment': ['error', 'always'],
				'react/forbid-foreign-prop-types': ['warn', { allowInPropTypes: true }],
				'react/forbid-prop-types': [
					'error',
					{
						forbid: ['any', 'array', 'object'],
						checkContextTypes: true,
						checkChildContextTypes: true,
					},
				],
				'react/function-component-definition': ['error', { namedComponents: ['function-declaration', 'arrow-function'], unnamedComponents: 'arrow-function' }],
				'react/hook-use-state': ['error', { allowDestructuredState: true }],
				'react/iframe-missing-sandbox': 'error',
				'react/jsx-boolean-value': ['error', 'never'],
				'@stylistic/jsx-closing-bracket-location': ['error', 'line-aligned'],
				'@stylistic/jsx-closing-tag-location': 'error',
				'@stylistic/jsx-curly-brace-presence': [
					'error',
					{
						props: 'never',
						children: 'never',
						propElementValues: 'always',
					},
				],
				'@stylistic/jsx-curly-newline': [
					'error',
					{
						multiline: 'consistent',
						singleline: 'consistent',
					},
				],
				'@stylistic/jsx-curly-spacing': ['error', 'never', { allowMultiline: true }],
				'@stylistic/jsx-equals-spacing': ['error', 'never'],
				'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
				'@stylistic/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
				'react/jsx-fragments': 'error',
				'react/jsx-handler-names': [
					'error',
					{
						checkLocalVariables: true,
					},
				],
				'@stylistic/jsx-indent-props': ['error', 'tab'],
				'@stylistic/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
				'react/jsx-no-bind': [
					'error',
					{
						ignoreRefs: true,
						allowArrowFunctions: true,
						allowFunctions: true,
						allowBind: false,
						ignoreDOMComponents: true,
					},
				], // Puesto a prueba
				'react/jsx-no-constructed-context-values': 'error',
				'react/jsx-no-script-url': 'error',
				'react/jsx-no-useless-fragment': 'error',
				'@stylistic/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
				'@stylistic/jsx-pascal-case': [
					'error',
					{
						allowAllCaps: true,
					},
				],
				'@stylistic/jsx-props-no-multi-spaces': 'error',
				'@stylistic/jsx-tag-spacing': [
					'error',
					{
						beforeSelfClosing: 'always',
					},
				],
				'@stylistic/jsx-wrap-multilines': [
					'error',
					{
						declaration: 'parens-new-line',
						assignment: 'parens-new-line',
						return: 'parens-new-line',
						arrow: 'parens-new-line',
						condition: 'parens-new-line',
						logical: 'parens-new-line',
						prop: 'parens-new-line',
					},
				],
				'react/no-access-state-in-setstate': 'error',
				'react/no-array-index-key': 'error',
				'react/no-arrow-function-lifecycle': 'error',
				'react/no-danger': 'warn',
				'react/no-did-update-set-state': 'error',
				'react/no-invalid-html-attribute': 'error',
				'react/no-namespace': 'error',
				'react/no-redundant-should-component-update': 'error',
				'react/no-this-in-sfc': 'error',
				'react/no-typos': 'error',
				'react/no-unstable-nested-components': 'error',
				'react/no-unused-class-component-methods': 'error',
				'react/no-unused-prop-types': 'error',
				'react/no-unused-state': 'error',
				'react/no-will-update-set-state': 'error',
				'react/prefer-es6-class': ['error', 'always'],
				'react/prefer-exact-props': 'error',
				'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
				'react/require-default-props': [
					'error',
					{
						forbidDefaultForRequired: true,
					},
				],
				'@stylistic/jsx-self-closing-comp': 'error',
				'react/sort-comp': [
					'error',
					{
						order: ['static-variables', 'static-methods', 'instance-variables', 'lifecycle', '/^handle.+$/', '/^on.+$/', 'getters', 'setters', '/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/', 'instance-methods', 'everything-else', 'rendering'],
						groups: {
							lifecycle: ['displayName', 'propTypes', 'contextTypes', 'childContextTypes', 'mixins', 'statics', 'defaultProps', 'constructor', 'getDefaultProps', 'getInitialState', 'state', 'getChildContext', 'getDerivedStateFromProps', 'componentWillMount', 'UNSAFE_componentWillMount', 'componentDidMount', 'componentWillReceiveProps', 'UNSAFE_componentWillReceiveProps', 'shouldComponentUpdate', 'componentWillUpdate', 'UNSAFE_componentWillUpdate', 'getSnapshotBeforeUpdate', 'componentDidUpdate', 'componentDidCatch', 'componentWillUnmount'],
							rendering: ['/^render.+$/', 'render'],
						},
					},
				],
				'react/state-in-constructor': ['error', 'always'],
				'react/static-property-placement': ['error', 'property assignment'],
				'react/style-prop-object': 'error',
				'react/void-dom-elements-no-children': 'error',
				'@stylistic/jsx-sort-props': [
					'warn',
					{
						callbacksLast: true,
						shorthandFirst: true,
						reservedFirst: true,
						multiline: 'last',
					},
				],

				'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
				'react/jsx-props-no-spread-multi': 'error',
			},
		},

		// JSDoc
		{
			files: JS_FILES_REACT,
			extends: ['plugin:jsdoc/recommended'],
			plugins: ['jsdoc', 'sort-class-members'],
			rules: {
				'sort-class-members/sort-class-members': [
					'error',
					{
						order: ['[properties]', '[conventional-private-properties]', '[static-properties]', 'constructor', '[methods]', '[conventional-private-methods]', '[static-methods]'],
						accessorPairPositioning: 'getThenSet',
					},
				],
			},
		},

		// HTML
		// {
		// 	plugins: ['@html-eslint'],
		// 	files: ['*.html'],
		// 	parser: '@html-eslint/parser',
		// 	extends: ['plugin:@html-eslint/recommended'],
		// 	rules: {
		// 		'@html-eslint/indent': ['error', 'tab'],
		// 		'@html-eslint/no-extra-spacing-attrs': [
		// 			'error',
		// 			{ enforceBeforeSelfClose: true },
		// 		],
		// 		'@html-eslint/require-closing-tags': [
		// 			'error',
		// 			{ selfClosing: 'always' },
		// 		],

		// 		// Best Practice
		// 		'@html-eslint/require-meta-charset': 'error',
		// 		'@html-eslint/require-button-type': 'error',

		// 		// Accessibility
		// 		'@html-eslint/no-abstract-roles': 'error',
		// 		'@html-eslint/no-accesskey-attrs': 'error',
		// 		'@html-eslint/no-aria-hidden-body': 'error',
		// 		'@html-eslint/no-non-scalable-viewport': 'error',
		// 		'@html-eslint/no-positive-tabindex': 'error',
		// 		'@html-eslint/require-frame-title': 'error',
		// 		'@html-eslint/require-meta-viewport': 'error',

		// 		// SEO
		// 		'@html-eslint/require-meta-description': 'error',
		// 		'@html-eslint/require-open-graph-protocol': 'error',

		// 		// Styles
		// 	},
		// },
		// Testing: Jest - Testing Library
		// {
		// 	files: TESTING_FILES,
		// 	extends: [
		// 		'plugin:jest/recommended',
		// 		'plugin:jest/style',
		// 		'plugin:jest-dom/recommended',
		// 		'plugin:jest-formatting/recommended',

		// 		// 'plugin:testing-library/dom',
		// 	],
		// 	plugins: [
		// 		'jest',
		// 		'jest-dom',
		// 		'jest-formatting' /*, 'testing-library'*/,
		// 	],
		// 	rules: {
		// 		'@typescript-eslint/unbound-method': 'off',
		// 		'jest/unbound-method': 'error',
		// 	},
		// },

		// Testing: Playwright
		// {
		// 	files: ['*.spec.ts', '*.spec.tsx'],
		// 	extends: ['plugin:playwright/recommended'],
		// 	rules: {
		// 		'playwright/prefer-equality-matcher': 'error',
		// 		'playwright/prefer-comparison-matcher': 'error',
		// 		'playwright/prefer-hooks-in-order': 'error',
		// 		'playwright/prefer-hooks-on-top': 'error',
		// 		'playwright/no-page-pause': 'error',
		// 	},
		// },

		// Testing: Cypress
		// {
		// 	files: ['*.cy.ts', '*.cy.js'],
		// 	extends: [
		// 		'plugin:cypress/recommended',
		// 		'plugin:chai-expect/recommended',
		// 		'plugin:mocha/recommended',
		// 	],
		// 	plugins: ['cypress', 'chai-expect', 'mocha'],
		// 	rules: {
		// 		'@typescript-eslint/unbound-method': 'off',
		// 		'prefer-arrow-callback': 'off',
		// 		'mocha/prefer-arrow-callback': 'error',
		// 	},
		// },

		// JSON
		{
			files: ['*.json'],
			extends: ['plugin:jsonc/recommended-with-jsonc', 'plugin:jsonc/prettier'],
		},
	],
	parserOptions: {
		parser: '@typescript-eslint/parser',
		ecmaVersion: 'latest',
		sourceType: 'module',
		ecmaFeatures: {
			jsx: true,
		},
		project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
	},
	settings: {
		react: {
			pragma: 'React',
			version: 'detect',
		},
	},
	plugins: ['import', 'simple-import-sort', 'unused-imports', 'check-file', 'editorconfig', '@stylistic'],
	rules: {
		'prettier/prettier': 'error',

		// Error prevention
		'array-callback-return': ['error', { checkForEach: true }],
		'no-await-in-loop': 'error',
		'no-constant-binary-expression': 'error',
		'no-constructor-return': 'error',
		'no-promise-executor-return': 'error',
		'no-self-compare': 'error',
		'no-template-curly-in-string': 'error',
		'no-unmodified-loop-condition': 'error',
		'no-unreachable-loop': 'error',
		'no-unused-private-class-members': 'error',
		'no-use-before-define': [
			'error',
			{
				functions: false,
				classes: true,
				variables: true,
				allowNamedExports: false,
			},
		],
		'require-atomic-updates': 'error',
		'no-lone-blocks': 'error',
		'no-underscore-dangle': 'error', // Opcional

		// Good practices
		camelcase: 'error',
		eqeqeq: 'error',
		'new-cap': 'error',
		'no-array-constructor': 'error',
		'no-console': ['error', { allow: ['error'] }],
		'no-else-return': ['error', { allowElseIf: false }],
		'no-extend-native': 'error',
		'no-lonely-if': 'error',
		'no-param-reassign': 'error',
		'no-return-assign': 'error',
		'no-throw-literal': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-const': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		radix: 'error',
		yoda: 'error',
		'no-unneeded-ternary': 'error',
		'prefer-arrow-callback': 'error', // Opcional
		'no-nested-ternary': 'error',
		'max-depth': ['error', 5],

		// Styles
		'no-implicit-coercion': 'error',
		'arrow-body-style': ['error', 'as-needed'],
		curly: 'error',
		'@stylistic/lines-between-class-members': [
			'error',
			{
				enforce: [
					{ blankLine: 'always', prev: 'field', next: '*' },
					{ blankLine: 'always', prev: '*', next: 'field' },
					{ blankLine: 'never', prev: 'field', next: 'field' },
					{ blankLine: 'always', prev: '*', next: 'method' },
					{ blankLine: 'always', prev: 'method', next: '*' },
				],
			},
			{ exceptAfterSingleLine: true },
		],
		'@stylistic/padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: ['directive', 'import', 'cjs-import', 'export', 'cjs-export', 'const', 'let', 'var', 'class', 'block', 'block-like', 'multiline-block-like', 'function', 'iife', 'expression', 'case', 'default', 'interface', 'type'],
				next: '*',
			},
			{
				blankLine: 'always',
				prev: '*',
				next: ['import', 'cjs-import', 'export', 'cjs-export', 'const', 'let', 'var', 'class', 'block', 'block-like', 'multiline-block-like', 'function', 'iife', 'expression', 'return', 'interface', 'type'],
			},
			{
				blankLine: 'always',
				prev: 'function',
				next: 'function-overload',
			},
			{
				blankLine: 'any',
				prev: ['const', 'let', 'var'],
				next: ['const', 'let', 'var'],
			},
			{ blankLine: 'any', prev: 'directive', next: 'directive' },
			{ blankLine: 'any', prev: 'import', next: 'import' },
			{ blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },
			{ blankLine: 'any', prev: 'export', next: 'export' },
			{ blankLine: 'any', prev: 'cjs-export', next: 'cjs-export' },
			{ blankLine: 'any', prev: 'expression', next: 'expression' },
			{
				blankLine: 'never',
				prev: ['singleline-const', 'singleline-let', 'singleline-var'],
				next: ['singleline-const', 'singleline-let', 'singleline-var'],
			},
			{
				blankLine: 'never',
				prev: 'function-overload',
				next: 'function',
			},
			{
				blankLine: 'never',
				prev: 'function-overload',
				next: 'function-overload',
			},
		],

		//? CodelyTV
		'check-file/folder-naming-convention': [
			'error',
			{
				'./src/*/': 'KEBAB_CASE',
				'./src/components/*/': 'PASCAL_CASE',
				'./src/components/*/components/**': 'PASCAL_CASE',
				'./cypress/**/': 'KEBAB_CASE',
				'./puppeteer/**/': 'KEBAB_CASE',
				'./playwright/**/': 'KEBAB_CASE',
				'./test/**/': 'KEBAB_CASE',
				'./tests/**/': 'KEBAB_CASE',
			},
		],

		// Plugins
		'import/first': 'error',
		'import/newline-after-import': 'error',
		'import/no-duplicates': 'error',
		'import/no-unresolved': 'error',
		'import/no-webpack-loader-syntax': 'error',
		'simple-import-sort/exports': 'error',
		'simple-import-sort/imports': 'error',
		'unused-imports/no-unused-imports': 'error',
		'no-unused-vars': 'off',
		'unused-imports/no-unused-vars': [
			'warn',
			{
				vars: 'all',
				varsIgnorePattern: '^_',
				args: 'after-used',
				argsIgnorePattern: '^_',
			},
		],
	},
};
