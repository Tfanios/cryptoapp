import cp from 'coinpaprika-js'



export const getCoins = () => async(dispatch)=>{
    try {
        let data =[]
        const coins =  await cp.tickers();
        for(let coin of coins){
        if(coin.rank < 301){
            data.push(coin)
        }};
        data.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));
        
        dispatch({ type: "TOP_COINS", payload: data });
       } catch (error) {
        console.log(error)
       } 
}

export const getSingleCoin = (coinID) => async(dispatch)=>{
    try{
        const coin = await cp.coin(coinID)
        dispatch({ type:"SINGLE_COIN", payload:coin})
    }catch(error){
        console.log(error)
    }
}

export const getOHLCV =(coinID) => async(dispatch) =>{
    try{
         //Get historical OHLCV information for a specific coin (USD,BTC)//
       const OHLCV =  await cp.candles(coinID, "2021-01-01") 
       dispatch({ type:"OHLCV_COIN_DATA",payload: OHLCV})
    }catch(error){
        console.log(error)
    }
}

export const searchResults = (result) => dispatch =>{
    try{
        dispatch({ type:"SEARCH_RESULT",payload: result})
    }catch(error){
        console.log(error)
    }
}