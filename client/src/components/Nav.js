import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Star from '../assets/stickers/goldstar.png';
import Auth from "../utils/auth";

//We're extracting the key value pairs from props by giving the href it's current page value
function Nav({ currentPage, handlePageChange }) {

  const loggedIn = Auth.loggedIn();

  const location = useLocation();
  
  if (location.pathname === '/login') {
    return (
      <div className='flex flex-row justify-start w-screen absolute p-5'>
        <Link to="/">
          <img className="w-12 h-12" src={Star} alt="Sticker Book Star" />
        </Link>
      </div>
    )
    
  }

  return (
    <header className='w-screen pb-10'>
    <div className='flex flex-row justify-between w-screen absolute p-5'>
      <Link to="/">
        <img className="w-12 h-12" src={Star} alt="Sticker Book Star" />
      </Link>
      <ul className='flex flex-row justify-end w-1/2 px-5'>
        <li className='pl-5'>
          <Link 
            to="/"
            // onClick={() => handlePageChange('Home')}
            //this is a Ternary operator that is checking to see if the Home nav-link is active
            className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} class="font-hand text-lg hover:font-bold hover:text-teal-600"
          >
            Home
          </Link>
        </li>
        <li className='pl-5'>
          <Link
            to="/about"
            // onClick={() => handlePageChange('About')}
            // Determine whether the About nav link is active or not

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} class="font-hand text-lg hover:text-teal-600 hover:font-bold"
          >
            About
          </Link>
        </li>
        {loggedIn && 
            <li className='pl-5'>
            <Link
              to="/dashboard"
              // onClick={() => handlePageChange('Dashboard')}
              className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'} class="font-hand text-lg hover:font-bold text-center hover:text-teal-600"
            >     
              Stickers
            </Link>
          </li>
          }
          {loggedIn && 
            <li className='pl-5'>
              <Link to="/goals" className={currentPage === 'Add' ? 'nav-link active' : 'nav-link'} class="font-hand text-lg hover:font-bold hover:text-teal-600">
                Goals
              </Link>
            </li>
          }
          {!loggedIn && 
            <li className='pl-5'>
            <Link to="/login" className={"font-hand text-lg hover:font-bold"}>
              Login
            </Link>
          </li>
          }
         </ul>
      </div>
    </header>
  );
}

export default Nav