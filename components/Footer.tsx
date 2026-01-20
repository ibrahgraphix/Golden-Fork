import React from "react";
import { Utensils, Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { NAV_LINKS } from "../constants";

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-brand-gold p-2 rounded-full">
                <Utensils size={20} />
              </div>
              <span className="text-2xl font-serif font-bold tracking-tight text-brand-gold">
                Golden Fork
              </span>
            </div>
            <p className="text-gray-400 font-light leading-relaxed">
              Dar es Salaam's premier dining destination. We blend tradition
              with elegance to create unforgettable culinary journeys.
            </p>
            <div className="flex items-center space-x-4">
              {[
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/pages/Golden-Fork-Restaurant/354524191253777/",
                },
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/goldenforktz_/",
                },
                {
                  Icon: Twitter,
                  href: "#", // no official Twitter/X yet
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-brand-gold hover:text-white transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-brand-gold transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-gray-400 font-light">
              <li className="flex items-start space-x-3">
                <span className="text-brand-gold">Loc:</span>
                <span>Palestina Hospital Rd, Dar es Salaam</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brand-gold">Tel:</span>
                <span>+255 659 546 653</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-brand-gold">Mail:</span>
                <span>info@goldenfork.co.tz</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-bold mb-6">Newsletter</h4>
            <p className="text-sm text-gray-400 mb-6 font-light">
              Join our club for exclusive offers and seasonal menu updates.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-brand-gold transition-colors"
              />
              <button className="absolute right-2 top-2 p-2 bg-brand-gold text-white rounded-lg hover:bg-brand-accent transition-colors">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-xs text-gray-500 uppercase tracking-[0.2em]">
          <p>
            © {new Date().getFullYear()} Golden Fork Restaurant. All Rights
            Reserved.
          </p>
          <div className="flex space-x-8">
            <a href="#" className="hover:text-brand-gold">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-brand-gold">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
