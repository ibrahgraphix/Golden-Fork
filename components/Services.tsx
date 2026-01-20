
import React from 'react';
import { UtensilsCrossed, Truck, Car } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <UtensilsCrossed size={32} />,
      title: "Dine-in Experience",
      desc: "Elegant seating, warm lighting, and music that sets the perfect mood for your meal."
    },
    {
      icon: <Car size={32} />,
      title: "Quick Drive-through",
      desc: "On the move? Get your favorites fresh and fast without leaving your car."
    },
    {
      icon: <Truck size={32} />,
      title: "Safe Delivery",
      desc: "Professional delivery partners ensuring your food arrives hot with no-contact options."
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Exceptional Services</h2>
          <p className="text-gray-400 max-w-xl mx-auto">We provide multiple ways for you to enjoy the Golden Fork experience, prioritized for your safety and convenience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 transition-colors group">
              <div className="w-16 h-16 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold mb-8 group-hover:scale-110 transition-transform">
                {s.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed font-light">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
