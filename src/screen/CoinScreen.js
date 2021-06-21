import React,{ useEffect,useState} from 'react';
import { useDispatch ,useSelector} from 'react-redux' ;
import { getSingleCoin } from '../actions/actions'
import ChartComponent from '../components/Chart'
import classes from './CoinScreen.module.scss'
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import NavBar from '../components/NavBar'

const CoinScreen = (props) =>{
    const dispatch = useDispatch()
    const [price,setPrice] = useState(0)
    const [percentChange24h,setPercentChange24h] = useState(null)
    const coin = useSelector(state=>state.coin)
    const datas = useSelector(state => state.coins)
   
    const id = props.match.params.coin;
    const formatNumber = new Intl.NumberFormat('en-US');
     
        useEffect(() =>{
       
        dispatch(getSingleCoin(id))
        for(let data of datas){
            if(data.id === id){
                setPrice((data.quotes.USD.price.toFixed(2)))
                setPercentChange24h(data.quotes.USD.percent_change_24h)
             }
         }
        },[id, dispatch, datas])
    return(
        <>
        <NavBar />
            <Container>
                
                <Grid container maxWidth="xl" justify="center" style={{marginTop:"3%"}}>
                    <Grid lg={12} xs={12} item>               
                        <Typography item variant="h2">{coin.name}
                        {(percentChange24h)>0?<TrendingUpIcon className={classes.cGreen} style={{width:'2em',height:'1.5em'}}/>: <TrendingDownIcon  style={{width:'2em',height:'1.5em'}} className={classes.cRed} />}
                        </Typography>
                    </Grid>
                    <Grid item container lg={12} xs={12} style={{justifyContent: 'center'}}>
                        <Typography variant="h5">
                            Price: <strong>{formatNumber.format(price)}$ </strong>
                        </Typography>
                    </Grid>
                    <Grid item container lg={6} sm={6}style={{justifyContent: 'center'}}>
                        <Typography variant="h5">Rank:{coin.rank}</Typography>
                    </Grid>
                    <Grid item container lg={6} sm={6} style={{justifyContent: 'center'}}>
                        <Typography variant="h5">
                            <span className={(percentChange24h>0)?classes.cGreen : classes.cRed}>
                                {percentChange24h} %
                            </span>
                        </Typography>
                    </Grid>
                    <Grid container item lg={12} xs={12} sm={12} style={{justifyContent: 'center'}} >
                        <Typography style={{maxWidth:'700px',}} align='left'>{coin.description}</Typography>
                    </Grid>
                    <Grid container item lg={12} xs={12} sm={12} justify='center'>
                        <ChartComponent id={id} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CoinScreen;  