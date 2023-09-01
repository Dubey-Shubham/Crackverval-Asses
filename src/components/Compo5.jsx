import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { stan, har, whar, ins } from '../images'

const Compo5 = () => {
  return (
    <div>
      <OwlCarousel className='owl-theme car' loop margin={1} nav>
        <div class='item'>
          <img src={stan} alt="" />
        </div>
        <div class='item'>
          <img src={har} alt="" />
        </div>
        <div class='item'>
          <img src={ins} alt="" />
        </div>
        <div class='item'>
          <img src={stan} alt="" />
        </div>
        <div class='item'>
          <img src={whar} alt="" />
        </div>
        <div class='item'>
          <img src={ins} alt="" />
        </div>

      </OwlCarousel>;
    </div>
  )
}

export default Compo5