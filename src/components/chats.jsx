import React from 'react'
import {Chart as Chartjs } from 'chart.js/auto'
import { Bar } from "react-chartjs-2"

 const sourceData=[
  {
    label:'jan',
    value:7000
  }, 
  {
    label:'feb',
    value:21000
  },
  {
    label:'mar',
    value:6000
  },
  {
    label:'apr',
    value:29000
  },
  {
    label:'may',
    value:9000
  },
  {
    label:'jun',
    value:45000
  }, 
  {
    label:'jul',
    value:9000
  }, 
  {
    label:'aug',
    value:23500
  }, 
  {
    label:'sep',
    value:32000
  },
  {
    label:'oct',
    value:4700
  },
  {
    label:'nov',
    value:30500
  },
  {
    label:'dec',
    value:22000
  },
  
 ]







const Chat = () => {

 
  
  return (
    <div className='chat'>
       <div className='sales-cont'>
        <h3>Sales Trends</h3>
        <div className='sort-cont'>
          <p>Sort by:</p>
          <div className='dropdowncont'>
          <div className='week-dropdown'>
              <select>
                <option value="daily">daily</option>
                <option value="monthly">monthly</option>
                <option value="yearly">yearly</option>
              </select>
            </div>
            
            </div>
        </div>
       </div>
      <div>
        <Bar 
        data={{
            labels:sourceData.map((label)=>label.label),
            datasets:[{
              label:"Revenue",
              data:sourceData.map((label)=>label.value),
              borderWidth:0.1,
              backgroundColor:[
                'rgba(52, 202, 165, 0.10)',
                'rgba(52, 202, 165, 0.10)',
                'rgba(52, 202, 165, 0.10)',
                'rgba(52, 202, 165, 0.10)',
                'rgba(52, 202, 165, 0.10)',
                '(180deg, #34CAA5 0%, rgba(52, 202, 165, 0.00) 100%)',
                'rgba(52, 202, 165, 0.10)',
                'rgba(52, 202, 165, 0.10)',
                'rgba(52, 202, 165, 0.10)',
                'rgba(52, 202, 165, 0.10)',
                'rgba(52, 202, 165, 0.10)',
                'rgba(52, 202, 165, 0.10)'
    
              ],
              borderRadius:40
              },
           ],

        }}
      height={280}
        width={200}
        options={
          {
           plugins:{
            legend:{
              display:false
            }
            },
            maintainAspectRatio:false,
            scales: {
              y: { // defining min and max so hiding the dataset does not change scale range
                min: 0,
                max:50000,
                grid:{
                  drawBorder:false,
                  borderWidth:3
                },
                
                border:{
                  dash:[10,10]
                }
             },
                
             x: { // defining min and max so hiding the dataset does not change scale range
              grid:{
                display:false,
                drawBorder:false,
                lineWidth:5
              }
           }
            }
          }
        }
        />
      </div>
    </div>
  )
}

export default Chat