import React from 'react';
import P1 from '../Footer/images/1.png'
import P2 from '../Footer/images/2.png'
import P3 from '../Footer/images/3.png'
import P4 from '../Footer/images/4.png'
import P5 from '../Footer/images/5.png'
import './Footer.css'
const Footer = () => {
  return (

      <section className="flex flex-col items-center bg-[#040F16]">
          <div className="flex flex-col items-center mt-24 mb-4">
              <h3 className="container">gallery</h3>
              <h1 className="text-6xl font-bold [font-family:'Rajdhani',Helvetica] items-center text-[#FBECEB]">INSTAGRAM</h1>
          </div>
          <div className="flex justify-center items-center mb-20 pl-10 pr-10">
              <div className="m-5 text-center w-[247px]">
                  <img src={P1} alt="img 1" className='object-contain w-full h-auto ' />
              </div>
              <div className="m-5 text-center w-[247px]">
                  <img src={P2} alt="img 2" className='object-contain w-full h-auto ' />

              </div>
              <div className="m-5 text-center w-[247px]">
                  <img src={P3} alt="img 3" className='object-contain w-full h-auto '/>

              </div>
              <div className="m-5 text-center w-[247px]">
                  <img src={P4} alt="img 4" className='object-contain w-full h-auto '/>

              </div>
              <div className="m-5 text-center w-[247px]">
                  <img src={P5} alt="img 5" className='object-contain w-full h-auto' />
              </div>
          </div>
          <hr className='w-11/12 h-px bg-[#ffffff] mt-2.5 mb-5'></hr>
          <div className="">
              <div className="">
              </div>
          </div>
      </section>
      
  );
}

export default Footer;
