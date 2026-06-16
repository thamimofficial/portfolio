import { motion } from 'framer-motion';
import ImageOrPlaceholder from './ImageOrPlaceholder';

const PHOTO_URL = 'PHOTO_URL';

export default function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <ImageOrPlaceholder
              src={"https://ik.imagekit.io/thamimgoodat/532460721_18053839448439933_6725748118351682615_n.webp"}
              label="PHOTO_URL"
              className="object-cover rounded-2xl"
              style={{ width: 220, height: 280, border: '3px solid #2563EB' }}
              alt="Thamim Ansari"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-block bg-[#F5F3FF] text-[#7C3AED] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
              About Me
            </span>
            <h2 className="text-3xl font-bold text-[#0A0F1E] mb-4">
              Passionate Mobile App Developer
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              I'm a React Native Developer with 3+ years of experience crafting high-quality cross-platform mobile applications. Based in Dubai, UAE, I specialize in building performant, scalable apps that deliver exceptional user experiences on both iOS and Android.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              My expertise spans the full mobile development lifecycle — from initial architecture and UI implementation to backend integration, performance profiling, and App Store/Play Store deployment. I've successfully reduced crash rates by 25% through systematic debugging and code refactoring.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              I'm currently on a Visit Visa and am immediately available to join a new team. I thrive in Agile environments, collaborate closely with designers and backend engineers, and take ownership of features from concept to release.
            </p>

            {/* Info grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-8">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Location</p>
                <p className="text-sm font-semibold text-[#0A0F1E]">Dubai, UAE</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Availability</p>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Immediate
                </span>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Visa Status</p>
                <p className="text-sm font-semibold text-[#0A0F1E]">Visit Visa</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Email</p>
                <a href="mailto:thamimansari.uae@gmail.com" className="text-sm font-semibold text-[#2563EB] hover:underline truncate block">
                  thamimansari.uae@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Phone</p>
                <a href="tel:+971563316023" className="text-sm font-semibold text-[#2563EB] hover:underline">
                  +971 56 331 6023
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Languages</p>
                <p className="text-sm font-semibold text-[#0A0F1E]">English, Tamil</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#2563EB] text-white font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Hire Me
              </button>
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-[#2563EB] text-[#2563EB] font-semibold px-6 py-2.5 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Projects
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
