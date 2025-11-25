import React from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { FaEnvelope, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

const jobOpenings = [
  {
    title: 'Senior Network Engineer',
    location: 'Mangalore, Karnataka',
    type: 'Full-time',
    description: 'Design, implement, and manage complex network infrastructures for our enterprise clients.'
  },
  {
    title: 'IT Support Specialist',
    location: 'Mangalore, Karnataka',
    type: 'Full-time',
    description: 'Provide exceptional technical support to our clients, troubleshooting hardware and software issues.'
  },
  {
    title: 'Business Development Manager',
    location: 'Mangalore, Karnataka',
    type: 'Full-time',
    description: 'Drive business growth by identifying new opportunities and building strong client relationships.'
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

const Careers: React.FC = () => {
  return (
    <AnimatedPage>
      <PageHeader title="Join Our Team" subtitle="Grow your career with a leading technology partner" />

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Why Work With Us?</h2>
          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 mb-12">
            At Chathur Infotech, we believe in fostering a culture of innovation, collaboration, and continuous learning.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-orange-600 dark:text-orange-500 mx-auto mb-4 inline-block"><FaLightbulb size={40} /></div>
              <h3 className="text-xl font-semibold dark:text-white">Innovate</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Work with the latest technologies and solve real-world challenges.</p>
            </div>
            <div className="p-6">
              <div className="text-orange-600 dark:text-orange-500 mx-auto mb-4 inline-block"><FaUsers size={40} /></div>
              <h3 className="text-xl font-semibold dark:text-white">Collaborate</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">Be part of a supportive team that values every contribution.</p>
            </div>
            <div className="p-6">
              <div className="text-orange-600 dark:text-orange-500 mx-auto mb-4 inline-block"><FaChartLine size={40} /></div>
              <h3 className="text-xl font-semibold dark:text-white">Grow</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">We invest in your professional development and career growth.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">Current Openings</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {jobOpenings.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">{job.title}</h3>
                    <p className="text-gray-500 dark:text-gray-300 text-sm mt-1">{job.location} &bull; {job.type}</p>
                  </div>
                  <a href="mailto:jp@chathurinfotech.com?subject=Application for [Job Title]" className="hidden sm:inline-block bg-orange-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors">
                    Apply Now
                  </a>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-4">{job.description}</p>
              </div>
            ))}
            <div className="text-center pt-8">
              <p className="text-gray-600 dark:text-gray-300">Don't see a role that fits? We are always looking for talented individuals.</p>
              <a href="mailto:jp@chathurinfotech.com" className="mt-4 inline-flex items-center text-orange-600 dark:text-orange-500 font-semibold hover:underline">
                <span className="mr-2"><FaEnvelope /></span>
                Send us your resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Careers;