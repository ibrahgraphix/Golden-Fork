import React from "react";
import { Star, ChevronRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://pbs.twimg.com/media/FPMvGwkX0Ag1dKH.jpg"
          alt="Golden Fork Restaurant Building Exterior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-brand-dark"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center space-x-2 bg-brand-gold/20 backdrop-blur-md border border-brand-gold/30 px-4 py-2 rounded-full mb-8">
          <div className="flex text-brand-gold">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} size={16} fill="currentColor" />
            ))}
            <Star
              size={16}
              className="text-brand-gold/50"
              fill="currentColor"
            />
          </div>
          <span className="text-white text-sm font-medium tracking-wide">
            4.3 / 5 Rating (1,754 reviews)
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
          A Symphony of{" "}
          <span className="text-brand-gold italic">Local Flavors</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Experience the authentic taste of Dar es Salaam. From flame-grilled
          specialties to aromatic spice blends, we celebrate the heart of
          Tanzania on every plate.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#menu"
            className="group w-full sm:w-auto bg-brand-gold text-white px-8 py-4 rounded-full font-bold flex items-center justify-center transition-all hover:bg-brand-accent transform hover:-translate-y-1"
          >
            Explore Our Menu
            <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          {/* <a
            href="#menu"
            className="w-full sm:w-auto bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold transition-all hover:bg-white/20"
          >
            Menu List
          </a> */}
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          className="text-white/50 hover:text-white transition-colors"
        >
          <ChevronRight className="rotate-90 w-8 h-8" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
