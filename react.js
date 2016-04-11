'use strict';

module.exports = {
  plugins : [
    'react'
  ],
  parserOptions : {
    ecmaFeatures : {
      jsx : true
    }
  },
  rules : {
    // ++++++++++++++++++++
    // List of supported rules
    // ++++++++++++++++++++
    'react/display-name'           : 'off', // Prevent missing displayName in a React component definition
    'react/forbid-prop-types'      : 'off', // Forbid certain propTypes
    'react/no-danger'              : 'off', // Prevent usage of dangerous JSX properties
    'no-deprecated'                : 'error', // Prevent usage of deprecated methods
    'no-did-mount-set-state'       : 'error', // Prevent usage of setState in componentDidMount
    'no-did-update-set-state'      : 'error', // Prevent usage of setState in componentDidUpdate
    'no-direct-mutation-state'     : 'error', // Prevent direct mutation of this.state
    'no-is-mounted'                : 'error', // Prevent usage of isMounted
    'no-multi-comp'                : 'error', // Prevent multiple component definition per file
    'no-set-state'                 : 'off', // Prevent usage of setState
    'no-string-refs'               : 'off', // Prevent using string references in ref attribute.
    'no-unknown-property'          : 'error', // Prevent usage of unknown DOM property (fixable)
    'prefer-es6-class'             : 'error', // Enforce ES5 or ES6 class for React Components
    'prefer-stateless-function'    : 'off', // Enforce stateless React Components to be written as a pure function
    'prop-types'                   : 'error', // Prevent missing props validation in a React component definition
    'react-in-jsx-scope'           : 'error', // Prevent missing React when using JSX
    'require-extension'            : 'error', // Restrict file extensions that may be required
    'self-closing-comp'            : 'error', // Prevent extra closing tags for components without children
    'sort-comp'                    : 'error', // Enforce component methods order
    'sort-prop-types'              : 'off', // Enforce propTypes declarations alphabetical sorting
    'wrap-multilines'              : 'error', // Prevent missing parentheses around multilines JSX (fixable)
    // ++++++++++++++++++++
    // List of supported rules
    // ++++++++++++++++++++
    'jsx-boolean-value'            : ['error', 'always'], // Enforce boolean attributes notation in JSX (fixable)
    'jsx-closing-bracket-location' : ['error', 'tag-aligned'], // Validate closing bracket location in JSX (fixable)
    'jsx-curly-spacing'            : ['error', 'never'], // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
    'jsx-equals-spacing'           : ['error', 'never'], // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    'jsx-handler-names'            : 'off', // Enforce event handler naming conventions in JSX
    'jsx-indent-props'             : ['error', 2], // Validate props indentation in JSX (fixable)
    'jsx-indent'                   : ['error', 2], // Validate JSX indentation
    'jsx-key'                      : 'off', // Validate JSX has key prop when in array or iterator
    'jsx-max-props-per-line'       : ['error', { maximum : 1 }], // Limit maximum of props on a single line in JSX
    'jsx-no-bind'                  : 'error', // Prevent usage of .bind() and arrow functions in JSX props
    'jsx-no-duplicate-props'       : 'error', // Prevent duplicate props in JSX
    'jsx-no-literals'              : 'off', // Prevent usage of unwrapped JSX strings
    'jsx-no-undef'                 : 'error', // Disallow undeclared variables in JSX
    'jsx-pascal-case'              : 'error', // Enforce PascalCase for user-defined JSX components
    'jsx-sort-props'               : 'off', // Enforce props alphabetical sorting
    'jsx-space-before-closing'     : ['error', 'always'], // Validate spacing before closing bracket in JSX (fixable)
    'jsx-uses-react'               : 'error', // Prevent React to be incorrectly marked as unused
    'jsx-uses-vars'                : 'error' // Prevent variables used in JSX to be incorrectly marked as unused
  }
};
