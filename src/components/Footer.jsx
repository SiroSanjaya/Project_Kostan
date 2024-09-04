import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Ikon media sosial

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-4 md:px-8">
        {/* Info Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm leading-relaxed">
              Kostan offers a wide range of accommodation options to suit your needs. Discover your perfect stay with us.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
              <li><a href="/services" className="hover:underline">Services</a></li>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm leading-relaxed">123 Kostan Street, Jakarta, Indonesia</p>
            <p className="text-sm leading-relaxed">Email: support@kostan.com</p>
            <p className="text-sm leading-relaxed">Phone: +62 123 456 7890</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="text-center mb-8">
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex justify-center space-x-4 text-gray-400">
            <a href="https://facebook.com" className="hover:text-white"><FaFacebook size={24} /></a>
            <a href="https://twitter.com" className="hover:text-white"><FaTwitter size={24} /></a>
            <a href="https://instagram.com" className="hover:text-white"><FaInstagram size={24} /></a>
            <a href="https://linkedin.com" className="hover:text-white"><FaLinkedin size={24} /></a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-gray-400">
          <p>© 2024 Kostan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
