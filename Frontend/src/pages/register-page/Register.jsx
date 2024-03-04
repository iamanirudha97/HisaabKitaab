// import React from 'react'
// import { useAuth0 } from "@auth0/auth0-react";
// import { Button } from '@/components/ui/button'
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardFooter,
//     CardHeader,
//     CardTitle,
//   } from "@/components/ui/card"

// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"

// const Register = () => {
//   const { user, loginWithRedirect} = useAuth0();
//   console.log("user is ", user);
//   return (
//     <div className='flex flex-row min-h-screen justify-center items-center'>
//     <form>
//     <Card className="w-[350px]">
//         <CardHeader>
//           <CardTitle>Register</CardTitle> 
//         </CardHeader>

//         <CardContent>
//         <div className="grid w-full items-center gap-4">
//         <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="name">email</Label>
//             <Input id="name" type="text" placeholder="Enter your username" />
//         </div>
//         <div className="flex flex-col space-y-1.5">
//             <Label htmlFor="framework">Password</Label>
//             <Input id="password" type="password" placeholder="Enter your password" />
//         </div>
//         </div>    
//         </CardContent>

//         <CardContent className="pt-2">
//             <CardDescription>Not registered yet? </CardDescription>
//         </CardContent>

//         <CardFooter className="flex justify-between">
//             <div>
//             <Button variant="outline" className="mr-2">Click here to register!</Button>
//             <Button type="submit" >Login</Button>
//             <Button style={{backgroundColor: "#4285F4"}} className="mt-2"
//               onClick={(e) => loginWithRedirect()}
//               > Login with Google</Button>
//             </div>
//         </CardFooter>
        
//     </Card>
//     </form>
//     </div> 
//   )
// }

// export default Register