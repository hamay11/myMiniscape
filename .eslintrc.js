module.exports = {
    root: true,
    env: {
      browser: true,
      node: true
    },
    parserOptions: {
      parser: 'babel-eslint'
    },
    extends: [
      "eslint:recommended", // eslintの推奨ルール
      // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
      // より厳しいルールにするには`plugin:vue/strongly-recommended` もしくは `plugin:vue/recommended` に切り替えることを検討してください。
      'plugin:prettier/recommended',  // 1.eslint-plugin-prettierをenable
                                      // 2.eslint-config-prettierをenable
                                      // 3.prettierの整形に問題がある場合にerrorを出す設定
      'plugin:vue/recommended',       // eslint-plugin-vueを推奨設定でenable
      'prettier/vue',                 // eslint-config-prettierのvue用ルールを適用(2019/1/16修正)
    ],
    // *.vue ファイルを lint にかけるために必要
    plugins: [
      'vue'
    ],
    // ここにカスタムルールを追加します。
    rules: {
      "semi": [2, "always"],
      "quotes": [2, "single"],
      "no-console": "off",
      "vue/max-attributes-per-line": "off",
      "prettier/prettier": ["error", { "semi": false }],
      "comma-dangle": ["error", "always"],
      "prettier/prettier" : {
        "tabWidth": 4,
        "singleQuote": true,
        "printWidth": 120,
        "trailingComma": 'es5',
      }
    }
  }
  