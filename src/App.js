import React from 'react'
import * as BooksAPI from './BooksAPI'
import Bookcategory from './Components/Bookcategory'
import './App.css'
import Search from './Components/Search'
import LoadingOverlay from 'react-loading-overlay';

import { Route,Link } from 'react-router-dom'


const fixedShelfList = {
  currentlyReading : 'Currently Reading',
  wantToRead: "Want To Read",
  read:"Read"

}


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    bookList : [],
    searchbookList : [] ,
    isActive : true

  }

  changeShelfHandle = (bookDetails,newShelf) =>
    {
        console.log("book" ,bookDetails)
       console.log("choosen" , newShelf)

        BooksAPI.update( bookDetails ,   newShelf)
        .then(
          bookDetails.shelf = newShelf 

        )
        .then(
        
          this.setState((preState) => ({
           // bookList : this.state.bookList 
           
                bookList : this.state.bookList.filter(b => b.id !== bookDetails.id).concat([ bookDetails ]),
                isActive : false
          }))
        
        )


    }  

    searchNewBook =(bookName) =>
    {
      //console.log("query" ,bookName)
      if(bookName !== "") 
      {
         BooksAPI.search(bookName).then((res) =>

        //console.log("result of searh books", res) &&
          (res && res.length && !res.error) ?

          (

            this.setState((preState) => {


              const booksWithShelf = res.map((book) => {
                const bookShelf = preState.bookList.find(
                  (b) => b.id === book.id
                );
                return { ...book, shelf: bookShelf ? bookShelf.shelf : 'none' };
              });
  
              return {
                searchbookList: booksWithShelf,
                isActive : false
              };
            //  searchbookList : res,
            
  
  
            })

          ) :
          (
               
            this.setState((preState) => ({
              searchbookList : []
          
  
  
            }))

              
              
              
              

          )
          
          
        
      )
      
      }
      else
        {    this.setState((preState) => ({
          searchbookList : []
      


        }))
}
        

     
    }


    handleClose = (status) =>{

      this.setState({ showSearchPage: status })

    }

  
  

  componentWillMount()
  {
 
      BooksAPI.getAll().then((bookList)=>{
          this.setState((prevState)=>({
            bookList : bookList,
            isActive : false


          }))
        console.log("Book List" , bookList);
      })

  
  }


  render() {


  
    return (


<LoadingOverlay
  active={this.state.isActive}
  spinner
  text='Loading your books ....'
  >
    <div className="app">

       
<Route  exact path='/'  render={()=>(

  <div className="list-books">
  <div className="list-books-title">
    <h1>MyReads</h1>
  </div>
  <div className="list-books-content">
    <div>

   
      {
          Object.keys(fixedShelfList).map( (shelf) =>  ( <Bookcategory  changeShelfHandle={this.changeShelfHandle}  fixedShelfList={fixedShelfList}  key={fixedShelfList[shelf]} categoryName={fixedShelfList[shelf]} bookList={this.state.bookList.filter((x)=> x.shelf === shelf)     } /> ) )
      }
     
      
    </div>
  </div>
  <div className="open-search">
    
    <Link   to='/search'  >
      
    <button >Add a book</button>
      
      
      </Link>
  </div>
</div>


)} />

<Route exact  path='/search'  render={()=>(

<Search handleClose={this.handleClose}   searchNewBook={this.searchNewBook} changeShelfHandle={this.changeShelfHandle}  fixedShelfList={fixedShelfList}   searchbookList={this.state.searchbookList} />
)} />

{/*  <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>

this.state.showSearchPage ? (

) : (

)*/}


</div>
</LoadingOverlay>

    
    )
  }
}

export default BooksApp
