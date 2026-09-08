import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-navy text-slate-100 font-sans selection:bg-orange selection:text-white">
      {/* navigation */}
      <nav className="absolute top-0 w-full p-6 flex justify-between items-center z-50">
        
        {/* logo */}
        <div className="text-2xl font-bold tracking-tighter text-white">
          <a href="/">ENGIVATO</a><span className="text-orange">.</span>
        </div>

        {/* nav links */}
        <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-white transition-colors duration-300">Services</a>
          <a href="#about" className="hover:text-white transition-colors duration-300">About Us</a>
          <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>

        {/* CTA */}
        <button className="bg-orange/10 text-orange border border-orange/20 px-5 py-2 rounded-full text-sm font-semibold hover:bg-orange hover:text-white transition-all duration-300">
          Get Started
        </button>
      </nav>

      {/* hero */}
      <main className="relative flex flex-col justify-center items-center text-center min-h-screen px-4 overflow-hidden">
        
        {/* background gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-indigo-500/10 rounded-full mix-blend-screen filter blur-[120px]"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

          {/* badge */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm text-xs font-medium text-slate-300 uppercase tracking-widest shadow-lg">
            Engineering for Local Businesses
          </div>

          {/* title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white drop-shadow-md">
            Innovating the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-orange-dark">
              Your Infrastructure
            </span>
          </h1>
          
          {/* subtitle */}
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
            We deliver state-of-the-art engineering solutions and strategic innovation 
            to help local businesses scale efficiently and sustainably.
          </p>
          
          {/* buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <button className="px-8 py-4 bg-orange text-white rounded-lg font-bold shadow-lg shadow-orange/30 hover:shadow-orange/50 hover:-translate-y-1 transition-all duration-300">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-slate-800/50 text-white rounded-lg font-bold border border-slate-700 hover:bg-slate-700 hover:-translate-y-1 transition-all duration-300 backdrop-blur-md">
              Learn More
            </button>
          </div>
        </div>
      </main>
      
      {/* services section */}
      <section id="services" className="py-24 px-4 bg-navy-light relative border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto">

          {/* section title */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Comprehensive engineering solutions tailored to meet the unique challenges of your business.</p>
          </div>
          
          {/* services grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Structural Design', desc: 'Robust and efficient structural engineering that stands the test of time.' },
              { title: 'System Innovation', desc: 'Integrating cutting-edge technology to streamline your core processes.' },
              { title: 'Project Consulting', desc: 'Expert guidance from inception to completion for complex deployments.' },
            ].map((service, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:bg-slate-800/80 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-12 h-12 text-orange" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2zm0 4.5l6.5 13h-13L12 6.5z"/></svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
                <div className="mt-6 flex items-center text-orange font-medium group-hover:underline cursor-pointer">
                  Learn more <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-navy py-12 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Engivato PLLC. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-orange transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
