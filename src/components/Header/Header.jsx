import React from 'react'
import Banner from '../Banner/Banner'
import { FiShoppingBag, FiSearch } from "react-icons/fi";
import { BiUser } from "react-icons/bi";

const Header = () => {
  return (
    <div>
        <Banner/>
        <header className="flex items-center justify-between p-5 lg:px-20 font-rajdhani">
          <div className="text-xl font-bold cursor-pointer">
            GYM Nation
          </div>
          <nav className="hidden lg:flex gap-6">
            <a href="/" className="text-base font-medium text-gray-950 hover:text-blue-600 font-rajdhani">Home</a>
            <a href="/" className="text-base font-medium text-gray-950 hover:text-blue-600 font-rajdhani">Shop</a>
            <a href="/" className="text-base font-medium text-gray-950 hover:text-blue-600 font-rajdhani">About</a>
            <a href="/" className="text-base font-medium text-gray-950 hover:text-blue-600 font-rajdhani">Blog</a>
            <a href="/" className="text-base font-medium text-gray-950 hover:text-blue-600 font-rajdhani">Feature</a>
            <a href="/" className="text-base font-medium text-gray-950 hover:text-blue-600 font-rajdhani">Contacts</a>
          </nav>
          <div className="flex gap-4">
            <FiSearch className="cursor-pointer" />
            <a href="/login">
              <BiUser className="cursor-pointer" />
            </a>
            <FiShoppingBag className="cursor-pointer" />
          </div>
        </header>
    </div>
  )
}

export default Header
