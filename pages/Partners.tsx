
import React from 'react';
import AnimatedPage from '../components/AnimatedPage';

const partners = [
  { id: 1, name: 'HP', logoUrl: '/partners/hp.png' },
  { id: 2, name: 'Dahua', logoUrl: '/partners/dahua.png' },
  { id: 3, name: 'IBM', logoUrl: '/partners/ibm.png' },
  { id: 4, name: 'Dell', logoUrl: '/partners/dell.png' },
  { id: 5, name: 'Hikvision', logoUrl: '/partners/hikvision.png' },
  { id: 6, name: 'Lenovo', logoUrl: '/partners/lenovo.png' },
];

const PageHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="bg-orange-50 dark:bg-gray-900 py-16 text-center">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-orange-800 dark:text-orange-500">{title}</h1>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">{subtitle}</p>
    </div>
  </div>
);

const Partners: React.FC = () => {
  return (
    <AnimatedPage>
      <PageHeader title="Our Partners" subtitle="Collaborating with industry leaders to bring you the best" />

      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="group p-8 bg-gray-50 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-transparent transition-all duration-300 hover:shadow-xl hover:border-orange-500 dark:hover:border-orange-500 h-40"
              >
                {partner.logoUrl ? (
                  <img
                    src={partner.logoUrl}
                    alt={partner.name}
                    className="max-h-full max-w-full object-contain grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-105"
                  />
                ) : (
                  <span className="text-xl font-bold text-gray-400 dark:text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">{partner.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedPage>
  );
};

export default Partners;
