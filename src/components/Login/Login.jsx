import React from 'react';
import Announcement from '../../parts/Announcement/Announcement'
import Header from '../../parts/Header/Header'
import Lastpart from '../../parts/Lastpart/Lastpart'
const Login = () => {
  return (
      <>
          <Announcement />
          <Header />
          <section className='login-part'>
              <div className="flex flex-col items-center text-left min-h-[50vh] mx-[50px] my-[100px]">
                  <h2 className="[font-family:'Rajdhani',sans-serif] text-[40px] font-bold leading-[51px]">Log in</h2>
                  <form className='flex flex-col items-center'>
                      <label for="email" className="inline-block w-[480px] text-left font-semibold text-base mt-[30px] [font-family: 'Open_Sans-Regular', Helvetica]">Email</label>
                      <input type="text" placeholder="your@email.com" className="w-full font-normal text-base mt-2.5 p-2.5 rounded-[5px] border-[0.5px] border-solid border-[rgba(0,0,0,0.5)] [font-family: 'Open_Sans-Regular', Helvetica]"  />
                      <label for="password" className="inline-block w-[480px] text-left font-semibold text-base mt-[30px] [font-family: 'Open_Sans-Regular', Helvetica]">Password</label>
                      <input type="password" placeholder="****************" className="w-full font-normal text-base mt-2.5 p-2.5 rounded-[5px] border-[0.5px] border-solid border-[rgba(0,0,0,0.5)] [font-family: 'Open_Sans-Regular', Helvetica]" />
                      <div className='flex gap-[25px] items-center mt-10'>
                          <button className="[font-family:'Rajdhani',sans-serif] w-[100px] bg-[#2554D7] text-[white] text-base font-[450] uppercase cursor-pointer px-[35px] py-5 rounded-sm border-[none]">LOGIN</button>
                          <p onClick={() => window.location.href = '/forget'} className="[font-family: 'Open_Sans-Regular', Helvetica] hover:text-[#2554D7] hover:underline text-[13px] text-left text-[#2554D7] font-normal">Forget your password?</p>
                      </div>
                  </form>
                  <div className="text-left mx-[280px] my-0 p-[100px]">
                      <h3 className="[font-family:'Rajdhani',sans-serif] text-2xl font-bold">New Customer?</h3>
                      <p className="[font-family: 'Open_Sans-Regular', Helvetica] text-base font-normal text-[rgba(0,0,0,0.5)]">Sign up for an account to take advantage of order tracking and history as well as pre-filled forms during checkout on subsequent orders.</p>
                      <button onClick={() => window.location.href = '/register'} className="[font-family:'Rajdhani',sans-serif] w-[100px] bg-[#53D3D1] text-[white] text-base font-[450] uppercase cursor-pointer mt-6 p-2.5 rounded-sm border-[none] hover:bg-black hover:opacity-80">Register</button>
                  </div>
              </div>
          </section>
          <Lastpart/>

      </>
  );
}

export default Login;
