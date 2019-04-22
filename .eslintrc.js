module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    //"plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 2017,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    //"react"
  ],
  "rules": {
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "quotes": [
      "error",
      "single"
    ],
    "semi": [
      "warn",
      "always"
    ],
    //user quotes on jsx <a b=""/>
    "jsx-quotes": [
      "error",
      "prefer-double"
    ],
    //use === and !==
    "eqeqeq": [
      "error",
      "smart"
    ],
    "init-declarations": [
      "error",
      "always"
    ],
    "curly": "error",
    "default-case": "error",
    "no-else-return": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eval": "error",
    "no-floating-decimal": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-new": "error",
    "no-param-reassign": "error",
    "no-redeclare": "error",
    "no-return-assign": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-throw-literal": "error",
    "no-undef-init": "error",
    //ES6
    "arrow-spacing": "error",
    "constructor-super": "error",
    "no-class-assign": "error",
    "no-const-assign": "error",
    "no-dupe-class-members": "error",
    "no-duplicate-imports": "error",
    "no-this-before-super": "error",
    "no-var": "error",
    "prefer-const": "error",
    "prefer-destructuring": [
      "error",
      {
        "array": true,
        "object": true
      },
      {
        "enforceForRenamedProperties": false
      }
    ],
    "prefer-template": "error",
    //"sort-imports": "error",
    "no-console": 0,
    "no-debugger": 0
  }
}
