import React from 'react';
import { Building2, MapPin, Phone, Mail, Users, Dumbbell, Coffee, Car, Wifi, Shield, Clock, Star, CheckCircle, TrendingUp, Award } from 'lucide-react';

function App() {
  const facilities = [
    {
      icon: Building2,
      title: "Premium Offices",
      description: "Modern office spaces with floor-to-ceiling windows and stunning city views",
      image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Users,
      title: "Executive Club",
      description: "Exclusive networking space for business professionals and members",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Dumbbell,
      title: "Luxury Spa",
      description: "Full-service spa and wellness center for relaxation and rejuvenation",
      image: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Coffee,
      title: "Business Lounge",
      description: "Comfortable lounge areas for meetings and casual business discussions",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Car,
      title: "Secure Parking",
      description: "Multi-level parking facility with 24/7 security and valet services",
      image: "https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Wifi,
      title: "High-Speed Internet",
      description: "Enterprise-grade fiber optic connectivity throughout the building",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Shield,
      title: "24/7 Security",
      description: "Advanced security systems with professional security personnel",
      image: "https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    },
    {
      icon: Clock,
      title: "Concierge Services",
      description: "Professional concierge available to assist with various business needs",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
    }
  ];

  const officeSpaces = [
    {
      title: "Executive Suites",
      size: "500-1,200 sq ft",
      capacity: "5-15 people",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Corner offices with panoramic views", "Private meeting rooms", "Executive furnishing included"]
    },
    {
      title: "Open Plan Offices",
      size: "1,500-3,000 sq ft",
      capacity: "20-50 people",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Flexible workspace design", "Collaborative areas", "Natural lighting throughout"]
    },
    {
      title: "Private Offices",
      size: "200-400 sq ft",
      capacity: "1-4 people",
      image: "https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      features: ["Sound-proof design", "Premium finishes", "Dedicated phone lines"]
    }
  ];

  const rentalBenefits = [
    {
      icon: TrendingUp,
      title: "Prime Business Address",
      description: "Prestigious Mombasa Road location enhances your company's professional image and credibility"
    },
    {
      icon: Award,
      title: "All-Inclusive Packages",
      description: "Utilities, maintenance, security, and concierge services included in competitive rental rates"
    },
    {
      icon: CheckCircle,
      title: "Flexible Lease Terms",
      description: "Short and long-term options available with scalable space solutions as your business grows"
    },
    {
      icon: Users,
      title: "Networking Opportunities",
      description: "Connect with other successful businesses and professionals in our exclusive executive club"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-blue-700" />
              <h1 className="text-2xl font-bold text-gray-900">Eens Business Park</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-700 transition-colors duration-200">About</a>
              <a href="#offices" className="text-gray-700 hover:text-blue-700 transition-colors duration-200">Office Spaces</a>
              <a href="#facilities" className="text-gray-700 hover:text-blue-700 transition-colors duration-200">Facilities</a>
              <a href="#location" className="text-gray-700 hover:text-blue-700 transition-colors duration-200">Location</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-700 transition-colors duration-200">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)'
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/80"></div>
        
        <div className="relative text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Eens Business Park
          </h1>
          <p className="text-xl md:text-2xl mb-4 opacity-90">
            Modern Cobalt Blue Ceramic Architecture
          </p>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <MapPin className="h-5 w-5" />
            <span className="text-lg">Mombasa Road, Nairobi, Kenya</span>
          </div>
          <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
            Where innovation meets elegance. Experience premium business facilities in Kenya's most distinguished corporate destination.
          </p>
          <div className="bg-green-600 text-white px-6 py-3 rounded-lg inline-block mb-8 font-semibold">
            🏢 Premium Office Spaces Available for Rent - Move-in Ready!
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-800 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              View Office Spaces
            </button>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white">
              Schedule Tour
            </button>
          </div>
        </div>
      </section>

      {/* Why Rent Here Section */}
      <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eens Business Park?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join Kenya's most successful businesses in our premium corporate environment designed for growth and success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentalBenefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-l-4 border-green-500"
                >
                  <div className="bg-green-100 p-3 rounded-lg w-fit mb-4">
                    <Icon className="h-6 w-6 text-green-700" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office Spaces Section */}
      <section id="offices" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Premium Office Spaces for Rent
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our selection of modern, fully-equipped office spaces designed to elevate your business presence and productivity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {officeSpaces.map((office, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img 
                    src={office.image}
                    alt={office.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Available Now
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {office.title}
                  </h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-blue-700 font-semibold">{office.size}</span>
                    <span className="text-gray-600">{office.capacity}</span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {office.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-200">
                    Inquire About Rental
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-blue-50 p-8 rounded-xl inline-block">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Move In?</h3>
              <p className="text-blue-700 mb-6 max-w-2xl">
                All office spaces come fully furnished with modern furniture, high-speed internet, and access to all building amenities. 
                Flexible lease terms starting from 6 months to 5 years available.
              </p>
              <button className="bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Rental Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Architectural Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Eens Business Park stands as a testament to modern architectural innovation. Our striking cobalt blue ceramic facade creates a distinctive landmark along Mombasa Road, housing premium business facilities within a single, intelligently designed building.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Every detail has been carefully crafted to provide an exceptional business environment, from the elegant lobby to the state-of-the-art elevator systems that seamlessly connect all floors of our premium facilities.
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-8">
                <h3 className="text-xl font-bold text-green-800 mb-3">Perfect for Growing Businesses</h3>
                <p className="text-green-700">
                  Our flexible office solutions and premium amenities make Eens Business Park the ideal choice for companies looking to establish or expand their presence in Nairobi's thriving business district.
                </p>
              </div>
              <div className="flex space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">50+</div>
                  <div className="text-gray-600">Premium Offices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">15</div>
                  <div className="text-gray-600">Floors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-700">24/7</div>
                  <div className="text-gray-600">Concierge</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/2041396/pexels-photo-2041396.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Modern Business Building"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-lg"></div>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-900">
                  "The most prestigious business address in Nairobi - where success meets sophistication"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities & Amenities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Every amenity you need to run a successful business, all included in your rental package at no extra cost.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => {
              const Icon = facility.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="relative">
                    <img 
                      src={facility.image}
                      alt={facility.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-blue-600 p-2 rounded-lg">
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {facility.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {facility.description}
                    </p>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <p className="text-green-700 text-sm font-semibold">
                        ✓ Included with all office rentals
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Prime Location Advantage
              </h2>
              <div className="flex items-start space-x-3 mb-6">
                <MapPin className="h-6 w-6 text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mombasa Road, Nairobi</h3>
                  <p className="text-blue-100 leading-relaxed">
                    Strategically positioned along one of Nairobi's most important commercial corridors, offering excellent connectivity to the city center, Jomo Kenyatta International Airport, and major business districts.
                  </p>
                </div>
              </div>
              
              <div className="bg-blue-800/50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-blue-200 mb-3">Location Benefits for Your Business</h3>
                <p className="text-blue-100">
                  Impress clients with easy access from the airport, attract top talent with convenient transport links, and position your business at the heart of Nairobi's commercial hub.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-blue-300" />
                  <span>15 minutes to JKIA - Perfect for international business</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-blue-300" />
                  <span>20 minutes to CBD - Central business district access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-blue-300" />
                  <span>Major highways access - Easy client visits</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-blue-300" />
                  <span>Public transport hub - Staff convenience</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h3 className="text-2xl font-semibold mb-6">Getting Here</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-200">By Car</h4>
                  <p className="text-blue-100">Ample parking available with valet services</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-200">Public Transport</h4>
                  <p className="text-blue-100">Multiple matatu routes and bus stops nearby</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-200">From Airport</h4>
                  <p className="text-blue-100">Direct route via Mombasa Road (15 minutes)</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-600 rounded-lg">
                <p className="text-white font-semibold text-center">
                  🚗 Free parking included with all office rentals!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Ready to Rent Your Perfect Office?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Contact our leasing team today to schedule a tour and discuss rental packages tailored to your business needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Phone className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Leasing Hotline</h3>
              <p className="text-gray-600 mb-4">Speak with our rental specialists</p>
              <a href="tel:+254700000000" className="text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                +254 700 000 000
              </a>
              <p className="text-sm text-green-600 mt-2 font-semibold">Available 24/7 for urgent inquiries</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <Mail className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rental Inquiries</h3>
              <p className="text-gray-600 mb-4">Get detailed rental information</p>
              <a href="mailto:rentals@eensbusinesspark.co.ke" className="text-blue-700 font-semibold hover:text-blue-800 transition-colors">
                rentals@eensbusinesspark.co.ke
              </a>
              <p className="text-sm text-green-600 mt-2 font-semibold">Response within 2 hours</p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg text-center md:col-span-2 lg:col-span-1">
              <div className="bg-blue-100 p-4 rounded-full w-fit mx-auto mb-4">
                <MapPin className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Our Showroom</h3>
              <p className="text-gray-600 mb-4">See sample offices and amenities</p>
              <p className="text-blue-700 font-semibold">
                Mombasa Road, Nairobi
              </p>
              <p className="text-sm text-green-600 mt-2 font-semibold">Open Mon-Sat, 8AM-6PM</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">Special Offer for New Tenants</h3>
              <p className="text-lg mb-6">
                Sign a 2-year lease and get your first month rent-free plus complimentary office setup!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Schedule Tour
                </button>
                <button className="bg-blue-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-900 transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white">
                  Get Rental Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Building2 className="h-8 w-8 text-blue-400" />
                <h3 className="text-2xl font-bold">Eens Business Park</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Kenya's premier business destination featuring modern cobalt blue ceramic architecture and world-class amenities along Mombasa Road, Nairobi.
              </p>
              <div className="bg-green-800 p-4 rounded-lg mb-4">
                <p className="text-green-200 font-semibold">
                  🏢 Premium office spaces available for immediate occupancy
                </p>
              </div>
              <p className="text-sm text-gray-500">
                © 2025 Eens Business Park. All rights reserved.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Rental Services</h4>
              <ul className="space-y-2">
                <li><a href="#offices" className="text-gray-400 hover:text-white transition-colors">Executive Suites</a></li>
                <li><a href="#offices" className="text-gray-400 hover:text-white transition-colors">Open Plan Offices</a></li>
                <li><a href="#offices" className="text-gray-400 hover:text-white transition-colors">Private Offices</a></li>
                <li><a href="#facilities" className="text-gray-400 hover:text-white transition-colors">Meeting Rooms</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Amenities</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-400">Executive Club Access</span></li>
                <li><span className="text-gray-400">Luxury Spa Services</span></li>
                <li><span className="text-gray-400">Secure Parking</span></li>
                <li><span className="text-gray-400">24/7 Concierge</span></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;