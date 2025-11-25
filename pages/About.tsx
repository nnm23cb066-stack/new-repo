
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { FaBuilding, FaUsers, FaChartLine } from 'react-icons/fa';

const industries = [
  'IT & ITES',
  'Corporate Sector',
  'Education',
  'Government',
  'Banking',
  'Manufacturing'
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-orange-50 dark:bg-gray-900 py-16 text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-orange-600 dark:text-orange-500">{title}</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <AnimatedPage>
      <PageHeader title="About Us" subtitle="Our Journey, Mission, and Values" />

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://picsum.photos/600/400?random=2" alt="Office interior" className="rounded-lg shadow-lg" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Chathur Infotech was started in 2021 with the primary objective of offering products and services in the field of Information Technology.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Chathur Infotech has established itself as one of the most reputed organisations in Karnataka in the field of IT, Surveillance and Office Automation. We are associated with the leaders in the industry for each one of our product lines.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Chathur Infotech has a tradition of striving for excellence in all its initiatives and has been successful in achieving it with flying colours. We have strong presence in various segments such as IT, ITES, Corporate Sector, Education, Government, Banking and Manufacturing Industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Why Choose Us?</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">The principles that guide our work.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-orange-600 mx-auto mb-4 inline-block"><FaBuilding size={36} /></div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Industry Leaders</h3>
              <p className="text-gray-600 dark:text-gray-300">We partner with the best in the industry to deliver top-tier products and services.</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-orange-600 mx-auto mb-4 inline-block"><FaUsers size={36} /></div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Customer-Centric</h3>
              <p className="text-gray-600 dark:text-gray-300">Our focus is on understanding and meeting our clients' unique needs and challenges.</p>
            </div>
            <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="text-orange-600 mx-auto mb-4 inline-block"><FaChartLine size={36} /></div>
              <h3 className="text-xl font-semibold mb-2 dark:text-white">Striving for Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">A tradition of achieving success in all our initiatives with dedication and quality.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Our Presence</h2>
            <p className="text-gray-600 dark:text-gray-300 mt-2">Serving a diverse range of industries across Karnataka.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map(industry => (
              <span key={industry} className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 text-sm font-medium px-4 py-2 rounded-full">
                {industry}
              </span>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default About;
