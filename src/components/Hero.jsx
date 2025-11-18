import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/tQoseAAHmVqmck9e/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="pt-28 pb-20 sm:pt-36 sm:pb-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-300 ring-1 ring-yellow-400/20 mb-6">
              <span className="text-xs uppercase tracking-wider">Product Design Portfolio</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white leading-tight">
              Lighting that shapes spaces
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-200/90 max-w-xl">
              Corrosion-proof fixtures, bulkheads, and high-performance downlights crafted for durability and visual comfort.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#work" className="inline-flex items-center justify-center rounded-md bg-yellow-400 text-black font-medium px-5 py-3 hover:bg-yellow-300 transition-colors">
                Explore Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/20 text-white font-medium px-5 py-3 hover:bg-white/10 transition-colors">
                Get in touch
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black"></div>
    </section>
  )
}

export default Hero
