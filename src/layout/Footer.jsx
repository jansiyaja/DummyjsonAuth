import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-linear-to-br from-rose-400 via-pink-300 to-amber-200 rounded-full"></div>
              <span className="text-2xl font-light tracking-widest">LUXĒ</span>
            </div>
            <p className="text-gray-400 text-sm font-light leading-relaxed">
              Redefining beauty through innovation, artistry, and sustainable
              luxury.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-sm tracking-widest mb-4">SHOP</h3>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Best Sellers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Collections
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-sm tracking-widest mb-4">ABOUT</h3>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm tracking-widest mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm text-gray-400 font-light">
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Shipping & Returns
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-rose-400 transition-colors duration-300"
                >
                  Size Guide
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-light mb-4 md:mb-0">
            © 2026 LUXĒ. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm"
            >
              Pinterest
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-rose-400 transition-colors duration-300 text-sm"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer