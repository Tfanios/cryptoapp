import React,{ useState,useEffect }  from 'react'
import { getCoins } from '../actions/actions'
import { useDispatch,useSelector } from 'react-redux'
import CoinItem from '../components/CoinItem'
import Loader from '../components/Loader'
import NavBar from '../components/NavBar'
import classes from './MainScreen.module.scss'

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import ReactPaginate from 'react-paginate'

const MainScreen = () =>{
    const dispatch = useDispatch();
    const data = useSelector(state => state.coins)
    const [pageNumber,setPageNumber] =useState(0)



    const coinsPerPage = 20;
    const pagesVisited = pageNumber * coinsPerPage

    // GET CoinItems and paginate //
    const displayCoins = data.slice(pagesVisited,pagesVisited + coinsPerPage).map((item,index) =>
    <Grid item lg={3} xs={12} md={4} sm={6} key={index} >
            <CoinItem 
                name={item.name} 
                rank={item.rank}
                id={item.id}
                twentyFourHourPercentChange={item.quotes.USD.percent_change_24h}
                />
        </Grid>)
    const pageCount = Math.ceil(data.length / coinsPerPage)
    
    const changePage = ({ selected }) =>{
        setPageNumber(selected)
    }
    
    useEffect(() => {
      dispatch(getCoins())
    },[dispatch])

    return(
        <>
            {(data.length === 0)?
                <div style={{display:'flex', justifyContent:'center',alignItems: 'center',width:'100%'}}>
                    <Loader />   
                </div>
            : 
            <>
                <NavBar /> 
                <Container style={{marginTop:'3%',zIndex:'0'}}>
                    <Grid container justify='center' spacing={2} alignItems='stretch'>
                        {displayCoins} 
                    </Grid>
                    <Grid container  justify='center'>
                        <ReactPaginate 
                        previousLabel={"Prev"}
                        nextLabel={"Next"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={classes.PaginationContainer}
                        activeClassName={classes.ActivePage}
                        />
                    </Grid>   
                </Container>
            </>
            }
        </>
    )
}

export default MainScreen