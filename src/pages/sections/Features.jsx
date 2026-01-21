import React, { useState } from 'react'
import { scrollImages } from '../../constants/data';

const Features = () => {
    
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <section className="relative py-28 px-6 bg-gray-950 text-white overflow-hidden">
      {/* ambient background glow */}
      <div className="absolute inset-0 bg-radial from-rose-500/10 via-transparent to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE STACK */}
          <div className="relative h-150 rounded-3xl overflow-hidden">
                       {scrollImages.map((img, index) => (
                         <div
                           key={index}
                           className={`absolute inset-0 transition-all duration-1000 ${
                             currentImageIndex === index
                               ? "opacity-100 scale-100"
                               : "opacity-0 scale-95"
                           }`}
                         >
                           <img
                             src={img.url}
                             alt={img.title}
                             className="w-full h-full object-cover"
                           />
                           <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent"></div>
                           <div className="absolute bottom-0 left-0 right-0 p-12">
                             <h3 className="text-5xl font-light mb-2">{img.title}</h3>
                             <p className="text-lg opacity-80">{img.subtitle}</p>
                           </div>
                         </div>
                       ))}
                     </div>

          {/* CONTENT */}
          <div className="space-y-10">
            {/* heading */}
            <div>
              <p className="uppercase tracking-widest text-rose-400 text-sm mb-4">
                Science Meets Beauty
              </p>
              <h2 className="text-5xl md:text-6xl font-light leading-tight">
                Advanced
                <span className="block bg-linear-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Formulations
                </span>
              </h2>
            </div>

            {/* features */}
            <div className="space-y-6">
              {scrollImages.map((feature, index) => {
                const active = currentImageIndex === index;

                return (
                  <div
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`group relative p-6 rounded-2xl cursor-pointer transition-all duration-500 border backdrop-blur-sm ${
                      active
                        ? "bg-white/10 border-rose-400/50 scale-[1.03] shadow-lg shadow-rose-500/10"
                        : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-rose-400/30"
                    }`}
                  >
                    {/* vertical timeline indicator */}
                    <span
                      className={`absolute left-0 top-0 h-full w-1 rounded-full transition ${
                        active
                          ? "bg-linear-to-b from-rose-400 to-pink-400"
                          : "bg-transparent group-hover:bg-rose-400/30"
                      }`}
                    />

                    <div className="flex gap-5 items-start">
                      {/* number */}
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-semibold shrink-0 transition ${
                          active
                            ? "bg-linear-to-br from-rose-400 to-pink-400 text-white shadow-lg"
                            : "bg-white/10 text-gray-300"
                        }`}
                      >
                        {index + 1}
                      </div>

                      {/* text */}
                      <div>
                        <h4 className="text-2xl font-light mb-2 tracking-wide">
                          {feature.title}
                        </h4>

                        {/* enhanced subtitle */}
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                          {feature.subtitle}
                        </p>

                        {/* subtle divider */}
                        <div
                          className={`mt-4 h-px w-24 transition ${
                            active
                              ? "bg-linear-to-r from-rose-400 to-transparent"
                              : "bg-white/10 group-hover:bg-rose-400/40"
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features