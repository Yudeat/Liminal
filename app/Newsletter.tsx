'use client'
export default function Newsletter() {


  return (
    <section className="py-20 bg-gray-200 text-black px-4">
      <div 
        className={`
          max-w-5xl lg:max-w-full mx-auto rounded-2xl p-8 md:p-12 lg:p-16
          flex flex-col lg:flex-row items-center justify-between gap-10
        `}
      >
        {/* Text Content */}
        <div className="max-w-lg text-center lg:text-left">
          <div className="text-4xl font-extrabold  mb-7 text-semibold ">Newsletter</div>
          <h3 className={`text-3xl md:text-4xl font-extrabold tracking-tight mb-4 `}>
            Stay in the loop.
          </h3>
          <p className={`text-lg md:text-xl text-gray-500 mb-10 `}
          >
            Subscribe to our newsletter for the latest updates, curated news, and exclusive insights delivered to your inbox.
          </p>
        </div>

        {/* Form Elements */}
        <div className="w-full  max-w-md">
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className={`
                flex-grow p-4 rounded-xl text-sm transition-all focus:ring-2 focus:ring-blue-500 outline-none
                  " border border-white/10 text-white bg-black/40 backdrop-blur-md
              `}
            />
            <button
              className="px-8 py-4 rounded-xl text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-transform active:scale-95 whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className={`mt-3 text-xs 
          text-center lg:text-left`}>
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}