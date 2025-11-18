import { Lightbulb, Shield, Zap } from 'lucide-react'

const projects = [
  {
    title: 'Marine Bulkhead Series',
    description: 'Impact-resistant bulkhead luminaires with IP66 sealing for harsh coastal environments.',
    tags: ['IP66', 'IK10', 'LED'],
    icon: Shield,
  },
  {
    title: 'Corrosion-Proof Linear',
    description: 'Chemical-resistant housing and stainless fixings for industrial facilities.',
    tags: ['Vandal-proof', '316L', 'ATEX-ready'],
    icon: Zap,
  },
  {
    title: 'Architectural Downlights',
    description: 'Low glare optics with precision beam control for hospitality and retail.',
    tags: ['UGR<16', 'CRI 95', 'Beam 15°/24°/36°'],
    icon: Lightbulb,
  },
]

function Projects() {
  return (
    <section id="work" className="relative py-20 bg-[radial-gradient(1000px_600px_at_10%_0%,rgba(250,204,21,0.08),transparent)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Work</h2>
            <p className="text-slate-300/80 mt-2">A snapshot of durable, efficient lighting built for demanding applications.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm font-medium text-yellow-300 hover:text-yellow-200">Request full case studies →</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="group relative rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-300">
                  <p.icon size={20} />
                </div>
                <h3 className="text-white font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-slate-300/90 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-black/40 border border-white/10 text-slate-200/90">
                    {t}
                  </span>
                ))}
              </div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-white/10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
