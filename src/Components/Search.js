import React from 'react'
import Book  from './Book'

import { Link } from 'react-router-dom'
//class Search extends Component
//{

  function Search(props){

        const {searchNewBook, searchbookList ,fixedShelfList,changeShelfHandle} = props
        
        return(

            <div className="search-books">
            <div className="search-books-bar">
              
              <Link className="close-search" to='/'  >Close </Link>
              <div className="search-books-input-wrapper">
                {/* <button className="close-search" onClick={() => handleClose(false) }>Close</button>
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"  onChange={(e)=>searchNewBook(e.target.value)} />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">



              {
                       // console.log("passed to category components props of book list" , bookList )&&
                        (searchbookList && searchbookList.length > 0)?
                        (
                          searchbookList.map((book) => (
                            <Book bookDetails={book}  key={book.id} fixedShelfList={fixedShelfList} changeShelfHandle={changeShelfHandle} categoryName={null}  />
                               // console.log("iteration",book)
                              

                        ))
                         
                        ):
                        (
                            <p>no books found</p>
                        )

                        
           }
                  
              </ol>
            </div>
          </div>

        )
    }

//}


export default Search