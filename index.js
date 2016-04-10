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
    'callback-return'       : 'error', // Enforce Return After Callback
    'global-require'        : 'off',   // Enforce require() on the top-level module scope
    'handle-callback-err'   : 'off',   // Enforce Callback Error Handling
    'no-mixed-requires'     : 'error', // Disallow Mixed Requires
    'no-new-require'        : 'error', // Disallow new require
    'no-path-concat'        : 'off',   // Disallow string concatenation when using
    'no-process-env'        : 'off',   // Disallow process.env
    'no-process-exit'       : 'off',   // Disallow process.exit()
    'no-restricted-modules' : 'off',   // Disallow Node.js modules
    'no-sync'               : 'off',   // Disallow Synchronous Methods
    // ++++++++++++++++++++
    // Stylistic Issues
    // ++++++++++++++++++++
    // ++++++++++++++++++++
    // ECMAScript 6
    // ++++++++++++++++++++
    'arrow-body-style'       : 'off',   // Require braces in arrow function body
    'arrow-parens'           : 'off',   // Require parens in arrow function arguments
    'arrow-spacing'          : ['error', {
      before : true,
      after  : true
    }],                                 // Require space before/after arrow function’s arrow
    'constructor-super'      : 'off',   // Verify calls of super() in constructors
    'generator-star-spacing' : ['error', {
      before : false,
      after  : true
    }],                                 // Enforce spacing around the * in generator functions
    'no-class-assign'        : 'error', // Disallow modifying variables of class declarations
    'no-confusing-arrow'     : 'off',   // Disallow arrow functions where they could be confused with comparisons
    'no-const-assign'        : 'error', // Disallow modifying variables that are declared using const
    'no-dupe-class-members'  : 'error', // Disallow duplicate name in class members
    'no-duplicate-imports'   : 'error', // Disallow duplicate imports
    'no-new-symbol'          : 'error', // Disallow Symbol Constructor
    'no-restricted-imports'  : 'off',   // Disallow specific imports
    'no-this-before-super'   : 'error', // Disallow use of this/super before calling super() in constructors
    'no-useless-constructor' : 'error', // Disallow unnecessary constructor
    'no-var'                 : 'off',   // require let or const instead of var
    'object-shorthand'       : 'off',   // Require Object Literal Shorthand Syntax
    'prefer-arrow-callback'  : 'off',   // Suggest using arrow functions as callbacks
    'prefer-const'           : 'error', // Suggest using const
    'prefer-reflect'         : 'error', // Suggest using Reflect methods where applicable
    'prefer-rest-params'     : 'error', // Suggest using the rest parameters instead of arguments
    'prefer-spreads'         : 'error', // Suggest using the spread operator instead of .apply()
    'prefer-template'        : 'error', // Suggest using template literals instead of string concatenation
    'require-yield'          : 'error', // Disallow generator functions that do not have yield
    'template-curly-spacing' : 'error', // Enforce Usage of Spacing in Template Strings
    'yield-star-spacing'     : ['error', {
      before : false,
      after  : true
    }]                                  // Enforce spacing around the * in yield* expressions
    // ++++++++++++++++++++
    // Removed
    // ++++++++++++++++++++
  }
};
