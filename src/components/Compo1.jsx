import React from 'react'
import './Compo1.css'
import { vid } from '../images'

const Compo1 = () => {
    return (
        <div className='container1'>
            <div className='container2'>
                <h1 className='hea'>Crack the GMAT!</h1>
                <h1 className='hea'>"Preparation Live"</h1>
                <div className='cover'>
                    <p className='pa'>Access FREE Trial Where We Reveal Effective Techniques To Crack The 700+ GMAT Score in 60 Days</p>
                    <p className='pa'>Click below to get instant free trail access on how to crack the GMAT within 60 Days</p>
                </div>
                <div className='cover2'>
                    <button className='but1'>ACCESS TRAIL COURSE</button>
                    <button className='but2'>JOIN NOW</button>
                </div>

            </div>
            
                <iframe className='vid'
                    src={vid}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            
        </div>
    )
}

export default Compo1