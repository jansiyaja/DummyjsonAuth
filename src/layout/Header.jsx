import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Header = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    

      useEffect(() => {
        const handleScroll = () => {
          setScrolled(window.scrollY > 50);
    
          // Change images based on scroll position
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          const imageChangeThreshold = windowHeight * 0.5;
    
          if (
            scrollPosition > imageChangeThreshold &&
            scrollPosition < imageChangeThreshold * 3
          ) {
            const newIndex =
              Math.floor((scrollPosition - imageChangeThreshold) / 400) %
              scrollImages.length;
            setCurrentImageIndex(newIndex);
          }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${scrolled ? "bg-white/70 backdrop-blur-xl shadow-2xl border-b border-white/20" : "bg-linear-to-b from-black/20 to-transparent backdrop-blur-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-linear-to-br from-rose-400 via-pink-300 to-amber-200 rounded-full animate-pulse"></div>
              <div className="absolute inset-0 bg-linear-to-br from-rose-400 via-pink-300 to-amber-200 rounded-full blur-md opacity-50 animate-pulse"></div>
            </div>
            <span
              className={`text-2xl font-light tracking-widest ${scrolled ? "text-gray-900" : "text-white"} transition-colors duration-300`}
            >
              LUXĒ
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className={`text-sm tracking-wide ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            >
              NEW IN
            </a>
            <a
              href="#"
              className={`text-sm tracking-wide ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            >
              SHOP
            </a>
            <a
              href="#"
              className={`text-sm tracking-wide ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            >
              COLLECTIONS
            </a>
            <a
              href="#"
              className={`text-sm tracking-wide ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            >
              ABOUT
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <Search
              className={`w-5 h-5 cursor-pointer ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            />
            <User
              className={`w-5 h-5 cursor-pointer ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            />
            <Heart
              className={`w-5 h-5 cursor-pointer ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            />
            <ShoppingBag
              className={`w-5 h-5 cursor-pointer ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              {isMenuOpen ? (
                <X
                  className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`}
                />
              ) : (
                <Menu
                  className={`w-6 h-6 ${scrolled ? "text-gray-900" : "text-white"}`}
                />
              )}
            </button>
          </div>
        </div>

      
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${isMenuOpen ? "max-h-64 mt-4" : "max-h-0"}`}
        >
          <nav className="flex flex-col space-y-4 pb-4">
            <a
              href="#"
              className={`text-sm tracking-wide ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            >
              NEW IN
            </a>
            <a
              href="#"
              className={`text-sm tracking-wide ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            >
              SHOP
            </a>
            <a
              href="#"
              className={`text-sm tracking-wide ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            >
              COLLECTIONS
            </a>
            <a
              href="#"
              className={`text-sm tracking-wide ${scrolled ? "text-gray-900 hover:text-rose-500" : "text-white hover:text-rose-300"} transition-colors duration-300`}
            >
              ABOUT
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header