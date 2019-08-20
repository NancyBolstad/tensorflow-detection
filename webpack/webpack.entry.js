/* eslint-disable @typescript-eslint/no-var-requires */
const PATH = require('../config/path');
const getEntries = require('./utils/getEntries');

module.exports = getEntries(PATH.ENTRY_POINTS, {});
