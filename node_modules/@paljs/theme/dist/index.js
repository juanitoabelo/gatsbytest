
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./theme.cjs.production.min.js')
} else {
  module.exports = require('./theme.cjs.development.js')
}
