import React,{Component} from 'react'
import SelectShelf from './SelectShelf'
class Book extends Component
{

    render(){

        const {bookDetails, fixedShelfList,changeShelfHandle} = this.props
        return(

            <li>
            <div className="book">
              <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${  bookDetails.imageLinks ? bookDetails.imageLinks.thumbnail : "https://images.app.goo.gl/ap1WwfYgjozf9Tkz6" })` }}></div>
                <SelectShelf selectedShelf={bookDetails.shelf} fixedShelfList={fixedShelfList}  bookDetails={bookDetails} changeShelfHandle={changeShelfHandle} />
              </div>
              <div className="book-title">{bookDetails.title}</div>
              <div className="book-authors">{ bookDetails.authors? bookDetails.authors.join(' , '): ""}</div>
            </div>
          </li>

        )
    }

}


export default Book