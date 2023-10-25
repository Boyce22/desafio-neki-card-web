plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ts',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: { 
          '@components': './src/components',
          '@configs': './src/configs',
          '@pages': './src/pages',
          '@pages': './src/pages',
          '@assets': './src/assets',
          '@routes': './src/routes',
          '@utils': './src/utils',
          '@dto': './src/dto',
          '@services': './src/services',
        },
      },
    ],
  ]