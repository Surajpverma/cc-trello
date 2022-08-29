import React from 'react'
import logo from '../images/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {

  return (
    <div className="overflow-hidden h-screen">
        <span className="absolute inline blur-deco rounded bg-contentCol opacity-80 -z-10 top-3/4 left-0 p-24 "></span>
        <span className="absolute inline blur-deco rounded bg-prmRed opacity-40 -z-10 -top-40 left-1/2 p-52"></span>
        <span className="absolute inline blur-deco rounded bg-prmRed opacity-50 -z-10 bottom-0 right-0 p-24"></span>
        <div className="">

            <img src={logo} alt="logo-image" className='w-40' />

            <div className=""> 
                <h3 className=''>Login</h3>
                <span className=""></span> {/*in span ko lines me convert krna h*/}
                <span className=""></span>
                <span className=""></span>
            </div>

            <div className="">
                <input name='nameHolder' type="text" placeholder='Name' className='' />
                <input name='idHolder' type="text" placeholder='BITS Id' className='' />
                <input type="password" name="passwordHolder" placeholder='Password' id="topsecret" className=''  />
                <a href="https://symphonious-malasada-9bd768.netlify.app/">forgot password ??</a> {/*isko link krna h ya nhi? ye jaruri bhi h ya nhi */}
            </div>

            <Link to="/workspace" className="">
                <input type="button" value="Log In" className='' />
            </Link>

        </div>

    </div>
  )
}

export default Login;