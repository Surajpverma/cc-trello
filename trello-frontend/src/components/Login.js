import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <div className="overflow-hidden h-screen max-w-full">
        <span className="absolute inline blur-deco rounded bg-contentCol opacity-80 -z-10 top-3/4 left-0 p-24 "></span>
        <span className="absolute inline blur-deco rounded bg-prmRed opacity-40 -z-10 -top-40 left-1/2 p-52"></span>
        <span className="absolute inline blur-deco rounded bg-prmRed opacity-50 -z-10 bottom-0 right-0 p-24"></span>
        <div className="flex flex-col p-6 max-w-full max-h-full bg-[rgba(255,255,255,0.1)] rounded-3xl m-auto items-center my-16 mx-12 lg:flex lg:bg-transparent lg:m-[50px] lg:ml-[225px] lg:p-0">

            <img src={logo} alt="logo-image" className='max-w-[250px] z-10 pt-[30px] lg:max-w-[475px] lg:absolute lg:top-36 lg:left-28 xl:left-56' />

            <div className='flex flex-col items-center py-4 lg:pl-96 lg:pr-20 lg:py-16 lg:items-start lg:bg-[rgba(255,255,255,0.1)] lg:rounded-3xl lg:m-auto lg:mt-28 lg:ml-100'>
            <div className=""> 
                <h3 className='text-[#fff] text-3xl lg:text-6xl'>Login</h3>
                <div className="border-b-2 w-8 lg:w-16 p-[2px] border-amber-300"></div>
                <div className="border-b-2 w-16 lg:w-32 p-[2px] border-red-600"></div>
                <div className="border-b-2 w-24 lg:w-48 p-[2px] border-cyan-400"></div>
            </div>

            <div className="flex flex-col items-center my-7">
                <input name='nameHolder' type="text" placeholder='Name' className='my-1.5 px-[5px] lg:p-2 bg-transparent text-[#fff] text-lg lg:text-2xl placeholder:text-[#c9c9c9] border-b-2 border-amber-300 w-[225px] placeholder:text-lg lg:placeholder:text-2xl placeholder:font-thin lg:w-[300px]' />
                <input name='idHolder' type="text" placeholder='BITS Id' className='my-1.5 lg:p-2 bg-transparent text-[#fff] text-lg lg:text-2xl placeholder:text-[#c9c9c9] border-b-2 border-red-600 w-[225px] placeholder:text-lg lg:placeholder:text-2xl placeholder:font-thin lg:w-[300px]' />
                <input type="password" name="passwordHolder" placeholder='Password' id="topsecret" className='my-1.5 lg:p-2 bg-transparent text-[#fff] text-lg lg:text-2xl placeholder:text-[#c9c9c9] border-b-2 border-cyan-400 w-[225px] placeholder:text-lg lg:placeholder:text-2xl placeholder:font-thin lg:w-[300px]'  />
                <a className="text-amber-400 font-thin text-sm lg:text-md italic self-start" href="https://symphonious-malasada-9bd768.netlify.app/">forgot password ??</a> {/*isko link krna h ya nhi? ye jaruri bhi h ya nhi */}
            </div>

            <Link to="/workspace" className="">
                <input type="button" value="Log In" className='hover:cursor-pointer bg-[rgba(255,255,255,0.4)] text-[#fff] px-[10px] rounded-md' />
            </Link>
            </div>

        </div>

    </div>
  )
}

export default Login;