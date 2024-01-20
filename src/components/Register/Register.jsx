import React from 'react';
import Announcement from '../../parts/Announcement/Announcement'
import Header from '../../parts/Header/Header'
import Lastpart from '../../parts/Lastpart/Lastpart';


const Register = () => {
  return (
    <>
    <Announcement />
  <Header />
  <section className='login-part'>
      <div className="flex flex-col items-center text-left mx-[50px] my-[100px] min-h-[50vh]">
          <h2 className="[font-family:'Rajdhani',sans-serif] text-[40px] font-bold leading-[51px]">Sign up</h2>
          <form className='flex flex-col items-center'>
              <label for="email" className="inline-block w-[480px] text-left font-semibold text-base mt-[30px] [font-family: 'Open_Sans-Regular', Helvetica]">First name</label>
              <input type="text" placeholder="enter" className="w-full font-normal text-base mt-2.5 p-2.5 rounded-[5px] border-[0.5px] border-solid border-[rgba(0,0,0,0.5)] [font-family: 'Open_Sans-Regular', Helvetica]" />
              <label for="email" className="inline-block w-[480px] text-left font-semibold text-base mt-[30px] [font-family: 'Open_Sans-Regular', Helvetica]">Last name</label>
              <input type="text" placeholder="your@email.com" className="w-full font-normal text-base mt-2.5 p-2.5 rounded-[5px] border-[0.5px] border-solid border-[rgba(0,0,0,0.5)] [font-family: 'Open_Sans-Regular', Helvetica]"/>
              <label for="email" className="inline-block w-[480px] text-left font-semibold text-base mt-[30px] [font-family: 'Open_Sans-Regular', Helvetica]">Email</label>
              <input type="text" placeholder="your@email.com" className="w-full font-normal text-base mt-2.5 p-2.5 rounded-[5px] border-[0.5px] border-solid border-[rgba(0,0,0,0.5)] [font-family: 'Open_Sans-Regular', Helvetica]"/>
              <label for="password" className="inline-block w-[480px] text-left font-semibold text-base mt-[30px] [font-family: 'Open_Sans-Regular', Helvetica]">Password</label>
              <input type="password" placeholder="****************" className="w-full font-normal text-base mt-2.5 p-2.5 rounded-[5px] border-[0.5px] border-solid border-[rgba(0,0,0,0.5)] [font-family: 'Open_Sans-Regular', Helvetica]"/>
              <div className='flex items-center mt-10'>
              <button className="[font-family:'Rajdhani',sans-serif] w-[100px] bg-[#2554D7] text-[white] text-base font-[450] uppercase cursor-pointer px-px py-5 rounded-sm border-[none]">register</button>
              </div>
          </form>
      </div>
  </section>

  <Lastpart/>

  </>
  );
}

export default Register;
