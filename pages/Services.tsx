
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { FaHeadset, FaTools, FaLightbulb } from 'react-icons/fa';

const servicesList = [
  {
    title: '24/7 Help Desk',
    description: 'Our help desk works round the clock to solve your IT needs. We provide immediate assistance to ensure your operations run smoothly without interruption.',
    icon: <div className="text-white"><FaHeadset size={48} /></div>
  },
  {
    title: 'Product & Hardware Support',
    description: 'We offer comprehensive support on all delivered products. Our team provides expert consulting services on hardware support to keep your infrastructure in optimal condition.',
    icon: <div className="text-white"><FaTools size={48} /></div>
  },
  {
    title: 'Consulting & Installation',
    description: 'Our experts provide consulting on networking, surveillance, and software configuration. We also offer professional installation guidance to ensure everything is set up correctly from the start.',
    icon: <div className="text-white"><FaLightbulb size={48} /></div>
  }
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-orange-50 dark:bg-gray-900 py-16 text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-orange-800 dark:text-orange-500">{title}</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
    </div>
  </div>
);

const Services: React.FC = () => {
  return (
    <AnimatedPage>
      <PageHeader title="Our Services" subtitle="Dedicated to your success, around the clock" />

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-12">
            {servicesList.map((service, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-8">
                <div className="bg-orange-600 dark:bg-orange-700 p-6 rounded-full flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-orange-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Our Commitment</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
            We are committed to offering on-time support to reduce your risks and maximize the benefits of our products. Your satisfaction and success are our top priorities.
          </p>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Services;
