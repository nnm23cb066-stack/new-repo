
import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-orange-50 dark:bg-gray-900 py-16 text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-orange-800 dark:text-orange-500">{title}</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
    </div>
  </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let tempErrors = { name: '', email: '', message: '' };
    let isValid = true;
    if (!formData.name) {
      tempErrors.name = "Name is required.";
      isValid = false;
    }
    if (!formData.email) {
      tempErrors.email = "Email is required.";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid.";
      isValid = false;
    }
    if (!formData.message) {
      tempErrors.message = "Message is required.";
      isValid = false;
    }
    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <AnimatedPage>
      <PageHeader title="Contact Us" subtitle="We'd love to hear from you. Get in touch with us." />

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2 bg-gray-50 dark:bg-gray-700 p-8 rounded-lg shadow-md h-fit">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Send us a Message</h2>
              {isSubmitted && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">Your message has been sent successfully!</div>}
              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
                    <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:text-white" />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:text-white" />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subject</label>
                  <input type="text" name="subject" id="subject" value={formData.subject} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:text-white" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-600 border border-gray-300 dark:border-gray-500 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500 dark:text-white"></textarea>
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>
                <div>
                  <button type="submit" className="w-full bg-orange-600 text-white font-bold py-3 px-4 rounded-md hover:bg-orange-700 transition-colors">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            {/* Contact Details */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">Contact Information</h2>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="text-orange-600 dark:text-orange-500 mr-4 mt-1"><FaMapMarkerAlt size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Address</h3>
                    <p className="text-gray-600 dark:text-gray-300">#08, II FLOOR, NITHYANANDA COMPLEX,<br />A.S.R. PAI ROAD, DONGERKERY, MANGALORE – 575003</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-600 dark:text-orange-500 mr-4 mt-1"><FaPhone size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Mobile</h3>
                    <a href="tel:+919900015166" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">+91 99000 15166</a>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="text-orange-600 dark:text-orange-500 mr-4 mt-1"><FaEnvelope size={24} /></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Email</h3>
                    <a href="mailto:jp@chathurinfotech.com" className="text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-500">jp@chathurinfotech.com</a>
                  </div>
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Our Location</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.373977259163!2d74.83853587469735!3d12.88358488742881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a4f7756593b%3A0xb35359a957b0193!2sNithyananda%20Complex!5e0!3m2!1sen!2sin!4v1716982992982!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg shadow-md w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Contact;
