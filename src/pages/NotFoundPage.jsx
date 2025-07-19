
const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a363b] to-[#203f44] flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-xl">
        <div className="relative p-10 text-center">
          {/* Floating circles decoration */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-[#3d6e79] opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-[#3d6e79] opacity-15 animate-ping animate-infinite"></div>
          
          {/* Main content */}
          <div className="relative z-10">
            {/* Animated icon */}
            <div className="mx-auto mb-8 w-32 h-32 bg-[#203f44] rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <svg 
                className="w-20 h-20 text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            
            {/* Animated 404 text */}
            <h1 className="text-9xl font-bold text-[#203f44] mb-2 animate-pulse">
              4<span className="inline-block animate-bounce">0</span>4
            </h1>
            
            <h2 className="text-3xl font-semibold text-[#2c555c] mb-4">
              Page Not Found
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              The digital abyss has consumed this page. Perhaps it never existed, 
              or maybe it's just taking a cosmic vacation.
            </p>
            
            {/* Navigation buttons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="/" 
                className="py-3 px-6 bg-[#203f44] hover:bg-[#2c555c] text-white font-medium rounded-lg transition-all duration-300 transform hover:-translate-y-1 shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Return Home
              </a>
              
              <a 
                href="/contact" 
                className="py-3 px-6 bg-white border-2 border-[#203f44] text-[#203f44] hover:bg-[#f8fafb] font-medium rounded-lg transition-colors duration-300 shadow-md flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </a>
            </div>
            
            {/* Search suggestion */}
            <div className="mt-10">
              <p className="text-gray-500 text-sm mb-2">
                Or try searching for what you need:
              </p>
              <div className="relative max-w-xs mx-auto">
                <input 
                  type="text" 
                  placeholder="Search..." 
                  className="w-full py-3 px-4 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#203f44]/50"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#203f44]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="bg-[#203f44]/10 py-4 text-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Huge • If True
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;