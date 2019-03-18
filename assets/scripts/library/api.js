'use strict'
const config = require('./config.js')
// const store = require('./store.js')

const getBooks = () => {
  return $.ajax({
    url: config.apiUrl + '/books/',
    method: 'GET'
  })
}

module.exports = {
  getBooks
}
