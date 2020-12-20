{
  'use strict';

  const select = {
    templateOf: {
      bookTemplate: '#template-book',
    },
    containerOf: {
      bookList: '.books-list',
    },
    class: {
      favoriteBooks: 'favorite'
    }
  }

  const templates = {
    bookTemplate: Handlebars.compile(document.querySelector(select.templateOf.bookTemplate).innerHTML),
  };
  const menuContainer = document.querySelector(select.containerOf.bookList)
  const allBooks = []
  const favoriteBooks = []

function render(){
    for(let book of dataSource.books){
      const generatedHTML = templates.bookTemplate(book);
      console.log(book)
      const element = utils.createDOMFromHTML(generatedHTML);
      console.log(generatedHTML, element)

      menuContainer.appendChild(element);
      allBooks.push(element);
    }
}
  function initActions() {
    for(let book of allBooks){
      const bookCover = book.querySelector('.book__image')
      console.log(bookCover)
    }
    // menuContainer.addEventListener('dblclick', function (event){
    //   event.preventDefault();
    //   const clickedElement =
    //
    // })

  }

  render()
  initActions()

}
