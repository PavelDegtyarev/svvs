const nx = require('@nx/eslint-plugin')

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: 'scope:frontend-client',
              onlyDependOnLibsWithTags: ['scope:frontend-client', 'type:lib', 'scope:shared'],
            },
            {
              sourceTag: 'scope:frontend-admin',
              onlyDependOnLibsWithTags: ['scope:frontend-admin', 'type:lib'],
            },
            {
              sourceTag: 'lib-type:feature',
              onlyDependOnLibsWithTags: ['lib-type:data-access', 'lib-type:utils', 'lib-type:feature', 'lib-type:ui'],
            },
            {
              sourceTag: 'lib-type:ui',
              onlyDependOnLibsWithTags: ['lib-type:ui', 'lib-type:utils'],
            },
            {
              sourceTag: 'lib-type:data-access',
              onlyDependOnLibsWithTags: ['lib-type:data-access', 'lib-type:utils'],
            },
            {
              sourceTag: 'lib-type:utils',
              onlyDependOnLibsWithTags: ['lib-type:utils'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
]
