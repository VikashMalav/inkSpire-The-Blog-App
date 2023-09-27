import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-3">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">
          InkSpire-The Blog App
        </div>
        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-300">Home</a>
          <a href="#" className="hover:text-gray-300">About</a>
          <a href="#" className="hover:text-gray-300">Services</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
