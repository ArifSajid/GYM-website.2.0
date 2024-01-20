import React from 'react';
import './Products.css'
import P1 from '../Assets/products/1.png'
import P2 from '../Assets/products/2.png'
import P3 from '../Assets/products/3.png'
import P4 from '../Assets/products/4.png'


const Products = () => {
  return (
    <>
      {/*    <div>
              <div className='flex flex-col items-center'>
                  <div className='flex flex-col items-center mt-24 mb-4'>
                      <h3 className="text-base font-normal [font-family:'Homemade Apple',Helvetica] text-center text-[#2554D7]">What's New</h3>
                      <h2 className="text-6xl font-bold text-center text-[#040F16] [font-family:'Rajdhani',sans-serif]">SHOP THE LATEST</h2>
                  </div>

                  <div className='flex justify-between w-[860px] mb-8 mt-4'>
                      <p className="text-sm font-normal  text-center text-[#7B7D88] font-sans">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur</p>
                  </div>
                  <div className=' w-[860px] grid grid-cols-[repeat(4,1fr)] gap-8 l md:grid-cols-[repeat(2,1fr)] sm:grid-cols-[repeat(1,1fr)] '>
                      <div className="w-[23%] text-center mb-[30px] hover:transition-[0.3s] peer-hover:duration-[ease] hover:scale-105">
                          <img src={P1} alt="Product 1" className='w-[313px] h-[300px]' />
                          <p className="text-lg font-bold mb-5 [font-family:'Rajdhani',Helvetica] mt-5 text-left">Rogue HG 2.0 Bumper Plates</p>
                          <p className=" font-bold mb-5 [font-family:'Rajdhani',sans-serif]  text-sm text-left text-[#333] "><s>$409</s><span className='text-[#D47969]'>$300</span></p>
                      </div>
                      <div className="w-[23%] text-center mb-[30px] hover:transition-[0.3s] peer-hover:duration-[ease] hover:scale-105">
                          <img src={P2} alt="Product 2" className='w-[313px] h-[300px]' />
                          <p className="text-lg font-bold mb-5 [font-family:'Rajdhani',Helvetica] mt-5 text-left">The Ohio Bar - Cerakote</p>
                          <p className="font-bold mb-5 [font-family:'Rajdhani',sans-serif]  text-sm text-left text-[#333] ">$300</p>
                      </div>
                      <div className="w-[23%] text-center mb-[30px] hover:transition-[0.3s] peer-hover:duration-[ease] hover:scale-105">
                          <img src={P3} alt="Product 3" className='w-[313px] h-[300px]' />
                          <p className="text-lg font-bold mb-5 [font-family:'Rajdhani',Helvetica] mt-5 text-left">Rogue Adjustable Bench 3.0</p>
                          <p className="font-bold mb-5 [font-family:'Rajdhani',sans-serif]  text-sm text-left text-[#333] ">$300</p>
                      </div>
                      <div className="w-[23%] text-center mb-[30px] hover:transition-[0.3s] peer-hover:duration-[ease] hover:scale-105">
                          <img src={P4} alt="Product 4" className='w-[313px] h-[300px]' />
                          <p className="text-lg font-bold mb-5 [font-family:'Rajdhani',Helvetica] mt-5 text-left">Rogue USA Nylon Lifting Belt</p>
                          <p className="font-bold mb-5 [font-family:'Rajdhani',sans-serif]  text-sm text-left text-[#333] "><s>$60</s><span>$30</span></p>
                      </div>
                  </div>
                  <button className="mt-10 mb-14 bg-white hover:bg-black hover:text-white hover:transition-all duration-400  text-black border-black px-5 py-11 rounded-md [font-family:'Rajdhani',Helvetica] font-semibold outline-none cursor-pointer uppercase">VIEW ALL PRODUCTS</button>
              </div>
  </div>  */}
  <section class="product-section">
        <div className="section-header">
            <h3>What's New</h3>
            <h2>SHOP THE LATEST</h2>
        </div>

        <div class="section-context">
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur</p>
        </div>
        <div class="product-container">
            <div class="product-item">
                <img src={P1} alt="Product 1" />
                <p class="product-name">Rogue HG 2.0 Bumper Plates</p>
                <p class="product-price"><s>$409</s><span>$300</span></p>
            </div>
            <div class="product-item">
                <img src={P2} alt="Product 2" />
                <p class="product-name">The Ohio Bar - Cerakote</p>
                <p class="product-price">$300</p>
            </div>
            <div class="product-item">
                <img src={P3} alt="Product 3" />
                <p class="product-name">Rogue Adjustable Bench 3.0</p>
                <p class="product-price">$300</p>
            </div>
            <div class="product-item">
                <img src={P4} alt="Product 4" className='product-img' />
                <p class="product-name">Rogue USA Nylon Lifting Belt</p>
                <p class="product-price"><s>$60</s><span>$30</span></p>
            </div>
        </div>
        <button className='btn-product'>VIEW ALL PRODUCTS</button>
    </section>
</>
  );
}

export default Products;
