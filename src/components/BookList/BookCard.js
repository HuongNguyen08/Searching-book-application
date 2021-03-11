import React from 'react';
import './BookCard.css';
import noImage from './image-not-available-200x300.jpg';


class BookCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            wishList: [
                { title: '', published_Date: ''}
            ],
            showList: false
        }
    }

    handleList = () => {
        
        console.log('click')
        this.setState({
            wishList: [
                { title: 'abc', published_Date: 'xyz'}
            ]
        })
        console(this.state.wishList)
    }

    render () {
        const style = {
            color: 'green',
            cursor: 'pointer'
        };

        if ( this.state.wishList.title) {
            style.color = 'red';
        }
        return ( 
            
           <div className='card-cointainer outline w-15 pa3 mr2 br3 bg-lightest-blue b--dotted dib v-btm'>
               <a target='blank' href={this.props.previewLink}>
               <img src={this.props.image === 'No image' ? noImage : this.props.image } alt="" width="50%" height='50%' />
               </a>
               <div className='desc f6 b'>
                   
                    <p>Author: {this.props.author.toString().substring(0,13)}</p>
                    <p>Published Date: {this.props.published === '0000' ? 'Not available' : this.props.published.substring(0,4) }</p>
                    <h2
                    style={style} 
                    className='center' 
                    onClick= { this.handleList } >
                        <i className="fa fa-heart fa_custom"></i></h2>
               </div>

           </div>
        );
    } 
    }
        
           

export default BookCard;