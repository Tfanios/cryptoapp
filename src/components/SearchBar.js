import React from 'react';
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search';
import classes from './SearchBar.module.scss'
import {useSelector,useDispatch } from 'react-redux'
import SearchResult from './SearchResult'
import { searchResults } from '../actions/actions'

const SearchBar =() =>{
    const data = useSelector(state=>state.coins)
    const list = useSelector(state=>state.searchList)
    const dispatch = useDispatch();
   

    const changeHandler = (e) =>{
        let queryData = [];
        if(e.target.value !== '') {
        data.forEach((coin) => {
          if(coin.id.toLowerCase().indexOf(e.target.value)!== -1) {
            if(queryData.length < 10) {
              queryData.push(coin.id);
                }}
            })
        }
        dispatch(searchResults(queryData));
    }
    return(
        <div style={{margin:'auto'}}>
            <div className={classes.SearchBar}>
                <InputBase
                onChange={changeHandler}
                    style={{backgroundColor:'#fff'}}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
               
                <SearchIcon fontSize='large' style={{textAlign:'center'}}/>
               
            </div>
             {(list)? <SearchResult data={list}/> : null}
        </div>
        
    )
}

export default SearchBar;