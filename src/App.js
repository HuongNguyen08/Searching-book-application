import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Searchfield from './components/Searchfield/Searchfield';
import Rank from './components/Rank/Rank';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import request from 'superagent';
import BookList from './components/BookList/BookList';





class App extends Component  {
  constructor() {
    super();
    this.state = {
      input: '',
      route: 'signin',
      isSignedIn: false,
      books: [],
      searchArea: '',
      sort: '',
      listBook: 0
  }
}

  searchBook = (e) => {
    e.preventDefault();
    request
    .get('https://www.googleapis.com/books/v1/volumes')
    .query({ q: this.state.searchArea })
    .then ((data) => {
      console.log(data);
      const cleanData = this.cleanData(data)
      this.setState({ books: cleanData })
      //this.setState({ books: [...data.body.items] })
    })
  }

  handleSearch = (e) => {
    //console.log (e.target.value);
    this.setState({ searchArea: e.target.value })
  }

  handleSort = (e) => {
    console.log(e.target.value)
    this.setState({ sort: e.target.value })
  }

  cleanData = (data) => {
    const cleanData = data.body.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty('publishedDate') === false) {
        book.volumeInfo['publishedDate'] = '0000';
      }

      else  if (book.volumeInfo.hasOwnProperty('imageLinks') === false) {
        book.volumeInfo['imageLinks'] = 'No image';
      }

      if (book.volumeInfo.hasOwnProperty('authors') === false) {
        book.volumeInfo['authors'] = 'No display';
      }

      return book;
    })

    return cleanData;
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  onClickBook = (listBook) => {
    this.setState({listBook: listBook})
  }


  render() {
    const sortedBooks = this.state.books.sort((a,b) => {
      if (this.state.sort === 'Newest') {
        return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
      }
      else if (this.state.sort === 'Oldest') {
        return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
      }
    })

    return ( 
      <div className="App">
        <div>
          <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
          <p  className='f3 link dim white underline pa3 pointer'><i className="fa fa-heart fa_custom"></i> Wish List</p>
          {/* <ListBook onClickBook={this.onClickBook} /> */}
        </div>
        { this.state.route === 'home'
        ? <div>
            <Logo /> 
            <Rank />
            <Searchfield searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort} />
            <BookList books={sortedBooks} />
          </div>
        : (
          this.state.route === 'signin'
          ? <Signin onRouteChange={this.onRouteChange}/>
          : <Register onRouteChange={this.onRouteChange}/>
          )
        }
    </div>
    );
  }

}
 

export default App;
