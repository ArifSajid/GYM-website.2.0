import React from 'react'
import { GrTwitter } from 'react-icons/gr'
import { FaFacebookF } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Lastpart = () => {
return (
<>
    <section>
        <div className="min-h-[70vh] bg-[#040F16] text-[white]">
            <div className="flex flex-row flex-wrap gap-5 px-10 py-12">
                <div className="w-3/12 ">
                    <h1 className="not-italic font-bold text-[40px] leading-[51px] mb-4">LOGO.</h1>
                    <p className="not-italic font-normal text-base leading-8 text-[#ffffffcc] [font-family: 'Open_Sans-Regular', Helvetica]">Be the first who learns about our
                        great promotions!</p>
                    <h3 className="not-italic font-semibold text-[25px] leading-[26px] mt-14 [font-family:'Rajdhani',sans-serif]">Follow us</h3>
                    <div className="flex mt-5">
                        <a href="#" className="text-[15px] text-white no-underline mr-2.5 p-[5px] rounded-sm border-2 border-solid border-[rgba(255,255,255,0.4)] hover:bg-[#2554D7]"><GrTwitter></GrTwitter></a>
                        <a href="#" className="text-[15px] text-white no-underline mr-2.5 p-[5px] rounded-sm border-2 border-solid border-[rgba(255,255,255,0.4)] hover:bg-[#2554D7]"><FaFacebookF></FaFacebookF></a>
                        <a href="#" className="text-[15px] text-white no-underline mr-2.5 p-[5px] rounded-sm border-2 border-solid border-[rgba(255,255,255,0.4)] hover:bg-[#2554D7]"><FaInstagram></FaInstagram></a>
                    </div>
                </div>
                <div className='w-6/12 flex flex-row flex-1 gap-5 justify-around'>
                    <div className="flex flex-col gap-2.5">
                        <h2 className=" not-italic font-semibold text-xl leading-[26px] mb-5 [font-family:'Rajdhani',sans-serif]">Products</h2>

                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">New Arrival</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Best Seller</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">On Sale</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">All Collection</p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-semibold text-xl mb-[30px] [font-family:'Rajdhani',sans-serif]">CATEGORY</h2>

                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Barbells</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Plates</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Benches</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Appareal</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Straps & Supports</p>
                    </div>
                    <div className="flex flex-col gap-2.5">
                        <h2 className="font-semibold text-xl mb-[30px] [font-family:'Rajdhani',sans-serif]">Info</h2>

                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">About</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Blog</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Feature</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Store Location</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Terms & Conditions</p>
                        <p className="[font-family: 'Open_Sans-Regular', Helvetica] not-italic font-normal text-base leading-8 text-[#ffffffcc]">Privacy Policy </p>
                    </div>
                </div>
                <div className=" w-3/12">
                    <h2 className="[font-family:'Rajdhani',sans-serif] not-italic font-semibold text-xl leading-[26px] mb-5">SUBSCRIBE</h2>

                    <p className="not-italic font-normal text-base leading-8 text-[#ffffffcc] [font-family: 'Open_Sans-Regular', Helvetica]">Subscribe our newsletter and get
                        discount 30% off</p>
                    <div className="[font-family:'Rajdhani',sans-serif] w-[290px] h-12 flex bg-[#2554D7] font-bold mt-14 border-[1.5px] border-solid border-[white]">
                        <input type="text" placeholder="Enter your email..." className="h-full w-3/5 text-white font-semibold bg-[#040F16] pl-5" /><button className="h-full text-center w-auto w-2/5 m-auto">Sign Up</button>
                    </div>
                </div>
            </div>
            <div className=" hidden">
                    <h2>SUBSCRIBE</h2>

                    <p>Subscribe our newsletter and get
                        discount 30% off</p>
                    <div className='lastpart-input'>
                        <input type="text" placeholder="Enter your email..." /><button>Sign Up</button>
                    </div>
                </div>
        </div>
    </section>
</>
)
}

export default Lastpart