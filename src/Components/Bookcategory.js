import React,{Component} from 'react'
import Book  from './Book'
//class Bookcategory extends Component
//{
    
    // statles component 
 function   Bookcategory(props){
        const{categoryName , bookList ,fixedShelfList,changeShelfHandle} = props
        return(

            <div className="bookshelf">
                  <h2 className="bookshelf-title">{categoryName}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">

                        {
                       // console.log("passed to category components props of book list" , bookList )&&
                        
                        bookList.map((book) => (
                            <Book bookDetails={book}  key={book.id} fixedShelfList={fixedShelfList} changeShelfHandle={changeShelfHandle} />
                               // console.log("iteration",book)
                              

                        ))
                        
                        }
                     
                     
                    </ol>
                  </div>
                </div>

        )
    }

//}


export default Bookcategory