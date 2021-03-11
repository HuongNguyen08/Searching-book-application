import React from 'react';
import BookCard from './BookCard';
import './BookCard.css';

const BookList = ( props ) => {
        
            return (
               <div className='list black br4 flex center'>
                   {
                       props.books.map((book, i) => {
                           return (
                              // console.log(book.volumeInfo.imageLinks.thumbnail),
                              console.log(book.volumeInfo.publishedDate),
                            <BookCard 
                                key={i}
                                previewLink={book.volumeInfo.previewLink}
                                title={book.volumeInfo.title}
                                image={book.volumeInfo.imageLinks.thumbnail} 
                                author={book.volumeInfo.authors}
                                published={book.volumeInfo.publishedDate}
                            
                           />
                           );
                       })
                   }

               </div>
            );
        } 

export default BookList;