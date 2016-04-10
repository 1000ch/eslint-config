'use strict';

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  rules: {
    // ++++++++++++++++++++
    // Possible Errors
    // ++++++++++++++++++++
    'comma-dangle'             : 'error', // Disallow or Enforce Dangling Commas
    'no-cond-assign'           : 'error', // Disallow Assignment in Conditional Statements
    'no-console'               : 'error', // Disallow Use of console
    'no-constant-condition'    : 'error', // Disallow use of constant expressions in conditions
    'no-control-regex'         : 'error', // Disallow Controls Characters in Regular Expressions
    'no-debugger'              : 'error', // Disallow debugger
    'no-dupe-args'             : 'error', // No duplicate arguments
    'no-dupe-keys'             : 'error', // Disallow Duplicate Keys
    'no-duplicate-case'        : 'error', // Rule to disallow a duplicate case label
    'no-empty'                 : 'error', // Disallow Empty Block Statements
    'no-empty-character-class' : 'error', // Disallow Empty Character Classes
    'no-ex-assign'             : 'error', // Disallow Assignment of the Exception Parameter
    'no-extra-boolean-cast'    : 'error', // Disallow Extra Boolean Casts
    'no-extra-parens'          : 'error', // Disallow Extra Parens
    'no-extra-semi'            : 'error', // Disallow Extra Semicolons
    'no-func-assign'           : 'error', // Disallow Function Assignment
    'no-inner-declarations'    : 'error', // Declarations in Program or Function Body
    'no-invalid-regexp'        : 'error', // Disallow Invalid Regular Expressions
    'no-irregular-whitespace'  : 'error', // No irregular whitespace
    'no-negated-in-lhs'        : 'error', // Disallow negated left operand of in operator
    'no-obj-calls'             : 'error', // Disallow Global Object Function Calls
    'no-regex-spaces'          : 'error', // Disallow Spaces in Regular Expressions
    'no-sparse-arrays'         : 'error', // Disallow Sparse Arrays
    'no-unexpected-multiline'  : 'error', // Avoid unexpected multiline expressions
    'no-unreachable'           : 'error', // Disallow Unreachable Code
    'use-isnan'                : 'error', // Require isNaN()
    'valid-jsdoc'              : 'error', // Validates JSDoc comments are syntactically correct
    'valid-typeof'             : 'error', // Ensures that the results of typeof are compared against a valid string
    // ++++++++++++++++++++
    // Best Practices
    // ++++++++++++++++++++
    // ++++++++++++++++++++
    // Strict Mode
    // ++++++++++++++++++++
    // ++++++++++++++++++++
    // Variables
    // ++++++++++++++++++++
    // ++++++++++++++++++++
    // Node.js and CommonJS
    // ++++++++++++++++++++
    // ++++++++++++++++++++
    // Stylistic Issues
    // ++++++++++++++++++++
    // ++++++++++++++++++++
    // ECMAScript 6
    // ++++++++++++++++++++
    // ++++++++++++++++++++
    // Removed
    // ++++++++++++++++++++
  }
};
