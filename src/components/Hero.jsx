import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white pt-16">
      {/* Gradient blobs */}
      <div
        className="absolute top-20 left-10 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center py-16">
        {/* Left */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-1.5 mb-6"
          >
            <motion.span
              animate={{ boxShadow: ['0 0 0 0 rgba(16,185,129,0.4)', '0 0 0 8px rgba(16,185,129,0)', '0 0 0 0 rgba(16,185,129,0)'] }}
              transition={{ repeat: Infinity, duration: 1.8 }}
              className="w-2.5 h-2.5 bg-[#10B981] rounded-full"
            />
            <span className="text-sm font-semibold text-emerald-700">Available for Work · Dubai, UAE</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-400 font-semibold mb-1"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-5xl md:text-6xl font-extrabold text-[#0A0F1E] leading-tight"
          >
            Thamim Ansari
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26 }}
            className="mt-2 mb-6"
          >
            <span className="text-2xl md:text-3xl font-bold text-[#0A0F1E] relative inline-block">
              React Native Developer
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#2563EB] rounded-full" />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="text-gray-500 text-base leading-relaxed max-w-md mb-8"
          >
            3+ years building cross-platform iOS &amp; Android apps — from architecture to App Store deployment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.42 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#2563EB] text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md shadow-blue-200"
            >
              View Projects
            </button>
            <a
              href="https://drive.google.com/file/d/142W6z38YTPXP1EOsZ9drtRsRZHUoIHv_/view?usp=sharing"
              className="border-2 border-[#2563EB] text-[#2563EB] font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* Right – floating phone */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
            className="relative"
          >
            {/* Phone frame */}
            <div
              className="relative w-56 h-[440px] rounded-[32px] border-4 border-[#0A0F1E] bg-white overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 32px 64px rgba(10,15,30,0.25), 0 0 0 1px rgba(10,15,30,0.1)' }}
            >
              {/* Status bar */}
              <div className="flex items-center justify-between px-5 pt-3 pb-1">
                <span className="text-[10px] font-bold text-[#0A0F1E]">9:41</span>
                <div className="w-16 h-4 bg-[#0A0F1E] rounded-full mx-auto absolute left-1/2 -translate-x-1/2" />
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-2 border border-[#0A0F1E] rounded-sm relative"><div className="absolute inset-0.5 bg-[#0A0F1E] w-2/3 rounded-sm" /></div>
                </div>
              </div>
              {/* App UI mockup */}
              <div className="px-3 pt-2">
                <div className="bg-[#2563EB] rounded-xl p-3 mb-3">
                  <p className="text-white text-[9px] font-semibold">Good Morning</p>
                  <p className="text-white text-base font-bold leading-tight mt-0.5">Thamim</p>
                </div>
                <div className="grid grid-cols-2 gap-2 mb-3">
                  {['Orders', 'Vendors', 'Track', 'Profile'].map((item, i) => (
                    <div key={i} className="bg-gray-50 rounded-xl p-2.5 border border-gray-100">
                      <div className="w-6 h-6 rounded-lg mb-1.5" style={{ background: ['#EFF4FF','#F5F3FF','#ECFDF5','#FEF9C3'][i] }}>
                        <div className="w-3 h-3 rounded-sm mx-auto mt-1.5" style={{ background: ['#2563EB','#7C3AED','#10B981','#F59E0B'][i] }} />
                      </div>
                      <p className="text-[9px] font-semibold text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 rounded-xl p-2.5 border border-gray-100 mb-2">
                  <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wide mb-1.5">Recent Order</p>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex-shrink-0" />
                    <div>
                      <p className="text-[9px] font-semibold text-gray-800">Grocery Bundle</p>
                      <p className="text-[8px] text-gray-400">In Transit · AED 45.00</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {[1,2,3].map(i => (
                    <div key={i} className="flex-1 h-16 rounded-xl bg-gray-50 border border-gray-100" />
                  ))}
                </div>
              </div>
            </div>
            {/* Reflection glow */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-8 bg-blue-200 rounded-full blur-xl opacity-40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
