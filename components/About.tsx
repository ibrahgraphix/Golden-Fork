
import React from 'react';
import { Clock, MapPin, CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1200"
                alt="Golden Fork Signature Mixed Grill Platter"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-gold p-8 rounded-2xl shadow-xl hidden sm:block">
              <div className="text-white text-center">
                <p className="text-4xl font-serif font-bold">12+</p>
                <p className="text-sm uppercase tracking-widest font-medium">Years of Experience</p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <h3 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">Our Story</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">Culinary Excellence in Palestina Hospital Rd</h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light italic">
              "Golden Fork was born from a simple desire: to bring families together over meals that speak the language of home, with the elegance of world-class service."
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Located in the heart of Dar es Salaam, we've become a landmark for those seeking authentic Tanzanian cuisine with a modern twist. Whether you're joining us for a celebratory dinner or grabbing a quick bite through our drive-through, we guarantee quality in every bite.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-gold/10 rounded-lg">
                  <Clock className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Daily Service</h4>
                  <p className="text-sm text-gray-500">8:00 AM - 11:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-brand-gold/10 rounded-lg">
                  <MapPin className="text-brand-gold w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Central Location</h4>
                  <p className="text-sm text-gray-500">Dar es Salaam, Tanzania</p>
                </div>
              </div>
            </div>

            <ul className="space-y-3">
              {['Dine-in Experience', 'Convenient Drive-through', 'Secure No-contact Delivery'].map((service) => (
                <li key={service} className="flex items-center space-x-3 text-brand-dark font-medium">
                  <CheckCircle2 className="text-brand-gold w-5 h-5" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
