
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-light">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0">
          <div>
            <h3 className="text-brand-gold font-bold uppercase tracking-[0.2em] text-sm">Testimonials</h3>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark">What Our Guests Say</h2>
          </div>
          <div className="flex items-center space-x-4 bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100">
            <div className="text-center">
              <p className="text-3xl font-bold text-brand-dark">4.3</p>
              <div className="flex text-brand-gold">
                {[1, 2, 3, 4].map(i => <Star key={i} size={14} fill="currentColor" />)}
                <Star size={14} />
              </div>
            </div>
            <div className="h-10 w-px bg-gray-200"></div>
            <div>
              <p className="text-sm font-bold text-brand-dark">1,754 Reviews</p>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Verified Dining</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 relative group transition-all hover:shadow-2xl">
              <Quote className="absolute top-6 right-8 text-brand-gold/10 w-12 h-12" />
              <div className="flex text-brand-gold mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic font-light leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-brand-gold/10 flex items-center justify-center font-bold text-brand-gold">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">{review.author}</h4>
                  <p className="text-xs text-gray-400 uppercase tracking-widest">{review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
