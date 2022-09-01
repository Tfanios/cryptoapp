import cp from 'coinpaprika-js'
import axios from 'axios'


export const getCoins = () => async (dispatch) => {
    try {
        let data = []
        const coins = await cp.tickers();
        for (let coin of coins) {
            if (coin.rank < 301) {
                data.push(coin)
            }
        };
        data.sort((a, b) => parseFloat(a.rank) - parseFloat(b.rank));

        dispatch({ type: "TOP_COINS", payload: data });
    } catch (error) {
        console.log(error)
    }
}

export const getSingleCoin = (coinID) => async (dispatch) => {
    try {
        const coin = await cp.coin(coinID)
        dispatch({ type: "SINGLE_COIN", payload: coin })
    } catch (error) {
        console.log(error)
    }
}

export const getOHLCV = (coinID) => async (dispatch) => {
    try {
        //Get historical OHLCV information for a specific coin (USD,BTC)//
        // FIxx gia ta historrical data
        // Gecko APi https://api.coingecko.com/api/v3/coins/bitcoin/ohlc?vs_currency=eur&days=365
        const newCoinID = coinID.substring(coinID.indexOf("-") + 1)
        const OHLCV = await axios.get(`https://api.coingecko.com/api/v3/coins/${newCoinID}/ohlc?vs_currency=eur&days=365`)
        console.log(OHLCV.data)
        // Need paid plan for this data now
        // const OHLCV = await cp.candle(coinID)
        dispatch({ type: "OHLCV_COIN_DATA", payload: OHLCV.data })
    } catch (error) {
        console.log(error)
    }
}

export const searchResults = (result) => dispatch => {
    try {
        dispatch({ type: "SEARCH_RESULT", payload: result })
    } catch (error) {
        console.log(error)
    }
}