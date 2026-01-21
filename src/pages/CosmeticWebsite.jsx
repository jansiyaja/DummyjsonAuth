import React, { useState, useEffect, useRef } from "react";
import { Heart, ChevronRight, Star, Play, Sparkles } from "lucide-react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import "../styles/animations.css";
import {
  collections,
  galleryImages,
  lipstickShades,
  products,
  
} from "../constants/data";
import Features from "./sections/Features";

export default function CosmeticWebsite() {
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedShade, setSelectedShade] = useState(0);

  return (
    <div className="min-h-screen bg-[#faf8f5] font-sans">
      <Header />
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-rose-100 via-pink-50 to-amber-50"></div>
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-20 left-20 w-96 h-96 bg-rose-400 rounded-full filter blur-3xl animate-blob"></div>
            <div className="absolute top-40 right-20 w-96 h-96 bg-pink-400 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-amber-300 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
          </div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <div className="mb-6 inline-flex items-center space-x-2 bg-white/40 backdrop-blur-md px-6 py-2 rounded-full border border-white/50 animate-slideDown">
            <Sparkles className="w-4 h-4 text-rose-500" />
            <span className="text-sm tracking-wide text-gray-700">
              New Spring Collection 2026
            </span>
          </div>

          <h1 className="text-7xl md:text-8xl lg:text-9xl font-light mb-6 text-gray-900 tracking-tight animate-fadeIn">
            Redefine
            <span className="block bg-linear-to-r from-rose-500 via-pink-500 to-amber-400 bg-clip-text text-transparent mt-2 animate-linear">
              Beauty
            </span>
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-600 mb-12 font-light tracking-wide animate-fadeIn"
            style={{ animationDelay: "0.3s" }}
          >
            Where science meets artistry, and luxury becomes ritual
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fadeIn"
            style={{ animationDelay: "0.6s" }}
          >
            <button className="group relative px-12 py-4 text-sm tracking-widest overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-r from-rose-500 to-pink-500 transition-transform duration-300 group-hover:scale-105"></div>
              <div className="absolute inset-0 bg-linear-to-r from-pink-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative text-white font-medium">
                EXPLORE COLLECTION
              </span>
            </button>
            <button className="px-12 py-4 text-sm tracking-widest bg-white/40 backdrop-blur-md border border-white/50 hover:bg-white/60 transition-all duration-300 text-gray-900">
              WATCH VIDEO
            </button>
          </div>
        </div>

        <div className="absolute bottom-10 right-10 w-72 h-72 hidden lg:block">
          <div className="relative w-full h-full animate-float">
            <div className="absolute inset-0 bg-white/30 backdrop-blur-lg rounded-3xl border border-white/50 shadow-2xl p-6 transform rotate-6 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400&q=80"
                alt="Product"
                className="w-full h-full object-contain filter drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-linear-to-r from-rose-500 via-pink-500 to-amber-400 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-4xl md:text-6xl font-light text-white mx-8">
            ✦ Radiate Confidence
          </span>
          <span className="text-4xl md:text-6xl font-light text-white mx-8">
            ✦ Embrace Luxury
          </span>
          <span className="text-4xl md:text-6xl font-light text-white mx-8">
            ✦ Reveal Beauty
          </span>
          <span className="text-4xl md:text-6xl font-light text-white mx-8">
            ✦ Radiate Confidence
          </span>
        </div>
      </section>
      <Features />
      <section className="py-24 px-6 bg-linear-to-br from-rose-50 via-pink-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4 text-gray-900">
              Visual Stories
            </h2>
            <p className="text-gray-600 text-lg font-light">
              Moments of beauty, captured
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-rose-500/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 backdrop-blur-sm"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/90 backdrop-blur-md rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 delay-100">
                    <Heart className="w-6 h-6 text-rose-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      \
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-light mb-4 text-gray-900">
            Signature Collection
          </h2>
          <p className="text-gray-600 text-lg font-light">
            Handcrafted elegance for the modern muse
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white/50 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-80 overflow-hidden rounded-t-3xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-lg font-light italic">"{product.quote}"</p>
                </div>

                <button className="absolute top-4 right-4 w-10 h-10 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-rose-500 hover:text-white border border-white/50">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-light text-gray-900">
                    {product.name}
                  </h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-light text-gray-900">
                    {product.price}
                  </span>
                  <button className="bg-linear-to-r from-rose-500 to-pink-500 text-white px-6 py-2 text-xs tracking-wider hover:from-pink-500 hover:to-amber-400 transition-all duration-300 rounded-full">
                    ADD TO BAG
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Collections Showcase */}
      <section className="py-24 px-6 bg-linear-to-b from-white to-rose-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4 text-gray-900">
              Curated Collections
            </h2>
            <p className="text-gray-600 text-lg font-light">
              Each collection tells a story
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <div
                key={index}
                className="group relative h-96 overflow-hidden rounded-3xl cursor-pointer"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-3xl font-light mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-sm font-light mb-4 opacity-90">
                    {collection.description}
                  </p>
                  <button className="flex items-center space-x-2 text-sm tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                    <span>DISCOVER</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-light mb-4 text-gray-900">
              Find Your
              <span className="block bg-linear-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
                Perfect Shade
              </span>
            </h2>
            <p className="text-gray-600 text-lg font-light">
              8 luxurious lipstick colors crafted for every moment
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
            {lipstickShades.map((shade, index) => (
              <div
                key={index}
                className={`group cursor-pointer transition-all duration-500 ${
                  selectedShade === index ? "scale-110" : "hover:scale-105"
                }`}
                onClick={() => setSelectedShade(index)}
              >
                <div className="relative">
                  <div
                    className="w-full aspect-square rounded-full shadow-xl transition-all duration-500 group-hover:shadow-2xl"
                    style={{
                      background: `linear-linear(135deg, ${shade.color} 0%, ${shade.color}dd 100%)`,
                      border:
                        selectedShade === index
                          ? "4px solid white"
                          : "2px solid white",
                      boxShadow:
                        selectedShade === index
                          ? `0 10px 40px ${shade.color}66, 0 0 0 4px ${shade.color}33`
                          : `0 4px 20px ${shade.color}44`,
                    }}
                  ></div>
                  {selectedShade === index && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-linear-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center animate-bounce">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  )}
                </div>
                <p className="text-center mt-3 text-xs font-light text-gray-600 group-hover:text-gray-900 transition-colors">
                  {shade.name}
                </p>
              </div>
            ))}
          </div>

          <div className="relative h-96 rounded-3xl overflow-hidden bg-linear-to-br from-gray-900 to-gray-800">
            <div className="absolute inset-0">
              <img
                src={lipstickShades[selectedShade].image}
                alt={lipstickShades[selectedShade].name}
                className="w-full h-full object-cover opacity-40 transition-all duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
              <div className="max-w-2xl">
                <div className="flex items-center space-x-4 mb-4">
                  <div
                    className="w-16 h-16 rounded-full shadow-2xl"
                    style={{
                      backgroundColor: lipstickShades[selectedShade].color,
                    }}
                  ></div>
                  <div>
                    <h3 className="text-4xl font-light mb-1">
                      {lipstickShades[selectedShade].name}
                    </h3>
                    <p className="text-gray-300">Velvet Matte Collection</p>
                  </div>
                </div>
                <p className="text-lg opacity-90 mb-6">
                  Luxurious, long-lasting color with a velvety smooth finish.
                  Infused with nourishing oils for comfortable all-day wear.
                </p>
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full text-sm tracking-wide hover:bg-rose-500 hover:text-white transition-all duration-300">
                  ADD TO CART - $45
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 bg-linear-to-br from-rose-500 via-pink-500 to-amber-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative group">
              <div className="relative h-96 lg:h-125 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1200&q=80"
                  alt="Video Thumbnail"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>

                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Play
                      className="w-8 h-8 text-rose-500 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </button>

                <div className="absolute inset-0 rounded-3xl border-4 border-white/50 group-hover:border-white/80 transition-all duration-300"></div>
              </div>

              <div className="absolute -top-6 -right-6 w-32 h-32 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 animate-float hidden lg:block"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/20 backdrop-blur-lg rounded-full border border-white/30 animate-float animation-delay-2000 hidden lg:block"></div>
            </div>

            <div className="text-white">
              <h2 className="text-5xl md:text-6xl font-light mb-6 leading-tight">
                The Art of
                <span className="block">Application</span>
              </h2>
              <p className="text-xl font-light mb-8 opacity-90 leading-relaxed">
                Watch our beauty experts demonstrate the perfect lipstick
                application technique. Learn professional tips and tricks for a
                flawless, long-lasting finish that enhances your natural beauty.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shrink-0">
                    <span className="text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Prep & Prime</h4>
                    <p className="text-sm opacity-80">
                      Exfoliate and moisturize for smooth application
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shrink-0">
                    <span className="text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Perfect Outline</h4>
                    <p className="text-sm opacity-80">
                      Define your lip shape with precision
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shrink-0">
                    <span className="text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Fill & Blend</h4>
                    <p className="text-sm opacity-80">
                      Apply color evenly for stunning results
                    </p>
                  </div>
                </div>
              </div>

              <button className="bg-white text-rose-500 px-10 py-4 rounded-full text-sm tracking-wider font-medium hover:bg-gray-900 hover:text-white transition-all duration-300 shadow-xl">
                WATCH FULL TUTORIAL
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-gray-900 via-rose-900 to-gray-900"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-rose-500 rounded-full filter blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8">
            <div className="w-24 h-24 bg-linear-to-br from-rose-400 to-pink-300 rounded-full mx-auto mb-6 animate-float"></div>
          </div>
          <blockquote className="text-3xl md:text-4xl font-light italic mb-8 leading-relaxed text-white">
            "LUXĒ transformed my beauty routine into a daily celebration of
            self-love. Every product feels like a work of art."
          </blockquote>
          <p className="text-lg font-light text-rose-200">— SOPHIA LAURENT</p>
          <p className="text-sm text-rose-300/60">Beauty Editor, Vogue</p>

          <div className="flex items-center justify-center space-x-2 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
