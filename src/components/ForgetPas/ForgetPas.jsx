import React from 'react';
import Announcement from '../../parts/Announcement/Announcement'
import Header from '../../parts/Header/Header'
import Lastpart from '../../parts/Lastpart/Lastpart'
const ForgetPas = () => {
  return (
    <>
        <Announcement />
    <Header />
    <section className='login-part'>
        <div class="flex flex-col items-center text-left min-h-[50vh] mx-[50px] my-[100px]">
            <h2 className="[font-family:'Rajdhani',sans-serif] text-[40px] font-bold leading-[51px]">Reset your password</h2>
            <form className='flex flex-col items-center'>
            <p className=" text-base font-normal text-[rgba(0,0,0,0.5)] mt-10 [font-family: 'Open_Sans-Regular', Helvetica]">We'll send you an email to reset your password.</p>
                <label for="email" className="[font-family: 'Open_Sans-Regular', Helvetica] inline-block w-[480px] text-left font-semibold text-base mt-[30px]">Email</label>
                <input type="text" placeholder="your@email.com" className="[font-family: 'Open_Sans-Regular', Helvetica] w-full text-base font-normal mt-2.5 p-2.5 rounded-[5px] border-[0.5px] border-solid border-[rgba(0,0,0,0.5)]" />
                <div className='flex gap-[25px] items-center mt-10'>
                <button className="[font-family:'Rajdhani',sans-serif] w-[100px] bg-[#2554D7] text-[white] text-base font-[450] uppercase cursor-pointer px-[35px] py-5 rounded-sm border-[none]">Reset</button>
                <p onClick={()=> window.location.href='/login'}  className="[font-family: 'Open_Sans-Regular', Helvetica] hover:text-[#2554D7] hover:underline text-[13px] text-left text-[#2554D7] font-normal">Cancel</p>
                </div>
            </form>
           <div className="text-left mx-[280px] my-0 p-[100px]">
           <h3 className="text-2xl font-bold [font-family:'Rajdhani',sans-serif]">New Customer?</h3>
            <p className="[font-family: 'Open_Sans-Regular', Helvetica] text-base font-normal text-[rgba(0,0,0,0.5)]">Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
            <button className="[font-family:'Rajdhani',sans-serif] w-[100px] hover:bg-black hover:opacity-80 bg-[#53D3D1] text-[white] text-base font-[450] uppercase cursor-pointer mt-6 p-2.5 rounded-sm border-[none]">Register</button>
           </div>
        </div>
    </section>
    <Lastpart /></>
  );
}

export default ForgetPas;
