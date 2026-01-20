import React, { useEffect } from "react";
import { FULL_MENU_DATA } from "../constants";
import { ChevronLeft } from "lucide-react";

interface FullMenuProps {
  onBack: () => void;
}

const FullMenu: React.FC<FullMenuProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-32 pb-24 bg-brand-light min-h-screen">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-6">
          <button
            onClick={onBack}
            className="flex items-center text-brand-gold font-bold hover:text-brand-accent transition-colors self-start"
          >
            <ChevronLeft className="mr-1" size={20} />
            Back to Home
          </button>
          <div className="text-center md:text-right">
            <h1 className="text-4xl md:text-6xl font-serif text-brand-dark mb-2">
              Our Complete Menu
            </h1>
            <p className="text-gray-500 font-light italic">
              Authentic flavors from the heart of Tanzania
            </p>
          </div>
        </div>

        <div className="space-y-16">
          {Object.entries(FULL_MENU_DATA).map(([category, items]) => (
            <div key={category} className="space-y-8">
              <div className="flex items-center space-x-6">
                <h2 className="text-2xl md:text-3xl font-serif text-brand-gold whitespace-nowrap">
                  {category}
                </h2>
                <div className="w-full h-px bg-brand-gold/20"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {items.map((item, idx) => (
                  <div key={idx} className="group relative">
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold text-brand-dark group-hover:text-brand-gold transition-colors">
                        {item.name}
                      </h3>
                      <div className="flex-grow mx-4 border-b border-dotted border-gray-300"></div>
                      <span className="font-bold text-brand-dark whitespace-nowrap">
                        TSh {item.price.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-brand-dark text-white rounded-3xl text-center space-y-6 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-serif mb-4">
              Craving Something Specific?
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-8 font-light">
              Our chefs are happy to accommodate dietary requirements or custom
              spice levels. Feel free to ask our staff.
            </p>
            {/* <button 
              onClick={onBack}
              className="px-10 py-4 bg-brand-gold text-white rounded-full font-bold hover:bg-brand-accent transition-all"
            >
              Order for Delivery
            </button> */}
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        </div>
      </div>
    </div>
  );
};

export default FullMenu;
