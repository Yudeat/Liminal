'use client';
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa6";

const springBounce = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 } 
  }
};

export default function RatingSection() {
  return (
    <section className="bg-white py-24 px-6 border-y border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Metric Header */}
        <div className="grid lg:grid-cols-3 gap-12 mb-24 items-end">
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              variants={springBounce}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-black text-white text-[10px] font-black uppercase tracking-[0.2em]"
            >
              Audited Success
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.9]">
              Verified by the <br /> 
              <span className="text-pink-400 italic font-serif font-light lowercase">boldest</span> students.
            </h2>
          </div>
          
          <div className="flex flex-col items-start lg:items-end gap-2">
            <div className="flex gap-1 text-green-500 text-2xl">
              {[...Array(5)].map((_, i) => <FaStar key={i} />)}
            </div>
            <p className="text-sm font-black uppercase tracking-widest text-gray-400">
              4.9/5 Average Global Rating
            </p>
          </div>
        </div>

        {/* Bouncing Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Liminal didn't just help me apply; it taught me how the system actually works. I saved $3,000 in agency fees.",
              author: "Arjun M.",
              uni: "University of Toronto",
              rating: "5.0"
            },
            {
              quote: "The DIY Visa Kit is surgical. My interview lasted 3 minutes because my documentation was flawless.",
              author: "Sofia R.",
              uni: "LMU Munich",
              rating: "4.9"
            },
            {
              quote: "Finally, a platform that respects student autonomy. No pushy sales, just pure data and clear roadmaps.",
              author: "James L.",
              uni: "University of Sydney",
              rating: "5.0"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={springBounce}
              custom={i}
              className="relative p-10 rounded-[40px] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:shadow-gray-200/50 transition-all duration-500 group"
            >
              <FaQuoteLeft className="text-gray-200 text-4xl mb-6 group-hover:text-pink-100 transition-colors" />
              
              <p className="text-lg font-medium text-gray-600 leading-relaxed mb-10 italic">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center justify-between border-t border-gray-200 pt-8">
                <div>
                  <h4 className="text-sm font-black uppercase tracking-tight text-black">{testimonial.author}</h4>
                  <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{testimonial.uni}</p>
                </div>
                <div className="bg-white px-3 py-1 rounded-full border border-gray-200 text-[10px] font-black">
                  {testimonial.rating}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Logos (Monochromatic) */}
        <div className="mt-24 pt-12 border-t border-gray-50 flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-30 grayscale">
            <span className="text-xl font-black tracking-tighter uppercase">Oxford</span>
            <span className="text-xl font-black tracking-tighter uppercase">Stanford</span>
            <span className="text-xl font-black tracking-tighter uppercase">MIT</span>
            <span className="text-xl font-black tracking-tighter uppercase">ETH Zurich</span>
            <span className="text-xl font-black tracking-tighter uppercase">Toronto</span>
        </div>
      </div>
    </section>
  );
}