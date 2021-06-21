import React from 'react';
import  classes from './Loader.module.scss'


const Loader = () =>{
    return(
   
        <div className={`${classes.Loader} ${classes.Line} ${classes.Container}`}>
        <div  className={`${classes.LoaderLine1} ${classes.Line}`}></div>
        <div  className={`${classes.LoaderLine2} ${classes.Line}`}></div>
        <div  className={`${classes.LoaderLine3} ${classes.Line}`}></div>
        </div>
    )
}

export default Loader;