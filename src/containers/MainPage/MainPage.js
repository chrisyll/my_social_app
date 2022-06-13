import React, { Component } from 'react';
import classes from './MainPage.module.css';
import Stories from '../../components/Stories/Stories';
import Posts from '../../components/Posts/Posts';

class MainPage extends Component {
    state = {  } 
    render() { 
        return (
            <div className= {classes.MainPageContainer}>
                <Stories />
                <Posts />
            </div>
        );
    }
}
 
export default MainPage;