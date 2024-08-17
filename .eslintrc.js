const config = {
    parser: 'babel-eslint',
    extends: ['@magento'],
    rules: {
        'no-undef': 'off',
        'no-useless-escape': 'off',
        'quotes': [2, 'single', { 'avoidEscape': true }],
        'semi': [1, 'always']
    }
};

module.exports = config;
