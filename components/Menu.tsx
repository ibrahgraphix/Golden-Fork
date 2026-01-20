
import React from 'react';
import { FEATURED_MENU } from '../constants';
import { ShoppingBag } from 'lucide-react';

interface MenuProps {
  onShowFullMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ onShowFullMenu }) => {
  return (
    <section id="menu" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative leaf/shape element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-brand-gold/5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">Chef's Recommendations</h3>
          <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">Our Featured Dishes</h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURED_MENU.map((item) => (
            <div key={item.id} className="group bg-brand-light rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-brand-gold border border-brand-gold/20">
                  {item.category}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <h4 className="text-xl font-serif font-bold text-brand-dark group-hover:text-brand-gold transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-sm text-gray-500 line-clamp-2 font-light">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <span className="text-lg font-bold text-brand-dark">
                    TSh {item.price.toLocaleString()}
                  </span>
                  <button className="p-2 bg-brand-gold text-white rounded-full hover:bg-brand-accent transition-colors">
                    <ShoppingBag size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button 
            onClick={onShowFullMenu}
            className="inline-flex items-center px-8 py-3 bg-brand-dark text-white rounded-full font-bold hover:bg-brand-gold transition-colors group"
          >
            View Full Menu
            <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
