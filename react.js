'use strict';

module.exports = {
  parser  : 'babel-eslint',
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
    'react/display-name'                 : 'off', // Prevent missing displayName in a React component definition
    'react/forbid-prop-types'            : 'off', // Forbid certain propTypes
    'react/no-comment-textnodes'         : 'off', // Prevent comments from being inserted as text nodes
    'react/no-danger'                    : 'off', // Prevent usage of dangerous JSX properties
    'react/no-deprecated'                : 'error', // Prevent usage of deprecated methods
    'react/no-did-mount-set-state'       : 'error', // Prevent usage of setState in componentDidMount
    'react/no-did-update-set-state'      : 'error', // Prevent usage of setState in componentDidUpdate
    'react/no-direct-mutation-state'     : 'error', // Prevent direct mutation of this.state
    'react/no-is-mounted'                : 'error', // Prevent usage of isMounted
    'react/no-multi-comp'                : 'error', // Prevent multiple component definition per file
    'react/no-render-return-value'       : 'off', // Prevent usage of the return value of React.render
    'react/no-set-state'                 : 'off', // Prevent usage of setState
    'react/no-string-refs'               : 'off', // Prevent using string references in ref attribute.
    'react/no-unknown-property'          : 'error', // Prevent usage of unknown DOM property (fixable)
    'react/prefer-es6-class'             : 'error', // Enforce ES5 or ES6 class for React Components
    'react/prefer-stateless-function'    : 'off', // Enforce stateless React Components to be written as a pure function
    'react/prop-types'                   : 'error', // Prevent missing props validation in a React component definition
    'react/react-in-jsx-scope'           : 'error', // Prevent missing React when using JSX
    'react/require-extension'            : 'error', // Restrict file extensions that may be required
    'react/require-optimization'         : 'off', // Enforce React components to have a shouldComponentUpdate method
    'react/require-render-return'        : 'error', // Enforce ES5 or ES6 class for returning value in render function
    'react/self-closing-comp'            : 'error', // Prevent extra closing tags for components without children
    'react/sort-comp'                    : 'error', // Enforce component methods order
    'react/sort-prop-types'              : 'off', // Enforce propTypes declarations alphabetical sorting
    'react/wrap-multilines'              : 'error', // Prevent missing parentheses around multilines JSX (fixable)
    // ++++++++++++++++++++
    // List of supported rules
    // ++++++++++++++++++++
    'react/jsx-boolean-value'            : ['error', 'always'], // Enforce boolean attributes notation in JSX (fixable)
    'react/jsx-closing-bracket-location' : ['error', 'tag-aligned'], // Validate closing bracket location in JSX (fixable)
    'react/jsx-curly-spacing'            : ['error', 'never'], // Enforce or disallow spaces inside of curly braces in JSX attributes (fixable)
    'react/jsx-equals-spacing'           : ['error', 'never'], // Enforce or disallow spaces around equal signs in JSX attributes (fixable)
    'react/jsx-filename-extension'       : 'off', // Restrict file extensions that may contain JSX
    'react/jsx-first-prop-new-line'      : ['error', 'never'], // Enforce position of the first prop in JSX
    'react/jsx-handler-names'            : 'off', // Enforce event handler naming conventions in JSX
    'react/jsx-indent'                   : ['error', 2], // Validate JSX indentation
    'react/jsx-indent-props'             : ['error', 2], // Validate props indentation in JSX (fixable)
    'react/jsx-key'                      : 'off', // Validate JSX has key prop when in array or iterator
    'react/jsx-max-props-per-line'       : 'off', // Limit maximum of props on a single line in JSX
    'react/jsx-no-bind'                  : 'error', // Prevent usage of .bind() and arrow functions in JSX props
    'react/jsx-no-duplicate-props'       : 'error', // Prevent duplicate props in JSX
    'react/jsx-no-literals'              : 'off', // Prevent usage of unwrapped JSX strings
    'react/jsx-no-target-blank'          : 'error', // Prevent usage of unsafe target='_blank'
    'react/jsx-no-undef'                 : 'error', // Disallow undeclared variables in JSX
    'react/jsx-pascal-case'              : 'error', // Enforce PascalCase for user-defined JSX components
    'react/jsx-sort-props'               : 'off', // Enforce props alphabetical sorting
    'react/jsx-space-before-closing'     : ['error', 'always'], // Validate spacing before closing bracket in JSX (fixable)
    'react/jsx-uses-react'               : 'error', // Prevent React to be incorrectly marked as unused
    'react/jsx-uses-vars'                : 'error' // Prevent variables used in JSX to be incorrectly marked as unused
  }
};
