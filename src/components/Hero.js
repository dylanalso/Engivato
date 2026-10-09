import Image from 'next/image';
import blueOverlay from '../img/BlueOverlay.gif';

export default function Hero() {
    return (
      <main className="relative flex flex-col justify-center items-center text-center min-h-screen px-4 overflow-hidden">
        
        {/* background gif */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={blueOverlay} 
            alt="Engineering Background" 
            fill 
            className="object-cover opacity-20 contrast-200"
            unoptimized
          />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">

          {/* badge */}
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-corporate-blue/20 bg-corporate-light text-xs font-medium text-corporate-blue uppercase tracking-widest shadow-sm">
            Engineering for Local Businesses
          </div>

          {/* title */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-slate-900 drop-shadow-sm">
            Innovating the Future of <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-corporate-blue to-blue-700">
              Your Infrastructure
            </span>
          </h1>
          
          {/* subtitle */}
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl leading-relaxed tracking-tight">
            We deliver state-of-the-art engineering solutions and strategic innovation 
            to help local businesses scale efficiently and sustainably.
          </p>
          
          {/* buttons */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 w-full sm:w-auto">
            <button className="px-8 py-4 bg-orange text-white rounded-lg font-bold shadow-lg shadow-orange/30 hover:shadow-orange/50 hover:-translate-y-1 transition-all duration-300">
              Start Your Project
            </button>
            <button className="px-8 py-4 bg-white text-corporate-blue rounded-lg font-bold border border-corporate-blue/30 hover:bg-corporate-light hover:-translate-y-1 transition-all duration-300 shadow-sm">
              Learn More
            </button>
          </div>
        </div>
      </main>      
    );
}       