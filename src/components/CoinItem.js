import React from 'react';
import {Link} from 'react-router-dom'
import classes from './CoinItem.module.scss'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const CoinItem = (props) => {
    const pathToCoin = `/${props.id}` 
   

    return(
        <Link  to={pathToCoin}>
            <Card variant="outlined" style={{minHeight: '100%'}} 
            classes={{root:(props.twentyFourHourPercentChange > 0)? classes.bgGreen : classes.bgRed}}
            >
                <CardContent >
                    <Typography variant="h6" component="h2" color="textSecondary" gutterBottom>
                        Rank:{props.rank}
                    </Typography>
                    <Typography variant="h5" component="h1">
                        {props.name}
                    </Typography>
                <p>{props.twentyFourHourPercentChange}</p>
                </CardContent>
            </Card>
        </Link>   
    )

}

export default CoinItem