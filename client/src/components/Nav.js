import React from 'react';

//We're extracting the key value pairs from props by giving the href it's current page value
function Nav({ currentPage, handlePageChange }) {
  return (
    <header>
    <ul >
      <li>
        <Link to="/"
          onClick={() => handlePageChange('Home')}
      
          //this is a Ternary operator that is checking to see if the Home nav-link is active
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </Link>
    
        <Link to="/about"
          onClick={() => handlePageChange('About')}
        
          // Determine whether the About nav link is active or not

          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </Link>
        <Link to="/dashboard"
          // Determine whether the Contact nav link is active or not

          onClick={() => handlePageChange('Dashboard')}
          className={currentPage === 'Dashboard' ? 'nav-link active' : 'nav-link'}
        >
          Profile
        </a>
       </li>
    </ul>
   </header>
  );
}

export default Nav