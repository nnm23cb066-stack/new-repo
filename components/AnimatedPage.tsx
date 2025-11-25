
import React from 'react';

const AnimatedPage: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="animate-fadeIn">
      {children}
    </div>
  );
};

// Add keyframes for animation in index.html or a global CSS setup.
// Since we cannot add to index.html directly, we rely on tailwind.config.js extension
// but for this project we'll just use a style tag in index.html for simplicity.
// Let's add the keyframes directly in the index.html for this project.

// In index.html <style> tag, add:
/*
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
.animate-fadeIn {
  animation: fadeIn 0.5s ease-out forwards;
}
*/
// Let's update index.html to include this.
// I have updated index.html, but I'll add the classes to tailwind.config.js conceptually.
// For the purpose of this file generation, I will define a custom tailwind config conceptually
// that has this animation. For the generated code, I'll just use the class name.
// And will add this to tailwind.config.js which is not part of the output
/*
tailwind.config = {
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
}
*/
// The above script should be added to index.html.
// So, I'll update the index.html content.

const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [visible, setVisible] = React.useState(false);
    React.useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`transition-opacity duration-500 ease-out ${visible ? 'opacity-100' : 'opacity-0'}`}>
            {children}
        </div>
    );
}


export default PageWrapper;
