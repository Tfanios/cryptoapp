import React from 'react';
import {Link} from 'react-router-dom'
import classes from './SearchResults.module.scss'


const SearchResult = (props) =>{
    
    return(
        <div>
            <ul className={classes.List}>
            {props.data.map((value,index) =><Link to={`/` + value}> <li key={index}>{value}</li> </Link>)}
            </ul>
        </div>
    )
}

export default SearchResult