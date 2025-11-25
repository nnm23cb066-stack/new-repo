
import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 dark:bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">Chathur Infotech</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner in Information Technology, Surveillance, and Office Automation since 2021.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-orange-500 transition-colors">Products</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Contact Info</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <div className="mr-3 mt-1 text-orange-500"><FaMapMarkerAlt size={16} /></div>
                <span className="text-gray-400">#08, II FLOOR, NITHYANANDA COMPLEX, A.S.R. PAI ROAD, DONGERKERY, MANGALORE – 575003</span>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-orange-500"><FaPhone size={16} /></div>
                <a href="tel:+919900015166" className="text-gray-400 hover:text-orange-500 transition-colors">+91 99000 15166</a>
              </li>
              <li className="flex items-center">
                <div className="mr-3 text-orange-500"><FaEnvelope size={16} /></div>
                <a href="mailto:jp@chathurinfotech.com" className="text-gray-400 hover:text-orange-500 transition-colors">jp@chathurinfotech.com</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><FaFacebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><FaTwitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors"><FaLinkedin size={24} /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 dark:bg-gray-950 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Chathur Infotech. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
