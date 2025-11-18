function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Purposeful, tested, and refined</h2>
            <p className="mt-4 text-slate-300/90">
              I design lighting products that balance engineering and aesthetics. From ingress protection and corrosion resistance to visual comfort and thermal performance, every detail is intentional.
            </p>
            <ul className="mt-6 space-y-3 text-slate-200/90">
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span> IP & IK compliance for real-world durability</li>
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span> Optics tuned for beam accuracy and low glare</li>
              <li className="flex items-center gap-3"><span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span> Materials specified for corrosion-prone environments</li>
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-yellow-400/20 to-transparent p-8">
            <div className="aspect-video rounded-lg bg-black/40 border border-white/10 grid place-items-center text-yellow-300 font-semibold">
              Design System, Prototypes, Specs
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
