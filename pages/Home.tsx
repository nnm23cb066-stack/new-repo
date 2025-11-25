
import React from 'react';
import { Link } from 'react-router-dom';
import { FaServer, FaNetworkWired, FaShieldAlt, FaVideo, FaCarBattery, FaCode } from 'react-icons/fa';
import AnimatedPage from '../components/AnimatedPage';

const products = [
  { name: 'Computing', icon: <div className="text-orange-600 dark:text-orange-400 mx-auto"><FaServer size={32} /></div> },
  { name: 'Networking', icon: <div className="text-orange-600 dark:text-orange-400 mx-auto"><FaNetworkWired size={32} /></div> },
  { name: 'IT Security', icon: <div className="text-orange-600 dark:text-orange-400 mx-auto"><FaShieldAlt size={32} /></div> },
  { name: 'Surveillance', icon: <div className="text-orange-600 dark:text-orange-400 mx-auto"><FaVideo size={32} /></div> },
  { name: 'Power Solutions', icon: <div className="text-orange-600 dark:text-orange-400 mx-auto"><FaCarBattery size={32} /></div> },
  { name: 'Softwares', icon: <div className="text-orange-600 dark:text-orange-400 mx-auto"><FaCode size={32} /></div> },
];

const Home: React.FC = () => {
  return (
    <AnimatedPage>
      {/* Hero Section */}
      <section className="relative bg-orange-600 dark:bg-orange-800 text-white min-h-[60vh] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/1600/900?random=1" alt="Modern IT Infrastructure" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">Your Trusted IT Partner</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Providing cutting-edge solutions in IT, Surveillance, and Office Automation to empower your business.
          </p>
          <Link to="/contact" className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </Link>
        </div>
      </section>

      {/* About Us Snippet */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Welcome to Chathur Infotech</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-8">
            Established in 2021, Chathur Infotech has rapidly become a reputed name in Karnataka for delivering exceptional IT solutions. We partner with industry leaders to bring you the best in technology and service.
          </p>
          <Link to="/about" className="text-orange-600 dark:text-orange-400 font-semibold hover:underline">
            Learn More About Us &rarr;
          </Link>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Products</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">A comprehensive range of solutions to meet your IT needs.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {products.map((product) => (
              <div key={product.name} className="text-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{product.icon}</div>
                <h3 className="font-semibold text-gray-700 dark:text-gray-200">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snippet */}
      <section className="py-20 bg-orange-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Services</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Dedicated support to maximize your product benefits.</p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">24/7 Help Desk</h3>
              <p className="text-gray-600 dark:text-gray-300">Round-the-clock support to solve your IT needs, ensuring minimal downtime for your business.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Expert Consulting</h3>
              <p className="text-gray-600 dark:text-gray-300">Professional guidance on hardware, networking, surveillance, and software configuration.</p>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Home;
