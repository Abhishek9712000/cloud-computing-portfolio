import { BookOpen, CheckCircle2, ExternalLink } from 'lucide-react'

export default function Training() {
  // ✅ Google Drive certificate link (PUBLIC)
  const CERTIFICATE_VIEW_LINK =
    'https://drive.google.com/file/d/1jl1xTiAjupEc7jztJRdYwsZTCalwYsbm/view?usp=sharing'

  return (
  <section id="training" className="py-20 px-6">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16 reveal">
        <span className="inline-block px-4 py-2 glass rounded-full text-cyber-purple text-sm font-semibold uppercase tracking-wider mb-4">
          Training
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
          Professional Training
        </h2>
      </div>

      {/* Training Card */}
      <div className="glass rounded-2xl p-8 md:p-10 reveal border-t-4 border-cyber-cyan hover:shadow-xl hover:shadow-cyber-cyan/10 transition-all duration-300">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30">
            <BookOpen className="w-6 h-6 text-cyber-cyan" />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              C Programming Training – CSE PATHSALA
            </h3>
            <p className="text-cyber-green font-semibold mb-1">
              Placement Ace
            </p>
            <p className="text-gray-400 text-sm">Jun–Jul 2025</p>
          </div>
        </div>

        {/* Training Highlights */}
        <div className="space-y-3 ml-14 mb-8">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyber-green mt-0.5" />
            <p className="text-gray-300">
              Learned core C programming concepts including variables, control
              structures, functions, arrays, pointers, and memory management
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyber-green mt-0.5" />
            <p className="text-gray-300">
              Strengthened problem-solving and logical thinking through hands-on
              coding practice and algorithm-based exercises
            </p>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-cyber-green mt-0.5" />
            <p className="text-gray-300">
              Gained a strong foundation in low-level programming concepts useful
              for systems, operating systems, and performance-critical applications
            </p>
          </div>
        </div>

        {/* ✅ Certificate Button */}
        <div className="ml-14">
          <a
            href={CERTIFICATE_VIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3
                       bg-gradient-to-r from-cyber-cyan to-cyber-green
                       text-cyber-black font-semibold rounded-lg
                       hover:shadow-lg hover:shadow-cyber-cyan/40
                       transition-all duration-300"
          >
            View Training Certificate
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </div>
  </section>
)

}
