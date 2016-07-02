'use strict';

module.exports = {
  env : {
    browser : true,
    node    : true,
    es6     : true
  },
  parserOptions : {
    ecmaVersion : 6,
    sourceType  : 'module'
  },
  rules : {
    // ++++++++++++++++++++
    // Possible Errors
    // ++++++++++++++++++++
    'no-cond-assign'                : 'error', // Disallow Assignment in Conditional Statements
    'no-console'                    : 'off', // Disallow Use of console
    'no-constant-condition'         : 'error', // Disallow use of constant expressions in conditions
    'no-control-regex'              : 'error', // Disallow Controls Characters in Regular Expressions
    'no-debugger'                   : 'error', // Disallow debugger
    'no-dupe-args'                  : 'error', // No duplicate arguments
    'no-dupe-keys'                  : 'error', // Disallow Duplicate Keys
    'no-duplicate-case'             : 'error', // Rule to disallow a duplicate case label
    'no-empty'                      : 'error', // Disallow Empty Block Statements
    'no-empty-character-class'      : 'error', // Disallow Empty Character Classes
    'no-ex-assign'                  : 'error', // Disallow Assignment of the Exception Parameter
    'no-extra-boolean-cast'         : 'error', // Disallow Extra Boolean Casts
    'no-extra-parens'               : 'error', // Disallow Extra Parens
    'no-extra-semi'                 : 'error', // Disallow Extra Semicolons
    'no-func-assign'                : 'error', // Disallow Function Assignment
    'no-inner-declarations'         : 'error', // Declarations in Program or Function Body
    'no-invalid-regexp'             : 'error', // Disallow Invalid Regular Expressions
    'no-irregular-whitespace'       : 'error', // No irregular whitespace
    'no-negated-in-lhs'             : 'error', // Disallow negated left operand of in operator
    'no-obj-calls'                  : 'error', // Disallow Global Object Function Calls
    'no-regex-spaces'               : 'error', // Disallow Spaces in Regular Expressions
    'no-sparse-arrays'              : 'error', // Disallow Sparse Arrays
    'no-unexpected-multiline'       : 'error', // Avoid unexpected multiline expressions
    'no-unreachable'                : 'error', // Disallow Unreachable Code
    'no-unsafe-finally'             : 'error', // Disallow control flow statements in finally blocks
    'use-isnan'                     : 'error', // Require isNaN()
    'valid-jsdoc'                   : 'error', // Validates JSDoc comments are syntactically correct
    'valid-typeof'                  : 'error', // Ensures that the results of typeof are compared against a valid string
    // ++++++++++++++++++++
    // Best Practices
    // ++++++++++++++++++++
    'accessor-pairs'                : 'off', // Enforces getter/setter pairs in objects
    'array-callback-return'         : 'error', // Enforces return statements in callbacks of array’s methods
    'block-scoped-var'              : 'error', // Treat var as Block Scoped
    complexity                      : 'off', // Limit Cyclomatic Complexity
    'consistent-return'             : 'error', // Require Consistent Returns
    curly                           : 'error', // Require Following Curly Brace Conventions
    'default-case'                  : 'off', // Require Default Case in Switch Statements
    'dot-location'                  : ['error', 'property'], // Enforce newline before and after dot
    'dot-notation'                  : 'error', // Require Dot Notation
    eqeqeq                          : 'error', // Require === and !==
    'guard-for-in'                  : 'off', // Require Guarding for-in
    'no-alert'                      : 'off', // Disallow Use of Alert
    'no-caller'                     : 'error', // Disallow Use of caller/callee
    'no-case-declarations'          : 'off', // Disallow lexical declarations in case/default clauses
    'no-div-regex'                  : 'error', // Disallow Regexs That Look Like Division
    'no-else-return'                : 'off', // Disallow return before else
    'no-empty-function'             : 'error', // Disallow empty functions
    'no-empty-pattern'              : 'error', // Disallow empty destructuring patterns
    'no-eq-null'                    : 'error', // Disallow Null Comparisons
    'no-eval'                       : 'error', // Disallow eval()
    'no-extend-native'              : 'warn', // Disallow Extending of Native Objects
    'no-extra-bind'                 : 'error', // Disallow unnecessary function binding
    'no-extra-label'                : 'error', // Disallow Unnecessary Labels
    'no-fallthrough'                : 'error', // Disallow Case Statement Fallthrough
    'no-floating-decimal'           : 'error', // Disallow Floating Decimals
    'no-implicit-coercion'          : 'error', // Disallow the type conversion with shorter notations
    'no-implicit-globals'           : 'off', // Disallow var and Named Functions in Global Scope
    'no-implied-eval'               : 'error', // Disallow Implied eval()
    'no-invalid-this'               : 'error', // Disallow this keywords outside of classes or class-like objects
    'no-iterator'                   : 'error', // Disallow Iterator
    'no-labels'                     : 'error', // Disallow Labeled Statements
    'no-lone-blocks'                : 'error', // Disallow Unnecessary Nested Blocks
    'no-loop-func'                  : 'off', // Disallow Functions in Loops
    'no-magic-numbers'              : 'off', // Disallow Magic Numbers
    'no-multi-spaces'               : 'error', // Disallow multiple spaces
    'no-multi-str'                  : 'error', // Disallow Multiline Strings
    'no-native-reassign'            : 'error', // Disallow Reassignment of Native Objects
    'no-new'                        : 'off', // Disallow new For Side Effects
    'no-new-func'                   : 'error', // Disallow Function Constructor
    'no-new-wrappers'               : 'error', // Disallow Primitive Wrapper Instances
    'no-octal'                      : 'error', // Disallow Octal Literals
    'no-octal-escape'               : 'error', // Disallow Octal Escapes
    'no-param-reassign'             : 'off', // Disallow Reassignment of Function Parameters
    'no-proto'                      : 'error', // Disallow Use of __proto__
    'no-redeclare'                  : 'error', // Disallow Redeclaring Variables
    'no-return-assign'              : 'error', // Disallow Assignment in return Statement
    'no-script-url'                 : 'error', // Disallow Script URLs
    'no-self-assign'                : 'error', // Disallow Self Assignment
    'no-self-compare'               : 'error', // Disallow Self Compare
    'no-sequences'                  : 'error', // Disallow Use of the Comma Operator
    'no-throw-literal'              : 'error', // Restrict what can be thrown as an exception
    'no-unmodified-loop-condition'  : 'off', // Disallow unmodified conditions of loops
    'no-unused-expressions'         : 'error', // Disallow Unused Expressions
    'no-unused-labels'              : 'error', // Disallow Unused Labels
    'no-useless-call'               : 'error', // Disallow unnecessary .call() and .apply()
    'no-useless-concat'             : 'error', // Disallow unnecessary concatenation of strings
    'no-useless-escape'             : 'error', // Disallow unnecessary escape usage
    'no-void'                       : 'off', // Disallow use of the void operator
    'no-warning-comments'           : 'off', // Disallow Warning Comments
    'no-with'                       : 'error', // No with Statements
    radix                           : 'error', // Require Radix Parameter
    'vars-on-top'                   : 'off', // Require Variable Declarations to be at the top of their scope
    'wrap-iife'                     : ['error', 'any'], // Require IIFEs to be Wrapped
    yoda                            : 'off', // Require or disallow Yoda Conditions
    // ++++++++++++++++++++
    // Strict Mode
    // ++++++++++++++++++++
    strict                          : 'off', // Strict Mode Directives
    // ++++++++++++++++++++
    // Variables
    // ++++++++++++++++++++
    'init-declarations'             : 'off', // Enforce/Disallow Variable Initializations
    'no-catch-shadow'               : 'off', // Disallow Shadowing of Variables Inside of catch
    'no-delete-var'                 : 'error', // Disallow Variables Deletion
    'no-label-var'                  : 'error', // Disallow Labels That Are Variables Names
    'no-restricted-globals'         : 'off', // Disallow specific global variables
    'no-shadow'                     : 'error', // Disallow Shadowing
    'no-shadow-restricted-names'    : 'error', // Disallow Shadowing of Restricted Names
    'no-undef'                      : 'error', // Disallow Undeclared Variables
    'no-undef-init'                 : 'off', // Disallow Initializing to undefined
    'no-undefined'                  : 'off', // Disallow Use of undefined Variable
    'no-unused-vars'                : 'error', // Disallow Unused Variables
    'no-use-before-define'          : 'error', // Disallow Early Use
    // ++++++++++++++++++++
    // Node.js and CommonJS
    // ++++++++++++++++++++
    'callback-return'               : 'error', // Enforce Return After Callback
    'global-require'                : 'off', // Enforce require() on the top-level module scope
    'handle-callback-err'           : 'off', // Enforce Callback Error Handling
    'no-mixed-requires'             : 'error', // Disallow Mixed Requires
    'no-new-require'                : 'error', // Disallow new require
    'no-path-concat'                : 'off', // Disallow string concatenation when using
    'no-process-env'                : 'off', // Disallow process.env
    'no-process-exit'               : 'off', // Disallow process.exit()
    'no-restricted-modules'         : 'off', // Disallow Node.js modules
    'no-sync'                       : 'off', // Disallow Synchronous Methods
    // ++++++++++++++++++++
    // Stylistic Issues
    // ++++++++++++++++++++
    'array-bracket-spacing'         : ['error', 'never'], // Enforce spacing inside array brackets
    'block-spacing'                 : ['error', 'always'], // Disallow or enforce spaces inside of single line blocks
    'brace-style'                   : ['error', '1tbs', { allowSingleLine : true }], // Enforce one true brace style
    camelcase                       : ['error', { properties : 'always' }], // Require camel case names
    'comma-dangle'                  : 'error', // Disallow or Enforce Dangling Commas
    'comma-spacing'                 : ['error', { before : false, after : true }], // Enforce spacing before and after comma
    'comma-style'                   : ['error', 'last'], // Enforce one true comma style
    'computed-property-spacing'     : ['error', 'never'], // Require or disallow padding inside computed properties
    'consistent-this'               : 'off', // Enforce consistent naming when capturing the current execution context
    'eol-last'                      : 'off', // Enforce newline at the end of file, with no multiple empty lines
    'func-names'                    : 'off', // Require function expressions to have a name
    'func-style'                    : 'off', // Enforce use of function declarations or expressions
    'id-blacklist'                  : 'off', // Disallow certain identifiers to prevent them being used
    'id-length'                     : 'off', // Enforce minimum and maximum identifier lengths (variable names, property names etc.)
    'id-match'                      : 'off', // Require identifiers to match the provided regular expression
    indent                          : ['error', 2, { SwitchCase : 1 }], // Specify tab or space width for your code
    'jsx-quotes'                    : ['error', 'prefer-double'], // Specify whether double or single quotes should be used in JSX attributes
    'key-spacing'                   : ['error', { beforeColon : true, afterColon : true, align : 'colon' }], // Enforce spacing between keys and values in object literal properties
    'keyword-spacing'               : 'error', // Enforce spacing before and after keywords
    'linebreak-style'               : ['error', 'unix'], // Enforce linebreak style
    'lines-around-comment'          : 'off', // Enforce empty lines around comments
    'max-depth'                     : 'off', // Specify the maximum depth that blocks can be nested
    'max-len'                       : ['error', 200, 4], // Specify the maximum length of a line in your program
    'max-lines'                     : 'off', // Enforce a maximum file length
    'max-nested-callbacks'          : 'off', // Specify the maximum depth callbacks can be nested
    'max-params'                    : 'off', // Specify the number of parameters that can be used in the function declaration
    'max-statements'                : 'off', // Specify the maximum number of statement allowed in a function
    'max-statements-per-line'       : 'off', // Specify the maximum number of statements allowed per line
    'new-cap'                       : 'error', // Require a capital letter for constructors
    'new-parens'                    : 'error', // Disallow the omission of parentheses when invoking a constructor with no arguments
    'newline-after-var'             : 'off', // Require or disallow an empty newline after variable declarations
    'newline-before-return'         : 'off', // Require newline before return statement
    'newline-per-chained-call'      : 'off', // Enforce newline after each call when chaining the calls
    'no-array-constructor'          : 'error', // Disallow use of the Array constructor
    'no-bitwise'                    : 'off', // Disallow use of bitwise operators
    'no-continue'                   : 'off', // Disallow use of the continue statement
    'no-inline-comments'            : 'off', // Disallow comments inline after code
    'no-lonely-if'                  : 'off', // Disallow if as the only statement in an else block
    'no-mixed-operators'            : 'error', // Disallow mixes of different operators
    'no-mixed-spaces-and-tabs'      : 'error', // Disallow mixed spaces and tabs for indentation
    'no-multiple-empty-lines'       : 'error', // Disallow multiple empty lines
    'no-negated-condition'          : 'off', // Disallow negated conditions
    'no-nested-ternary'             : 'error', // Disallow nested ternary expressions
    'no-new-object'                 : 'error', // Disallow the use of the Object constructor
    'no-plusplus'                   : 'off', // Disallow use of unary operators, ++ and --
    'no-restricted-syntax'          : 'off', // Disallow use of certain syntax in code
    'no-spaced-func'                : 'error', // Disallow space between function identifier and application
    'no-ternary'                    : 'off', // Disallow the use of ternary operators
    'no-trailing-spaces'            : 'error', // Disallow trailing whitespace at the end of lines
    'no-underscore-dangle'          : 'off', // Disallow dangling underscores in identifiers
    'no-unneeded-ternary'           : 'off', // Disallow the use of ternary operators when a simpler alternative exists
    'no-whitespace-before-property' : 'error', // Disallow whitespace before properties
    'object-curly-newline'          : 'off', // Enforce consistent line breaks inside braces
    'object-curly-spacing'          : ['error', 'always'], // Enforce consistent spacing inside braces
    'object-property-newline'       : 'off', // Enforce placing object properties on separate lines
    'one-var'                       : ['error', { var : 'never', let : 'never', const : 'never' }], // Require or disallow one variable declaration per function
    'one-var-declaration-per-line'  : 'off', // Require or disallow an newline around variable declarations
    'operator-assignment'           : 'off', // Require assignment operator shorthand where possible or prohibit it entirely
    'operator-linebreak'            : ['error', 'after'], // Enforce operators to be placed before or after line breaks
    'padded-blocks'                 : ['error', 'never'], // Enforce padding within blocks
    'quote-props'                   : ['error', 'as-needed'], // Require quotes around object literal property names
    quotes                          : ['error', 'single', 'avoid-escape'], // Specify whether backticks, double or single quotes should be used
    'require-jsdoc'                 : 'off', // Require JSDoc comment
    semi                            : ['error', 'always'], // Require or disallow use of semicolons instead of ASI
    'semi-spacing'                  : ['error', { before : false, after : true }], // Enforce spacing before and after semicolons
    'sort-vars'                     : 'off', // Enforce sorting variables within the same declaration block
    'space-before-blocks'           : ['error', 'always'], // Require or disallow a space before blocks
    'space-before-function-paren'   : ['error', 'never'], // Require or disallow a space before function opening parenthesis
    'space-in-parens'               : ['error', 'never'], // Require or disallow spaces inside parentheses
    'space-infix-ops'               : 'error', // Require spaces around operators
    'space-unary-ops'               : 'error', // Require or disallow spaces before/after unary operators
    'spaced-comment'                : ['error', 'always'], // Require or disallow a space immediately following the // or /* in a comment
    'unicode-bom'                   : 'off', // Require or disallow the Unicode BOM
    'wrap-regex'                    : 'off', // Require regex literals to be wrapped in parentheses
    // ++++++++++++++++++++
    // ECMAScript 6
    // ++++++++++++++++++++
    'arrow-body-style'              : 'off', // Require braces in arrow function body
    'arrow-parens'                  : 'off', // Require parens in arrow function arguments
    'arrow-spacing'                 : ['error', { before : true, after : true }], // Require space before/after arrow function’s arrow
    'constructor-super'             : 'off', // Verify calls of super() in constructors
    'generator-star-spacing'        : ['error', { before : false, after : true }], // Enforce spacing around the * in generator functions
    'no-class-assign'               : 'error', // Disallow modifying variables of class declarations
    'no-confusing-arrow'            : 'off', // Disallow arrow functions where they could be confused with comparisons
    'no-const-assign'               : 'error', // Disallow modifying variables that are declared using const
    'no-dupe-class-members'         : 'error', // Disallow duplicate name in class members
    'no-duplicate-imports'          : 'error', // Disallow duplicate imports
    'no-new-symbol'                 : 'error', // Disallow Symbol Constructor
    'no-restricted-imports'         : 'off', // Disallow specific imports
    'no-this-before-super'          : 'error', // Disallow use of this/super before calling super() in constructors
    'no-useless-computed-key'       : 'off', // Disallow unnecessary computed property keys in object literals
    'no-useless-constructor'        : 'error', // Disallow unnecessary constructor
    'no-useless-rename'             : 'off', // Disallow renaming import, export, and destructured assignments to the same name
    'no-var'                        : 'off', // require let or const instead of var
    'object-shorthand'              : 'off', // Require Object Literal Shorthand Syntax
    'prefer-arrow-callback'         : 'off', // Suggest using arrow functions as callbacks
    'prefer-const'                  : 'off', // Suggest using const
    'prefer-reflect'                : 'error', // Suggest using Reflect methods where applicable
    'prefer-rest-params'            : 'error', // Suggest using the rest parameters instead of arguments
    'prefer-spread'                 : 'error', // Suggest using the spread operator instead of .apply()
    'prefer-template'               : 'error', // Suggest using template literals instead of string concatenation
    'require-yield'                 : 'error', // Disallow generator functions that do not have yield
    'rest-spread-spacing'           : ['error', 'never'], // Enforce spacing between rest and spread operators and their expressions
    'sort-imports'                  : 'off', // Enforce sorting import declarations within module
    'template-curly-spacing'        : 'error', // Enforce Usage of Spacing in Template Strings
    'yield-star-spacing'            : ['error', { before : false, after : true }] // Enforce spacing around the * in yield* expressions
  }
};
