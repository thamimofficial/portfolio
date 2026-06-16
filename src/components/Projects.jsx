import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import ImageOrPlaceholder from './ImageOrPlaceholder';

const projects = [
  {
    name: 'Localites',
    subtitle: 'On-Demand & E-Commerce',
    description: 'A full-featured on-demand marketplace app with vendor listings, order tracking, push notifications, and deep linking — live on both App Store and Play Store.',
    bannerSrc: 'https://cdn.prod.website-files.com/661f99265a00cde49d82022b/6655e46890a52ed65d472e1c_CK_mockup3.png',
    bannerLabel: 'LOCALITES_BANNER_URL',
    iconSrc: 'https://cdn.prod.website-files.com/661f99265a00cde49d82022b/66537721fac1df87b33ea8a9_Localites_Black-p-500.png',
    iconLabel: null,
    appStore: 'https://apps.apple.com/in/app/localites-in/id6615078709',
    playStore: 'https://play.google.com/store/apps/details?id=app.localites&pcampaignid=web_share',
    viewProject: null,
    tags: ['React Native', 'Redux', 'Firebase', 'OneSignal', 'Branch.io'],
  },
  {
    name: 'ViviMart',
    subtitle: 'E-Commerce Shopping',
    description: 'A feature-rich e-commerce shopping application with Google Maps integration, multiple payment gateway support, and real-time inventory management.',
    bannerSrc: 'https://ik.imagekit.io/thamimgoodat/images.jpg',
    bannerLabel: 'VIVIMART_BANNER_URL',
    iconSrc: 'https://ik.imagekit.io/thamimgoodat/images%20(25).jpeg',
    iconLabel: 'VIVIMART',
    appStore: null,
    playStore: 'https://play.google.com/store/apps/details?id=com.vivimart_ecom&pcampaignid=web_share',
    viewProject: null,
    tags: ['React Native', 'Redux', 'Google Maps API', 'Payment Gateway'],
  },
  {
    name: 'GulfFriend',
    subtitle: 'Classifieds & Marketplace · Malaysia · Freelance',
    description: 'A classifieds and marketplace platform for the Malaysian market with OTP-based authentication, real-time chat, and category-based listings.',
    bannerSrc: 'https://ik.imagekit.io/thamimgoodat/logo.png',
    bannerLabel: 'GULFFRIEND_BANNER_URL',
    iconSrc: 'https://ik.imagekit.io/thamimgoodat/logo.png',
    iconLabel: 'GULFFRIEND_ICON_URL',
    appStore: null,
    playStore: null,
    viewProject: 'https://drive.google.com/file/d/1bErUNqePCF6JTadfzwNGjc2i5uLt57O-/view?usp=sharing',
    tags: ['React Native', 'Firebase', 'Redux', 'REST APIs', 'OTP Auth'],
  },
  {
    name: 'Spendra',
    subtitle: 'Budget & Expense Tracker · Personal',
    description: 'A personal finance app for tracking daily expenses, setting budgets, and visualizing spending patterns with custom chart components and local storage.',
    bannerSrc: 'https://ik.imagekit.io/thamimgoodat/ic_launcher_round.png',
    bannerLabel: 'SPENDRA_BANNER_URL',
    iconSrc: 'https://ik.imagekit.io/thamimgoodat/ic_launcher_round.png',
    iconLabel: 'SPENDRA_ICON_URL',
    appStore: null,
    playStore: null,
    viewProject: 'https://drive.google.com/file/d/13uB0yONgmMCFC2MnxsoXvSCQOYH9Vhft/view?usp=sharing',
    tags: ['React Native', 'AsyncStorage', 'Redux', 'Custom UI'],
  },
];

function isPlaceholderUrl(url) {
  return !url || url.startsWith('YOUR_') || url.startsWith('LOCALITES') || url.startsWith('VIVIMART') || url.startsWith('GULFFRIEND') || url.startsWith('SPENDRA');
}

function StoreBadge({ href, icon, label }) {
  if (!href || isPlaceholderUrl(href)) return null;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 bg-[#0A0F1E] text-white text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-gray-800 transition-colors"
    >
      {icon}
      {label}
    </a>
  );
}

function ProjectCard({ project, delay }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTilt({ x: dy * -6, y: dx * 6 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  const isBannerPlaceholder = isPlaceholderUrl(project.bannerSrc);
  const isIconPlaceholder = project.iconLabel !== null && isPlaceholderUrl(project.iconSrc);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: tilt.x === 0 ? 'transform 0.4s ease' : 'transform 0.1s ease',
      }}
      className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-shadow"
    >
      {/* Banner */}
      <div className="relative h-40 overflow-hidden">
        {isBannerPlaceholder ? (
          <div className="w-full h-full flex items-center justify-center bg-gray-50 border-b-2 border-dashed border-[#2563EB]">
            <span className="text-xs font-mono text-[#2563EB]">{project.bannerLabel}</span>
          </div>
        ) : (
          <img
            src={project.bannerSrc}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        )}
      </div>

      {/* Icon badge — outside banner so overflow:hidden doesn't clip it */}
      <div className="relative px-5">
        <div className="absolute -top-6 left-5">
          {isIconPlaceholder ? (
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-gray-50 border-2 border-dashed border-[#2563EB]"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            >
              <span className="text-[7px] font-mono text-[#2563EB] leading-tight text-center px-1">{project.iconLabel}</span>
            </div>
          ) : (
            <img
              src={project.iconSrc}
              alt={project.name + ' icon'}
              className="w-12 h-12 rounded-xl object-contain bg-white"
              style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
            />
          )}
        </div>
      </div>

      <div className="pt-10 px-5 pb-5">
        {/* Store badges */}
        <div className="flex flex-wrap gap-2 mb-4">
          <StoreBadge
            href={project.appStore}
            label="App Store"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
            }
          />
          <StoreBadge
            href={project.playStore}
            label="Play Store"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M3.18 23.76c.3.17.63.24.97.2L14.72 12 3.15.04c-.34-.04-.67.03-.97.2C1.64.8 1 1.77 1 3v18c0 1.23.64 2.2 2.18 2.76zM16.17 13.4l2.98 2.98-9.1 5.07 6.12-8.05zM21.58 10.15c.47.4.42.89.42.93v.03c0 .04.06.53-.43.92l-2.37 1.32-3.32-3.32 3.32-3.33 2.38 1.45zM10.04 12l-6.14-8.08 9.07 5.06-2.93 3.02z"/></svg>
            }
          />
          <StoreBadge
            href={project.viewProject}
            label="View Project"
            icon={
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            }
          />
        </div>

        <h3 className="text-lg font-bold text-[#0A0F1E] mb-0.5">{project.name}</h3>
        <p className="text-xs text-gray-400 font-medium mb-2">{project.subtitle}</p>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-[#F5F3FF] text-[#7C3AED] text-xs font-semibold px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="bg-[#EFF4FF] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#DBEAFE] text-[#2563EB] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Projects
          </span>
          <h2 className="text-3xl font-bold text-[#0A0F1E]">Featured Work</h2>
          <p className="text-gray-500 mt-2">Cross-platform apps shipped from concept to store</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
