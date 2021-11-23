import React,{Component} from 'react'

//import * as BooksAPI from '../BooksAPI'

class SelectShelf extends Component
{

   
    render(){


        
        const{ fixedShelfList , selectedShelf, bookDetails,changeShelfHandle} = this.props;
        return(

                            <div className="book-shelf-changer">
                              <select  onChange={(e)=>changeShelfHandle(bookDetails , e.target.value)}>
                                <option value="move" disabled>Move to...</option>
                               {   Object.keys(fixedShelfList).map((shelf) => (
                                            (shelf === selectedShelf) ?
                                              <option key={shelf} value={shelf} selected >{fixedShelfList[shelf]}</option>
                                             :
                                             <option key={shelf} value={shelf} >{fixedShelfList[shelf]}</option>
                                            

                                ))}

                                <option value="none">None</option>

                               
                              </select>
                            </div>

        )
    }

}


export default SelectShelf