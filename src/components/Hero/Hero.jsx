import React from 'react'
import hero1 from '../../assets/images/banner/banner1.png'
import hero2 from '../../assets/images/banner/banner2.png'
import hero3 from '../../assets/images/banner/banner3.png'
import hero4 from '../../assets/images/banner/banner4.png'

const Hero = () => {
  return (
    <section className="relative">
      <div className="flex h-[900px] overflow-hidden">
        {/* Background images */}
        <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${hero1})` }}></div>
        <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${hero2})` }}></div>
        <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${hero3})` }}></div>
        <div className="flex-1 bg-cover bg-center" style={{ backgroundImage: `url(${hero4})` }}></div>
      </div>

      {/* Text container */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-b from-black/75 to-transparent">
        <h1 className="text-white text-5xl font-bold text-center mb-4 leading-tight font-rajdhani">
          Sports Clothing &<br />
          Fitness Equipment<br />
          Shopify Theme
        </h1>
        
        <button className="bg-[#2554D7] text-white uppercase text-lg px-12 py-5 roundedhover:bg-blue-700 transition duration-300 font-rajdhani font-bold rounded-[5px]">
          View Shop
        </button>
      </div>
    </section>
  )
}

export default Hero
