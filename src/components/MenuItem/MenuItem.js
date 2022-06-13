import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MenuItem.module.css';

const menuItem = (props) => {
    return ( 
        <Link
            className= {classes.Link}
            to = {props.linkTo}> {props.children} </Link>
    );
}

export default menuItem;