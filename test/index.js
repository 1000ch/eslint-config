'use strict';

const validator = require('eslint/lib/config/config-validator');
const index = require('../index');
const react = require('../react');

validator.validate(index, 'index.js');
validator.validate(react, 'react.js');
