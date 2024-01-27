import React from 'react'
import './global.css'

const Platforms = () => {
  return (
    <section  className='platform'>
        <div className='platform-container'>
            <div className='platform-header'>
                <h3>Top platform</h3>
                <div>
                    <button>See All</button>
                </div>
           </div>
            <div className='platform'>
                <h3 className='plaform-name'>Book Bazaar</h3>
                <div  className='range-cont-1'></div>
                <div className='price-percentage-cont'>
                    <main className='price'>$2,500,000</main>
                        <p className='percentage'>+15%</p> 
                </div> 
            </div>
            <div className='platform'>
                <h3 className='plaform-name'>Artisan Aisle</h3>
                <div  className='range-cont-2'></div>
                <div className='price-percentage-cont'>
                    <main className='price'>$1,800,000</main>
                        <p className='percentage'>+10%</p> 
                </div> 
            </div>
            <div className='platform'>
                <h3 className='plaform-name'>Toy Troope</h3>
                <div  className='range-cont-3'></div>
                <div className='price-percentage-cont'>
                    <main className='price'>$1,200,000</main>
                        <p className='percentage'>+8%</p> 
                </div> 
            </div>
            <div className='platform'>
                <h3 className='plaform-name'>Xstore</h3>
                <div  className='range-cont-4'></div>
                <div className='price-percentage-cont'>
                    <main className='price'>$600,000</main>
                        <p className='percentage'>+8%</p> 
                </div> 
            </div>
      </div>
    </section>
  )
}

export default Platforms