import React from 'react';
import {FiShoppingBag} from 'react-icons/fi';
import {BiUser} from 'react-icons/bi';
import {FiSearch} from 'react-icons/fi';
import './Header.css';

const Header = () => {
  return (
    <>
          <section id="header">
              <div className="w-[1300px] h-[50px] relative">
                  <div className="w-[92px] h-5 left-[1208px] top-[15px] absolute justify-center items-center gap-4 inline-flex cursor-pointer">
                      <div className="w-5 h-5 relative"><FiSearch /></div>
                      <div className="w-5 h-5 relative"><a href='/login'><BiUser /></a></div>
                      <div className="w-5 h-5 relative"><FiShoppingBag /></div>
                  </div>
                  <div className="w-[389px] h-[50px] p-2.5 left-[158px] top-0 absolute justify-between items-center gap-6 inline-flex">
                      <div className="text-gray-950 text-base font-medium font-['Rajdhani'] cursor-pointer hover:text-[#2554d7]"><a href="index.html">Home</a></div>
                      <div className="text-gray-950 text-base font-medium font-['Rajdhani'] cursor-pointer hover:text-[#2554d7]"><a href="/">Shop</a></div>
                      <div className="text-gray-950 text-base font-medium font-['Rajdhani'] cursor-pointer hover:text-[#2554d7]"><a href="/">About</a></div>
                      <div className="text-gray-950 text-base font-medium font-['Rajdhani'] cursor-pointer hover:text-[#2554d7]"><a href="/">Blog</a></div>
                      <div className="text-gray-950 text-base font-medium font-['Rajdhani'] cursor-pointer hover:text-[#2554d7]"><a href="/">Feature</a></div>
                      <div className="text-gray-950 text-base font-medium font-['Rajdhani'] cursor-pointer hover:text-[#2554d7]"><a href="/">Contacts</a></div>
                  </div>
                  <div className="w-[99px] h-12 left-0 top-[1px] absolute text-black text-[40px] font-bold font-['Rajdhani'] cursor-pointer">LOGO.</div>
              </div>
          </section>

    </>
  )
}

export default Header
