
import React from 'react';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">Visit Us</h3>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mt-2">Find Our Golden Fork</h2>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start space-x-4 p-6 bg-brand-light rounded-2xl border border-gray-100 transition-colors hover:border-brand-gold">
                <div className="bg-brand-gold p-3 rounded-xl text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Our Address</h4>
                  <p className="text-gray-600">Palestina Hospital Rd, Dar es Salaam</p>
                  <p className="text-sm text-gray-400">Tanzania (669F+65)</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-brand-light rounded-2xl border border-gray-100 transition-colors hover:border-brand-gold">
                <div className="bg-brand-gold p-3 rounded-xl text-white">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Call Us</h4>
                  <p className="text-gray-600 text-lg font-medium">+255 659 546 653</p>
                  <p className="text-sm text-gray-400">Available during operating hours</p>
                  <a href="tel:+255659546653" className="text-brand-gold text-sm font-bold mt-2 inline-block hover:underline">
                    Click to Call Now
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-brand-light rounded-2xl border border-gray-100 transition-colors hover:border-brand-gold">
                <div className="bg-brand-gold p-3 rounded-xl text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-lg">Opening Hours</h4>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="flex justify-between w-48"><span>Mon - Thu:</span> <span className="font-medium">8AM - 10PM</span></p>
                    <p className="flex justify-between w-48"><span>Fri - Sun:</span> <span className="font-medium">8AM - 11PM</span></p>
                  </div>
                </div>
              </div>
            </div>

            <button className="w-full sm:w-auto flex items-center justify-center space-x-2 bg-brand-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-brand-gold transition-colors">
              <Navigation size={20} />
              <span>Get Directions</span>
            </button>
          </div>

          <div className="h-[500px] lg:h-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
            {/* Simple embedded map for Dar es Salaam area */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15848.373512285496!2d39.2415!3d-6.7583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x185c490000000001%3A0x0!2sPalestina%20Hospital%20Rd%2C%20Dar%20es%20Salaam%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Golden Fork Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
