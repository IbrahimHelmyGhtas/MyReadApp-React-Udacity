import React from 'react'

//import * as BooksAPI from '../BooksAPI'

//class SelectShelf extends Component
//{

   // statles component 
  function SelectShelf(props) {


        
        const{ fixedShelfList , selectedShelf, bookDetails,changeShelfHandle} = props;
        return(

                            <div className="book-shelf-changer">
                              <select  onChange={(e)=>changeShelfHandle(bookDetails , e.target.value)}  defaultValue={selectedShelf}>
                                <option value="move" disabled>Move to...</option>
                               {   Object.keys(fixedShelfList).map((shelf) => (
                                            
                                             <option key={shelf} value={shelf} >{fixedShelfList[shelf]}</option>
                                            

                                ))}

                                <option value="none">None</option>

                               
                              </select>
                            </div>

        )
    }

//}


export default SelectShelf