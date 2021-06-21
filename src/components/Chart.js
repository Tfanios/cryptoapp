import React,{ useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  getOHLCV } from '../actions/actions'
import Chart from "react-apexcharts";


const ChartComponent =(props) =>{
    const OHLCVdata = useSelector(state=>state.OHLCV)
    const dispatch = useDispatch()
    let formatedData = []
    const series = [{data:formatedData}]
    const options = {chart: {id: "candlestick"}, yaxis: { decimalsInFloat:'none',labels:{ style:{colors:'#fff'}}}, xaxis: {tickAmount:10,labels:{ style:{colors:'#fff'}}}}
    useEffect(() =>{
        dispatch(getOHLCV(props.id))
        },[dispatch,props.id])
    
    for (let data of OHLCVdata){
        formatedData.push({x:data.time_open.slice(0,10),y:[data.open.toFixed(3),data.high.toFixed(3),data.high.toFixed(3),data.close.toFixed(3)]})
    }
    
    return(
        <div style={{width:'90%',padding:'0'}}>
           <Chart
           style={{color:'black'}}
              options={options}
              series={series}
              type="candlestick"
              width={'100%'}
            />
        </div>
    )
}

export default ChartComponent