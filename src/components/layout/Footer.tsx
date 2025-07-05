
import React from 'react';
import { DropAnimation } from '@/components/animations/DropAnimation';

export const Footer = () => {
  return (
    <DropAnimation delay={800} dropHeight={30}>
      <footer className="bg-gray-900 border-t border-red-600 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-white font-bold mb-4">AFRIKA'S FINEST</h5>
              <p className="text-gray-400">Celebrating African heritage through premium streetwear.</p>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Quick Links</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-red-500">About Us</a></li>
                <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
                <li><a href="/shipping" className="hover:text-red-500">Shipping Info</a></li>
                <li><a href="/returns" className="hover:text-red-500">Returns</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Categories</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/men" className="hover:text-red-500">Men's Collection</a></li>
                <li><a href="/women" className="hover:text-red-500">Women's Collection</a></li>
                <li><a href="/culture" className="hover:text-red-500">Culture Wear</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-4">Follow Us</h5>
              <p className="text-gray-400">Stay connected for the latest drops and African culture celebrations.</p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Afrika's Finest. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </DropAnimation>
  );
};
