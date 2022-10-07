import React from 'react'
import account from '../images/account.png'

const Navbar = () => {
  return (
    <div className=' w-[100vw] p-3 shadow-[0 1px 20px rgba(0, 40, 40, 0.5)] border-b-headingCol z-20 sticky top-0 bg-outerBoxCol'>
        
        <nav className='flex justify-between'>
        
            {/* yaha par CC ka logo lga dege */}

            <h3 className="text-headingCol">Coding Club</h3>
            <h3 className="text-headingCol center">Falana's Workspace</h3>
            
            <img src={account} alt="" className=' w-8' />
            {/* yaha par login karne wale ki photo aa jaye */}
        
        </nav>

    </div>
  )
}

export default Navbar