import React from 'react';
import { Scissors, Sparkles, Palette, Heart, MapPin, Phone, Instagram, MessageCircle, Star, CheckCircle2, Menu, X, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Components ---

const Navbar = () => {
  return (
    <nav className="absolute top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-5xl z-50">
      <div className="bg-white rounded-full flex items-center justify-between p-1.5 shadow-sm">

        {/* Left Side: Logo */}
        <div className="flex items-center gap-3 pl-2">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-salon-ink rounded-full flex items-center justify-center text-white font-sans font-bold text-lg md:text-xl">
            S
          </div>
          <div className="flex flex-col">
            <span className="text-salon-ink font-sans font-bold text-[13px] md:text-[15px] tracking-wide leading-tight uppercase">Smart Moves</span>
            <span className="text-salon-ink/60 font-sans italic text-[9px] md:text-[10px] tracking-wide uppercase leading-tight font-medium">Hair Salon (Ladies - Gents)</span>
          </div>
        </div>

        {/* Center: Navigation Links (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-8 ml-8">
          <a href="#" className="text-salon-ink/60 font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:text-salon-ink transition-colors flex items-center gap-1 cursor-pointer">
            HOME
          </a>
          <a href="#services" className="text-salon-ink/60 font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:text-salon-ink transition-colors flex items-center gap-1 cursor-pointer">
            SERVICES
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-0.5"><path d="M6 9l6 6 6-6" /></svg>
          </a>
          <a href="#about" className="text-salon-ink/60 font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:text-salon-ink transition-colors flex items-center gap-1 cursor-pointer">
            ABOUT US
          </a>
          <a href="#booking" className="text-salon-ink/60 font-sans font-bold uppercase tracking-[0.15em] text-[11px] hover:text-salon-ink transition-colors flex items-center gap-1 cursor-pointer">
            BOOKING
          </a>
        </div>

        {/* Right: Action Button */}
        <a href="#booking" className="bg-salon-ink hover:bg-black transition-colors text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest py-3 md:py-3.5 px-5 md:px-6 rounded-full flex items-center gap-2 md:gap-3 shrink-0 mr-0.5 active:scale-95 cursor-pointer">
          BOOK NOW
          <span className="bg-white/20 px-2 py-0.5 rounded-full text-[9px] font-semibold">24/7</span>
        </a>

      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-[#bac5c7] flex flex-col items-center justify-center overflow-hidden pt-24 px-6 md:px-12">

      {/* Full Screen Background Video Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none pb-[10vh]">
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-[95vw] h-[75vh] md:w-[85vw] md:h-[85vh] lg:w-[70vw] lg:h-[90vh] object-cover object-[center_20%]"
          style={{
            maskImage: 'radial-gradient(50% 50% at 50% 50%, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(50% 50% at 50% 50%, black 60%, transparent 100%)'
          }}
        />
        {/* Soft bottom gradient to ensure text readability and blend with the next section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#bac5c7] via-[#bac5c7]/40 to-transparent pointer-events-none"></div>
      </div>

      {/* Main Center Info & Booking Text */}
      <div className="absolute z-20 bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center text-center w-full px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-2xl sm:text-3xl md:text-[2.5rem] font-sans tracking-[0.1em] text-salon-ink font-medium mb-3 uppercase">
            Smart Moves Hair Salon
          </h1>
          <h2 className="text-[10px] sm:text-xs md:text-sm font-sans tracking-[0.3em] text-salon-ink font-light opacity-60 uppercase mb-6 md:mb-8">
            Ladies & Gents | F-10 Markaz, Islamabad
          </h2>

          <div className="flex flex-col items-center">
            <p className="text-salon-ink/70 text-[9px] md:text-[10px] tracking-widest leading-relaxed mb-4 uppercase">
              Schedule your appointment
            </p>
            <a href="#booking" className="bg-black text-white px-8 py-3 md:px-10 md:py-4 rounded-full text-[10px] uppercase tracking-[0.2em] hover:bg-black/80 transition-all hover:shadow-xl hover:-translate-y-1 active:scale-95 cursor-pointer">
              Book Online
            </a>
          </div>
        </motion.div>
      </div>

      {/* Bottom Right Small Text (Address/Services) */}
      <div className="absolute z-10 bottom-6 md:bottom-10 right-6 md:right-12 text-right text-salon-ink/50 text-[10px] tracking-widest font-sans flex flex-col items-end gap-1.5 pointer-events-none hidden lg:flex uppercase">
        <p>Hair • Makeup • Nails • Grooming</p>
        <p>1st floor, Near: KFC, Millat Plaza, F-10 Markaz, Islamabad</p>
      </div>

    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Hair Styling & Grooming",
      price: "PKR 3,000–8,000",
      duration: "1h–3h",
      desc: "From signature blowouts and precision cuts to advanced protein and keratin treatments tailored for your hair type.",
      img: "https://images.pexels.com/photos/10318057/pexels-photo-10318057.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "The Nail Bar",
      price: "PKR 2,500–6,000",
      duration: "1h–2h",
      desc: "Islamabad's premier destination for long-lasting Gel nails, intricate Acrylic art, and luxury spa manicures.",
      img: "https://images.pexels.com/photos/3992850/pexels-photo-3992850.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Aesthetic Skincare",
      price: "PKR 3,500–10,000",
      duration: "1h–2h30m",
      desc: "Revitalizing facials and deep-cleansing treatments designed to give you a flawless glow in the local climate.",
      img: "https://images.pexels.com/photos/3992872/pexels-photo-3992872.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Bridal & Party Glow",
      price: "PKR 15,000–45,000",
      duration: "3h–5h",
      desc: "Complete makeover services for brides and bridesmaids, including professional makeup and traditional styling.",
      img: "https://images.pexels.com/photos/3993451/pexels-photo-3993451.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20 flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-4xl font-sans tracking-tight text-salon-ink font-medium mb-4">Our Services</h2>
          <div className="w-16 h-[1px] bg-salon-ink/20 mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="flex flex-col items-center text-center bg-[#bac5c7]/20 p-4 rounded-[2rem] border border-black/5 group h-full transition-all duration-500 shadow-sm [@media(hover:hover)]:hover:shadow-xl hover:bg-white cursor-pointer"
            >
              <div className="w-full h-48 sm:h-56 mb-6 rounded-2xl overflow-hidden shrink-0 border border-white/10">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out [@media(hover:hover)]:grayscale hover:grayscale-0"
                />
              </div>
              <h3 className="text-base md:text-lg font-sans font-medium tracking-wide text-salon-ink leading-tight mb-1">{service.title}</h3>
              <span className="text-xs font-medium text-salon-ink/70 mb-1">{service.price}</span>
              <p className="text-[10px] uppercase tracking-[0.1em] text-salon-ink/40 mb-3">{service.duration}</p>

              {service.desc && (
                <p className="text-salon-ink/60 text-xs leading-relaxed px-2">
                  {service.desc}
                </p>
              )}

              <p className="mt-auto text-[10px] uppercase tracking-[0.1em] font-medium text-salon-ink/80 pt-4">
                Book your consultation
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#bac5c7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 w-full max-w-md lg:max-w-none relative"
          >
            <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=800"
                alt="Salon Team"
                className="w-full h-auto object-cover [@media(hover:hover)]:grayscale opacity-90 hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:w-1/2 flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-5xl lg:text-5xl font-sans tracking-tight font-medium text-salon-ink mb-10 leading-[1.1] uppercase">
              Smart Moves Hair Salon <br className="hidden md:block" />
              About Us
            </h2>
            <p className="text-salon-ink/60 text-sm md:text-base mb-12 leading-relaxed max-w-lg">
              Welcome to Smart Moves Hair Salon, your premier destination for beauty and grooming services in F-10 Markaz, Islamabad. We proudly cater to both Ladies and Gents, offering personalized styling, professional makeup, nail art, and bridal services in a modern, welcoming environment.
            </p>

            <div className="grid grid-cols-2 gap-8 max-w-lg border-t border-black/10 pt-10">
              <div className="flex flex-col gap-2">
                <p className="font-sans font-medium text-xl">F-10 Markaz</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-salon-ink/50">Voted Salon</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-sans font-medium text-xl">5-Star</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-salon-ink/50">Customer Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="booking" className="py-16 md:py-24 bg-salon-ink text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row border border-white/10 rounded-[2rem] overflow-hidden"
        >

          {/* Left Text Side */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 flex flex-col justify-center bg-white/5">
            <h2 className="text-3xl md:text-5xl font-sans tracking-tight font-medium mb-6 leading-[1.1]">
              Book an <br />
              Appointment
            </h2>
            <p className="text-white/60 mb-12 text-sm md:text-base max-w-md leading-relaxed">
              Contact us to schedule your visit.
            </p>

            <a
              href="https://wa.me/923335319763"
              className="flex items-center justify-between group border border-white/20 p-6 rounded-2xl hover:bg-white hover:text-salon-ink transition-all duration-300 w-full max-w-md active:scale-95 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <MessageCircle size={24} className="group-hover:text-salon-ink transition-colors" />
                <span className="text-sm uppercase tracking-[0.2em] font-medium">Chat with us</span>
              </div>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <p className="mt-6 text-[10px] text-white/40 uppercase tracking-[0.2em]">
              Average response time: 5 minutes
            </p>
          </div>

          {/* Right Form Side */}
          <div className="lg:w-1/2 p-8 md:p-12 lg:p-20 bg-salon-ink border-l border-white/10">
            <h3 className="text-xl mb-10 font-sans tracking-wide">Request Appointment</h3>
            <form className="space-y-8">
              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3 ml-1">Full Name</label>
                <input type="text" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/20" placeholder="Jane Doe" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3 ml-1">Phone Number</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors placeholder:text-white/20" placeholder="+92 333 5319763" />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3 ml-1">Service</label>
                  <select className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors appearance-none text-white/80">
                    <option className="bg-salon-ink text-white">Grooming</option>
                    <option className="bg-salon-ink text-white">Makeup</option>
                    <option className="bg-salon-ink text-white">Nails</option>
                    <option className="bg-salon-ink text-white">Bridal</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3 ml-1">Preferred Date & Time</label>
                <input type="datetime-local" className="w-full bg-transparent border-b border-white/20 pb-3 text-sm focus:outline-none focus:border-white transition-colors text-white/80" />
              </div>

              <button type="submit" className="w-full bg-white text-salon-ink py-4 mt-4 rounded-full text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-white/90 transition-all duration-300 active:scale-95 cursor-pointer">
                Submit Request
              </button>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-16 md:pt-24 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 border-t border-black/10 pt-16"
        >
          <div className="lg:col-span-1">
            <a href="#" className="text-xl font-sans tracking-[0.4em] font-light text-salon-ink mb-6 block uppercase">
              Smart Moves Hair Salon
            </a>
            <p className="text-salon-ink/50 text-sm leading-relaxed mb-8 pr-4">
              Premium Beauty & Grooming Salon for Ladies & Gents in F-10 Markaz, Islamabad.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-salon-ink/40 hover:text-salon-ink transition-colors active:scale-95 cursor-pointer">
                <Instagram size={18} />
              </a>
              <a href="tel:+923335319763" className="text-salon-ink/40 hover:text-salon-ink transition-colors active:scale-95 cursor-pointer">
                <Phone size={18} />
              </a>
              <a href="https://wa.me/923335319763" className="text-salon-ink/40 hover:text-salon-ink transition-colors active:scale-95 cursor-pointer">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[10px] font-medium mb-8 uppercase tracking-[0.2em] text-salon-ink/40">Quick Links</h4>
            <ul className="space-y-4 text-xs tracking-wide text-salon-ink/80">
              <li><a href="#" className="hover:text-black transition-colors active:scale-95 inline-block cursor-pointer">Home</a></li>
              <li><a href="#services" className="hover:text-black transition-colors active:scale-95 inline-block cursor-pointer">Services</a></li>
              <li><a href="#about" className="hover:text-black transition-colors active:scale-95 inline-block cursor-pointer">About Us</a></li>
              <li><a href="#booking" className="hover:text-black transition-colors active:scale-95 inline-block cursor-pointer">Booking</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium mb-8 uppercase tracking-[0.2em] text-salon-ink/40">Contact Us</h4>
            <ul className="space-y-4 text-xs tracking-wide text-salon-ink/80">
              <li className="flex items-start gap-4">
                <MapPin size={16} className="text-salon-ink/40 shrink-0 mt-0.5" />
                <span className="leading-relaxed">1st floor, Near: KFC, <br />Millat Plaza, F-10 Markaz, Islamabad</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={16} className="text-salon-ink/40 shrink-0" />
                <span>+92 333 5319763</span>
              </li>
              <li className="flex items-center gap-4">
                <Clock size={16} className="text-salon-ink/40 shrink-0" />
                <span>Open Daily, 11:00 AM – 1:00 AM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-medium mb-8 uppercase tracking-[0.2em] text-salon-ink/40">Location</h4>
            <div className="rounded-2xl overflow-hidden h-40 border border-black/5 [@media(hover:hover)]:grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.5!2d73.015!3d33.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd4688a2c3f%3A0x8f8e8f8f8f8f8f8f!2sSmart+Moves+Hair+Salon!5e0!3m2!1sen!2spk!4v1709810000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-salon-ink/40 text-[10px] uppercase tracking-[0.2em]">© 2026 Smart Moves Hair Salon.</p>
          <p className="text-salon-ink/40 text-[10px] uppercase tracking-[0.2em]">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Booking />
      <Footer />
    </div>
  );
}