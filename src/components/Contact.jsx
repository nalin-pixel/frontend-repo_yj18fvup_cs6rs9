import { Mail, Send } from 'lucide-react'
import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
      })

      if (res.ok) {
        setStatus('Thanks! I will get back to you shortly.')
        e.target.reset()
      } else {
        setStatus('Something went wrong. Please try again.')
      }
    } catch (err) {
      setStatus('Network error. Please try again later.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-2 rounded-lg bg-yellow-400/10 text-yellow-300">
              <Mail size={20} />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s collaborate</h3>
              <p className="text-slate-300/80">Share a brief about your project. I’ll reply within 24–48 hours.</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Name</label>
                <input name="name" required className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/30" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-slate-300 mb-1">Email</label>
                <input name="email" type="email" required className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/30" placeholder="you@company.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm text-slate-300 mb-1">Message</label>
              <textarea name="message" required rows="5" className="w-full bg-black/40 border border-white/10 rounded-md px-3 py-2 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-yellow-400/30" placeholder="Tell me about your project..." />
            </div>

            <div className="flex items-center gap-4">
              <button type="submit" className="inline-flex items-center gap-2 bg-yellow-400 text-black font-medium px-5 py-2.5 rounded-md hover:bg-yellow-300 transition-colors">
                <Send size={16} /> Send message
              </button>
              <p className="text-sm text-slate-300/80">{status}</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
