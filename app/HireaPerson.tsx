export default function HireaPerson() {
  return (
    <section className="relative overflow-hidden bg-slate-50 border-y border-gray-200 px-6 py-20 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Text Content */}
        <div className="max-w-2xl text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prefer a human touch? <span className="text-pink-600">Talk to an expert.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            While AI is fast, nothing beats the nuanced judgment of a seasoned professional. 
            Our consultants bring years of industry experience to help you navigate 
            complex challenges with confidence.
          </p>
        </div>

        {/* Action Area */}
        <div className="flex flex-col items-center gap-4 shrink-0">
          <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-medium hover:bg-red-500 transition-all shadow-lg active:scale-95">
            Book a Consultation
          </button>
          <p className="text-sm text-gray-500 font-medium italic">
            Real people. Sense in trust .
          </p>
        </div>

      </div>
    </section>
  );
}