// eslint-disable-next-line no-undef
module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [ "error", 4 ],
        "react/jsx-no-duplicate-props": "warn",
        "react/no-unused-prop-types": "warn",
        "react/prop-types": "warn",
        "react/require-default-props": "warn",
        "react/jsx-tag-spacing": "warn",
        "react/jsx-curly-spacing": "warn",
        "react/jsx-max-props-per-line": "warn",
        "react/jsx-closing-bracket-location": "warn",
        "react/jsx-wrap-multilines": "warn",
        "react/jsx-indent": [ "error", 4 ],
        "react/jsx-indent-props": [ "error", 4 ],
    }
};

