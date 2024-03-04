import React, { useEffect, useState } from 'react'
import NavbarCenter from '../navbarCenter/NavbarCenter'
import { Button } from '../ui/button'
import { useAuth0 } from '@auth0/auth0-react'
import { userlogin } from './userLoginService'

const Navbar = () => {
  const { user, loginWithRedirect, logout, isAuthenticated } = useAuth0();
  const [email, setemail] = useState('');

  const handleLogin = async () => {
    try {
      setemail("soham@gmail.com")
      const result = await userlogin({email})
      console.log("res", email, result)
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect(() => {
  //   console.log("inside use effect", user?.email)
  //   if(user){
  //     fetchToken(user);
  //   }
  // }, []);


  return (
    <div className='grid grid-cols-3 justify-items-center gap-4 m-2 p-1 rounded-lg bg-slate-950'>

      <span style={{ color: "#FFF"}} className='mx-6'> <strong>Hisaab Kitaab</strong></span>
      
      <NavbarCenter />

      <div className='mr-6'>
        {!isAuthenticated && 
        <Button variant="secondary" className="mr-2" onClick={handleLogin}> Log in </Button>}

        {!isAuthenticated && 
        <Button variant="secondary"> Register </Button>}

        {isAuthenticated && 
        <Button variant="secondary" className="mx-6" onClick={(e) => logout()}>
           logout </Button>}
      </div> 
    </div>
  )}

export default Navbar