import React from 'react'
import NavbarCenter from '../navbarCenter/NavbarCenter'
import { Button } from '../ui/button'
import { useAuth0 } from '@auth0/auth0-react'

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth0();
  return (
    <div className='grid grid-cols-3 justify-items-center gap-4 m-2 p-1 rounded-lg bg-slate-950'>

      <span style={{ color: "#FFF"}} className='mx-6'> <strong>Hisaab Kitaab</strong></span>
      
      <NavbarCenter />

      <div className='mr-6'>
        {!isAuthenticated && 
        <Button variant="secondary" className="mr-2"> Log in </Button>}

        {!isAuthenticated && 
        <Button variant="secondary"> Register </Button>}

        {isAuthenticated && 
        <Button variant="secondary" className="mx-6" onClick={(e) => logout()}>
           logout </Button>}
      </div> 
    </div>
  )}

export default Navbar