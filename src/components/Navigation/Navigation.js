import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn, onClickBook }) => {
        if (isSignedIn) {
            return (
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>                
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChange('signout')} className='f3 link dim white underline pa3 pointer'><i className="fa fa-sign-out fa_custom"></i> Sign Out</p>
                    
                    </nav>
                </div>
            );
        } else {
            return (
                <div>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <p onClick={() => onRouteChange('signin')} className='f3 link dim white underline pa3 pointer'><i className="fa fa-user fa-custom"></i> Sign In</p>
                        <p onClick={() => onRouteChange('register')} className='f3 link dim white underline pa3 pointer'><i className="fa fa-users fa-custom"></i> Register</p>
                    </nav>
                </div>
            
            );
        }
        
}

export default Navigation;
