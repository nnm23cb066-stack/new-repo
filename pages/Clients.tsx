import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { FaUniversity, FaHospital, FaBuilding, FaIndustry } from 'react-icons/fa';

const clientsList = [
  { name: 'NMAMIT', logo: '/clients/nmamit.png' },
  { name: 'SDMCET', logo: '/clients/sdmcet.png' },
  { name: 'AJ Hospital', logo: '/clients/aj-hospital.jpg' },
  { name: 'NITK Surathkal', logo: '/clients/nitk.jpg' },
  { name: 'Eswari Metal Industries', logo: '/clients/eswari.png' },
  { name: 'Shakthi Education Trust', logo: '/clients/shakthi-education-trust.jpg' },
  { name: 'Sharada Vidyalaya', logo: '/clients/sharada-vidyalaya.png' },
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-orange-50 dark:bg-gray-900 py-16 text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-orange-800 dark:text-orange-500">{title}</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
    </div>
  </div>
);

const Clients: React.FC = () => {
  return (
    <AnimatedPage>
      <PageHeader title="Our Valued Clients" subtitle="We are proud to serve a diverse range of leading organizations" />

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {clientsList.map((client) => (
              <div
                key={client.name}
                className="w-full sm:w-[calc(50%-1rem)] md:w-[calc(33.333%-1.34rem)] bg-gray-50 dark:bg-gray-700 p-8 rounded-lg text-center border border-transparent transition-all duration-300 hover:shadow-lg hover:border-orange-200 dark:hover:border-orange-500 hover:-translate-y-1 flex flex-col items-center justify-center h-full"
              >
                <div className="mb-4 h-24 flex items-center justify-center w-full">
                  <img src={client.logo} alt={client.name} className="max-h-full max-w-full object-contain" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 dark:text-white">{client.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Clients;
