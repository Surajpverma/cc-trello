import React from 'react'
import account from '../images/account.png'

const Navbar = () => {
  return (
    <div className=''>
        
        <nav className='flex justify-between'>
        
            {/* yaha par CC ka logo lga dege */}

            <h3 className="text-headingCol">Coding Club</h3>
            <h3 className="text-headingCol center">Falana's Workspace</h3>
            
            <img src={account} alt="" className='w-12' />
            {/* yaha par login karne wale ki photo aa jaye */}
        
        </nav>

    </div>
  )
}

export default Navbar