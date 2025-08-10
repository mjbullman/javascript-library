/**
 * Prettier config settings.
 *
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    semi: false,           // Never use semicolons
    tabWidth: 4,           // 4 spaces for indentation
    printWidth: 100,       // Wrap lines at 100 characters
    singleQuote: true,     // Use ' instead of "
    arrowParens: 'always', // Always include parentheses around arrow function params
    trailingComma: 'es5',  // Commas where valid in ES5 (objects, arrays, etc.)
    bracketSpacing: true,  // Add spaces inside { }
}

export default config
