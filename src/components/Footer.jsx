import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook ,faTwitter , faInstagram , faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer className="bg-customPurple  w-full ">
      <div className=" flex flex-col w-full  md:items-baseline items-center p-6 md:p-10">
        {/* Footer columns */}
        <div className="grid p-4 grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Primary Pages</h2>
            <ul>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/contactus">Contact Us</Link></li>
              <li><Link to="/">Team Details</Link></li>
            </ul>
          </div>
          
          {/* Column 2 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Pages</h2>
            <ul>
              <li>
                <Link to="/creative-agency">Creative Agency</Link>
                </li>

                <li>
                <Link to="/portfolio">Personal Portfolio</Link>
                </li>

                <li>
                <Link to="/digital-agancy">Digital Agancy</Link>
                </li>
            </ul>
          </div>
          
          {/* Column 3 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Resources</h2>
            <ul>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Support</a></li>
              <li><a href="#">Status</a></li>
              <li><a href="#">Building Business</a></li>
            </ul>
          </div>
          
          {/* Column 4 */}
          <div>
            <h2 className="text-lg font-semibold mb-4">News</h2>
            <ul>
              <li><a href="#">Events</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>
        </div>
        
        {/* Second row */}
        <div className="flex md:flex-row flex-col gap-6 justify-between items-center mt-8 border-t border-gray-700 pt-8">
          {/* Logo and social icons */}
          <div>
            <img src={Logo} alt="Logo" className="h-10 mb-4" />
            <div className="flex space-x-4">
            <FontAwesomeIcon className='text-3xl' icon={faLinkedin} />
            <FontAwesomeIcon className='text-3xl' icon={faInstagram} />
              <FontAwesomeIcon className='text-3xl' icon={faFacebook} />
              <FontAwesomeIcon className='text-3xl' icon={faTwitter} />
            </div>
          </div>
          
          {/* Contact details */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>123 Main Street, City, Country</p>
            <p>info@example.com</p>
            <p>+1234567890</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
