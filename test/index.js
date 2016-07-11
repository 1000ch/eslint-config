'use strict';

const validator = require('eslint/lib/config/config-validator');
const index = require('../index');
validator.validate(index, 'index.js');
