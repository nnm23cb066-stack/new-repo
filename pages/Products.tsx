
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { FaServer, FaNetworkWired, FaShieldAlt, FaVideo, FaCarBattery, FaCode } from 'react-icons/fa';
import type { IconType } from 'react-icons';

const productsList = [
  {
    name: 'Computing',
    icon: FaServer,
    description: 'High-performance servers, desktops, and laptops tailored to your business needs.'
  },
  {
    name: 'Networking',
    icon: FaNetworkWired,
    description: 'Robust and scalable networking solutions to ensure seamless connectivity.'
  },
  {
    name: 'IT Security',
    icon: FaShieldAlt,
    description: 'Comprehensive security products to protect your digital assets from threats.'
  },
  {
    name: 'Surveillance',
    icon: FaVideo,
    description: 'Advanced CCTV and surveillance systems for monitoring and security.'
  },
  {
    name: 'Power Solutions',
    icon: FaCarBattery,
    description: 'Reliable UPS and power backup solutions to prevent data loss and downtime.'
  },
  {
    name: 'Softwares',
    icon: FaCode,
    description: 'Licensed software from leading vendors, including operating systems and productivity suites.'
  },
];

interface ProductCardProps {
  name: string;
  description: string;
  icon: IconType;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, icon: Icon }) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
    <div className="p-6 bg-orange-500 dark:bg-orange-600 text-white flex justify-center items-center">
      <Icon size={48} />
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{name}</h3>
      <p className="text-gray-600 dark:text-gray-300 flex-grow">{description}</p>
    </div>
  </div>
);


const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-orange-50 dark:bg-gray-900 py-16 text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-orange-800 dark:text-orange-500">{title}</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
    </div>
  </div>
);

const Products: React.FC = () => {
  return (
    <AnimatedPage>
      <PageHeader title="Our Products" subtitle="Top-tier solutions from industry-leading partners" />

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsList.map((product) => (
              <ProductCard
                key={product.name}
                name={product.name}
                description={product.description}
                icon={product.icon}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Products;
