const bookTemplate = require('../templates/book-listing.handlebars')

const getBooksSuccess = responseData => {
  $('#books-content').empty()
  const showBooks = bookTemplate({books: responseData.books})
  $('#books-content').append(showBooks)
}

module.exports = {
  getBooksSuccess
}
