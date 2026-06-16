import { motion } from 'framer-motion';
import ImageOrPlaceholder from './ImageOrPlaceholder';

const jobs = [
  {
    title: 'React Native Developer',
    company: 'Localites',
    location: 'Coimbatore, tamilnadu, India',
    period: 'Jan 2025 – Present',
    logoSrc: 'https://cdn.prod.website-files.com/661f99265a00cde49d82022b/66537721fac1df87b33ea8a9_Localites_Black-p-500.png',
    logoLabel: 'LOCALITES',
    bullets: [
      'Led full-lifecycle development of a cross-platform app published on both App Store and Google Play Store.',
      'Shipped 12+ features including orders, vendor listings, real-time notifications, and tracking.',
      'Reduced crash rate by 25% through systematic performance profiling and memory optimization.',
      'Integrated OneSignal push notifications and Branch.io deep linking for seamless user acquisition.',
    ],
  },
  {
    title: 'React Native Developer',
    company: 'Smart Yuppies',
    location: 'Chennai, tamilnadu, India',
    period: 'Feb 2024 – Jan 2025',
    logoSrc: 'SMARTYUPIES_LOGO_URL',
    logoLabel: 'SMARTYUPIES',
    bullets: [
      'Built cross-platform iOS and Android apps from scratch, delivering smooth 60fps experiences.',
      'Achieved 25% crash reduction through targeted code refactoring and error boundary improvements.',
      'Integrated 5+ third-party APIs including payment gateways, maps, and social auth providers.',
      'Collaborated in Agile/Scrum teams with bi-weekly sprint cycles and daily stand-ups.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EFF4FF] text-[#2563EB] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Experience
          </span>
          <h2 className="text-3xl font-bold text-[#0A0F1E]">Work History</h2>
          <p className="text-gray-500 mt-2">3+ years of professional mobile app development</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-[#2563EB] opacity-20 hidden md:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-[26px] top-8 w-4 h-4 rounded-full bg-[#2563EB] border-4 border-white shadow-md hidden md:block" />

                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                    {/* Logo */}
                    <ImageOrPlaceholder
                      src={job.logoSrc}
                      label={job.logoLabel}
                      className="rounded-xl object-contain flex-shrink-0"
                      style={{ width: 60, height: 60, border: '1px solid #f3f4f6' }}
                      alt={job.company}
                    />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-lg font-bold text-[#0A0F1E]">{job.title}</h3>
                          <p className="text-[#2563EB] font-semibold text-sm">{job.company} · {job.location}</p>
                        </div>
                        <span className="bg-[#F5F3FF] text-[#7C3AED] text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {job.bullets.map((b, bi) => (
                          <li key={bi} className="flex items-start gap-2.5 text-gray-500 text-sm leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB] flex-shrink-0 mt-1.5" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
