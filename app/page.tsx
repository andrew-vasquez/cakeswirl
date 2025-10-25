import Image from "next/image";

export default function Home() {
  const cupcakes = [
    { id: 1, name: "Placeholder", image: "/cupcakes/cupcake1.jpg" },
    { id: 2, name: "Placeholder", image: "/cupcakes/cupcake2.jpg" },
    { id: 3, name: "Placeholder", image: "/cupcakes/cupcake3.jpg" },
    { id: 4, name: "Placeholder", image: "/cupcakes/cupcake4.jpg" },
    { id: 5, name: "Placeholder", image: "/cupcakes/cupcake5.jpg" },
    { id: 6, name: "Placeholder", image: "/cupcakes/cupcake6.jpg" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="relative h-16 w-40">
              <Image 
                src="/cslogo.png" 
                alt="CakeSwirl Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#home" className="text-gray-700 hover:text-red-600 transition-colors duration-300 py-2">Home</a>
              <a href="#cupcakes" className="text-gray-700 hover:text-red-600 transition-colors duration-300 py-2">Cupcakes</a>
              <a href="#about" className="text-gray-700 hover:text-red-600 transition-colors duration-300 py-2">About Us</a>
              <a href="#contact" className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition-colors duration-300">Contact</a>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-red-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Fresh Daily · Family Owned
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Handcrafted <span className="text-red-600">Cupcakes</span> Made With Love
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Every cupcake is a work of art, baked fresh daily with the finest ingredients to bring sweetness to your special moments.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#cupcakes" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 hover:shadow-lg transition-all duration-300 text-center">
                  View Our Cupcakes
                </a>
                <a href="#contact" className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300 text-center">
                  Order Now
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/cupcakes/cupcake1.jpg" 
                    alt="Cupcake" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/cupcakes/cupcake2.jpg" 
                    alt="Cupcake" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/cupcakes/cupcake3.jpg" 
                    alt="Cupcake" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                  <Image 
                    src="/cupcakes/cupcake4.jpg" 
                    alt="Cupcake" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Baked Fresh Daily</h3>
              <p className="text-gray-600">Made from scratch every morning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Family Owned</h3>
              <p className="text-gray-600">50+ years of tradition</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Ingredients</h3>
              <p className="text-gray-600">Only the finest quality</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Orders</h3>
              <p className="text-gray-600">Cakes for any occasion</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cupcakes Section */}
      <section id="cupcakes" className="py-20 bg-gradient-to-b from-white to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-red-600">Signature</span> Cupcakes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each cupcake is a masterpiece, crafted with premium ingredients and decorated to perfection.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cupcakes.map((cupcake) => (
              <div 
                key={cupcake.id} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden bg-gray-50">
                  <Image 
                    src={cupcake.image} 
                    alt={cupcake.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold text-gray-900">{cupcake.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cake Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Custom Cakes for Every Celebration
              </h2>
              <p className="text-xl text-red-50 mb-8">
                From birthdays to weddings, we create stunning custom cakes that are as delicious as they are beautiful. Let us make your special day even sweeter!
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-lg">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Birthday Cakes • Wedding Cakes
                </li>
                <li className="flex items-center text-lg">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Corporate Events • Special Occasions
                </li>
                <li className="flex items-center text-lg">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Custom Designs • On-Time Delivery
                </li>
              </ul>
              <a href="#contact" className="inline-block bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
                Order Your Custom Cake
              </a>
            </div>
            <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/cake.png" 
                alt="Custom Cakes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our <span className="text-red-600">Customers</span> Say
            </h2>
            <p className="text-xl text-gray-600">Don&apos;t just take our word for it</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;The cupcakes from Cake Swirl are absolutely divine! Fresh, moist, and beautifully decorated. They made my daughter&apos;s birthday party unforgettable!&quot;
              </p>
              <p className="font-semibold text-gray-900">- Sarah M.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;We ordered a custom wedding cake and it exceeded all expectations. Not only was it stunning, but it tasted incredible. Highly recommend!&quot;
              </p>
              <p className="font-semibold text-gray-900">- Michael & Jennifer T.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-4">
                &quot;Best cupcakes in Houston! You can taste the quality in every bite. The family recipes really shine through. We&apos;re regular customers now!&quot;
              </p>
              <p className="font-semibold text-gray-900">- David R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden shadow-2xl">
              <Image 
                src="/cupcakes/cupcake5.jpg" 
                alt="About CakeSwirl"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                About <span className="text-red-600">Cake Swirl</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We start fresh everyday from scratch with the finest ingredients with pure vanilla, buttermilk, fresh fruit, creamy butter, fresh eggs, flour, luscious chocolates and blend them all together to create our divine cakes and cupcakes. Our family recipes are created with our customers in mind. As a family owned and operated business, here at Cake Swirl our customers are very important to us. Try our cakes and we are sure you will come back for more.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Baking has been in our family for generations. Our grandmothers, mothers and aunts all have passed down delicious recipes that will be passed down for generations to come. Aunt Bertha baked for over 50 years. She started out baking for family and friends in her home. Everyone loves her famous chocolate cake that melts in your mouth.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our love for great tasting cake gave us the vision to launch Cake Swirl. We will guarantee that our cakes are baked fresh and delivered on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to <span className="text-red-600">Taste</span> the Magic?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Visit us today or place an order for your next celebration. We can&apos;t wait to sweeten your day!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="tel:281-443-2253" className="bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 hover:shadow-lg transition-all duration-300">
              Call Us: (281) 443-2253
            </a>
            <a href="mailto:hello@cakeswirl.com" className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
              Email Us
            </a>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visit Our Store</h3>
            <p className="text-lg text-gray-700 mb-2">📍 156 FM-1960 Suite K</p>
            <p className="text-lg text-gray-700 mb-4">Houston, TX 77073</p>
            <p className="text-gray-600">Open 7 Days a Week</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="relative h-12 w-32 mb-4">
                <Image 
                  src="/cslogo.png" 
                  alt="CakeSwirl Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-400">
                Handcrafted cupcakes and custom cakes made with love, bringing sweetness to every moment.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Home</a></li>
                <li><a href="#cupcakes" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Cupcakes</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-red-600 transition-colors duration-300">About Us</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-red-600 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li>📍 156 FM-1960 Suite K</li>
                <li>Houston, TX 77073</li>
                <li>📞 (281) 443-2253</li>
                <li>✉️ hello@cakeswirl.com</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Cake Swirl. All rights reserved. Made with ❤️ and flour.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
