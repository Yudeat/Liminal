export default function Newsletter (){
    return (
        <>
        <div className="max-w-2xl text-lg md:text-xl text-gray-400 border-b border-gray-200 pb-4 mb-4">
           Subscribe to our newsletter to get the latest updates and exclusive offers.
           <input type="email" class="w-full p-2 mt-2 border border-gray-200 rounded-md" placeholder="Enter your email address"/>
           <button class="w-full p-2 mt-2 bg-blue-500 text-white rounded-md">Subscribe</button>
        </div>
        </>
    )
}