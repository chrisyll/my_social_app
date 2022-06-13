import React, { Component } from 'react';
import NavigationItems from '../../components/NavigationItems/NavigationItems';
import MainPage from '../MainPage/MainPage';

class Layout extends Component {
    
    state = {  }

    render() { 
        return ( 
            <div>
                <NavigationItems />
                <MainPage />
            </div>
        );
    }
}
 
export default Layout;