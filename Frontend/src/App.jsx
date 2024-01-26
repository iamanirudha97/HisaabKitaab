import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login-page/Login'
import Navbar from './components/navbar/Navbar'
import Register from './pages/register-page/Register'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import ContactUs from './pages/contact-us/ContactUs'
import PageNotFound from './PageNotFound'


function App() {
  const routes = {
    "/": <Home />,
    "/profile": <Profile />,
    "/contact": <ContactUs />,
    "/login" : <Login />,
    "/register": <Register />,
  }

  return (
  <div className='App'>
    <BrowserRouter>

       <Navbar />  

        <Routes>
          {
            ((Object.keys(routes) ?? []).map((ele, idx) => 
              <Route exact path={ele} key={idx} element={routes[ele]} />
            ))
          }

          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App
