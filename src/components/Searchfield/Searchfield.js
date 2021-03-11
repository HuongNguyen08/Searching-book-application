import React from 'react';
import './Searchfield.css';

const Searchfield = ({ handleSearch, searchBook, handleSort }) => {
    return (
       <div>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
           <p className='f4 white'>
               {'This seach field will search books from Google'}
           </p>
           <div className='center'>
               <div >
                   <form onSubmit={ searchBook } className='form center pa4 br3 shadow-5'>
                        <input onChange={ handleSearch } className='f4 pa2 w-70 center' type='text' placeholder='Search books' />
                        {/* <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Search</button> */}
                        <button href='#' className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' ><i className='fa fa-search'></i> Search</button>
                        
                        <select className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' defaultValue='Sort' onChange={ handleSort } >
                            <option disabled value='Sort' >Sort</option>
                            <option value='Newest' >Newest</option>
                            <option value='Oldest' >Oldest</option>
                        </select>
                   </form>
               </div>
           </div>
       </div>
    );
}

export default Searchfield;