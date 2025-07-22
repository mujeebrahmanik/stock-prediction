import React from 'react'
import Button from './Button'


const Main = () => {
  return (
    <>
        <div className='container'>
            <div className='p-5 text-center text-light  bg-custom rounded'>
                <h1>Stock Prediction Portal</h1>
                <p className='lead'>Stay ahead of the market with our AI-powered stock prediction portal. Get real-time insights, trend analysis, and data-driven forecasts to make smarter investment decisions. Whether you’re a beginner or a pro trader, our platform helps you track stocks, analyze patterns, and predict future movements with confidence</p>
                <Button text='Login' class='btn-info'/>
            </div>
           
        </div>    
    
    </>
  )
}

export default Main
