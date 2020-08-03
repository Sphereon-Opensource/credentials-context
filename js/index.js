'use strict';

const constants = require('./constants');
const credentials = require('../contexts/credentials-v1');

exports.constants = constants;
const contexts = exports.contexts = new Map();

contexts.set(constants.CREDENTIALS_CONTEXT_V1_URL, credentials.V1);
