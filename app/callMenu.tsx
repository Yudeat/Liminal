export default function CallMenu() {
  return (
    <section className="relative  overflow-hidden bg-white border-y border-gray-300 px-6 py-24 md:px-12 lg:px-24">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto flex flex-col items-center text-center md:items-start md:text-left">
        
        <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-6">
          Ready to take the flight? <br className="hidden md:block" />
          <span className="text-pink-600">Let’s make it happen.</span>
        </h2>
        
        <div className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
          <p>
            Sign up for free and start crafting your dream flight, 
            <span className="block md:inline font-medium text-gray-800"> or hit up our sales if you’re thinking big.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button className="px-10 py-4 rounded-full text-base font-bold bg-pink-600 text-white shadow-lg shadow-purple-200 hover:bg-purple-600 hover:-translate-y-1 transition-all active:scale-95">
            Get Started for Free
          </button>
          
          <button className="px-10 py-4 rounded-full text-base font-bold bg-white text-gray-900 border border-gray-200 hover:bg-gray-50 hover:-translate-y-1 transition-all active:scale-95 shadow-sm">
            Contact Sales
          </button>
        </div>
        
      </div>
    </section>
  );
}