import React , { useState} from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assests/images/header/logo.png'

const Header = () => {

  const [toggle, settoggle] = useState(false);

  const menubuttonhandler = ()=>{
    
    if(toggle === false){
      settoggle(true)
    }else{
      settoggle(false);
      }
  }
  
  return (
    <>
      <header>
        <section className="bg-header">
          <div className="header-main container">
            <NavLink to='/' className="header-logo">
              <img src={logo} alt="" />
            </NavLink>
            <div className='navbar-menu'>
              <nav className='mobile-nav'>
                <ul className={toggle ? 'mobile-menu-link' : 'menu-link' } style = { toggle  ? { height : "100%"  } : { height : "0%"  } } >
                  <li>
                    <NavLink to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink to='/About'>About</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Service'>Services</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Portfolio'>Portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Testimonial'>Testimonial</NavLink>
                  </li>
                  <li>
                    <NavLink to='/Blog'>Blog</NavLink>
                  </li>
                  <li>
                    <NavLink href="/talk" className="lets-talk">Let's Talk</NavLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='menu-button' onClick={menubuttonhandler}>
              {
                toggle ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>
              }
             
            </div>
          </div>
        </section>
      </header>
    </>
  )
}
export default Header