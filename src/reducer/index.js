import { combineReducers } from 'redux'




const top20CoinsReducer = (state =[] , action) =>{
    switch (action.type){
        case 'TOP_COINS': return action.payload
        default:return state
    }

}

const getSingleCoinReducer = (state ={} , action) =>{
    switch (action.type){
        case 'SINGLE_COIN': return action.payload
        default:return state
       
    }

}

const coinOHLCVReducer = (state = [], action)=>{
    switch(action.type){
        case 'OHLCV_COIN_DATA':return action.payload
        default:return [...state]
    }
}

const searchListReducer = (state = [], action)=>{
    switch(action.type){
        case 'SEARCH_RESULT':return action.payload
        default:return [...state]
    }
}


export default combineReducers({ coins:top20CoinsReducer, coin:getSingleCoinReducer, OHLCV:coinOHLCVReducer, searchList:searchListReducer })