import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return(
        <AppBar position="static" style={{backgroundColor:'#2a2727',overflow:'visible'}}>
            <Toolbar>
                <Link to="/">
                    <Typography variant="h6" >
                        Crypto.App
                    </Typography>
                </Link>
                <SearchBar />
            </Toolbar>
        </AppBar>
    )
}

export default NavBar