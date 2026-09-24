export default function Hero() {
    return (
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
    );
}       