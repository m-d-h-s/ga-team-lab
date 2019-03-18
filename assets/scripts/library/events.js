const api = require('./api')
const ui = require('./ui')

const onGetBooks = () => {
  if (event) { event.preventDefault() }
  api.getBooks()
    .then(ui.onGetBooksSuccess)
}

const addHandlers = () => {}

module.exports = {
  addHandlers,
  onGetBooks

}
