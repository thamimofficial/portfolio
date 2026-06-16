import { useState } from 'react';
import { motion } from 'framer-motion';

const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons';

// [name, slug, color, bgColor]
const groups = [
  {
    label: 'Core',
    skills: [
      ['React Native', 'react', '#61DAFB', 'rgba(97,218,251,0.12)'],
      ['React JS', 'react', '#61DAFB', 'rgba(97,218,251,0.12)'],
      ['JavaScript', 'javascript', '#F7DF1E', 'rgba(247,223,30,0.12)'],
      ['TypeScript', 'typescript', '#3178C6', 'rgba(49,120,198,0.12)'],
      ['Expo', 'expo', '#000020', 'rgba(0,0,32,0.08)'],
    ],
  },
  {
    label: 'State & APIs',
    skills: [
      ['Redux', 'redux', '#764ABC', 'rgba(118,74,188,0.12)'],
      ['Redux Toolkit', 'redux', '#764ABC', 'rgba(118,74,188,0.12)'],
      ['Axios', 'axios', '#5A29E4', 'rgba(90,41,228,0.12)'],
      ['REST APIs', 'json', '#000000', 'rgba(0,0,0,0.06)'],
      ['React Navigation', 'react', '#61DAFB', 'rgba(97,218,251,0.12)'],
    ],
  },
  {
    label: 'Tools',
    skills: [
      ['Firebase', 'firebase', '#FFCA28', 'rgba(255,202,40,0.12)'],
      ['Git', 'git', '#F05032', 'rgba(240,80,50,0.12)'],
      ['GitHub', 'github', '#181717', 'rgba(24,23,23,0.06)'],
      ['Postman', 'postman', '#FF6C37', 'rgba(255,108,55,0.12)'],
      ['VS Code', 'visualstudiocode', '#007ACC', 'rgba(0,122,204,0.12)'],
      ['Android Studio', 'androidstudio', '#3DDC84', 'rgba(61,220,132,0.12)'],
      ['OneSignal', 'onesignal', '#E54B4D', 'rgba(229,75,77,0.12)'],
      ['Branch.io', 'branch', '#30A960', 'rgba(48,169,96,0.12)'],
      ['Play Console', 'googleplay', '#414141', 'rgba(65,65,65,0.08)'],
      ['App Store Connect', 'apple', '#000000', 'rgba(0,0,0,0.06)'],
      ['Figma', 'figma', '#F24E1E', 'rgba(242,78,30,0.12)'],
    ],
  },
  {
    label: 'Backend & Other',
    skills: [
      ['.NET', 'dotnet', '#512BD4', 'rgba(81,43,212,0.12)'],
      ['Kotlin', 'kotlin', '#7F52FF', 'rgba(127,82,255,0.12)'],
      ['AsyncStorage', 'react', '#61DAFB', 'rgba(97,218,251,0.12)'],
      ['Google Maps API', 'googlemaps', '#4285F4', 'rgba(66,133,244,0.12)'],
      ['Node.js', 'nodedotjs', '#339933', 'rgba(51,153,51,0.12)'],
    ],
  },
];

function hexToFilter(hex) {
  // Returns a CSS filter string that tints white SVG to the given hex color (approximate).
  // Using a precomputed lookup for common brand colors:
  const map = {
    '#61DAFB': 'invert(72%) sepia(68%) saturate(400%) hue-rotate(154deg) brightness(105%)',
    '#F7DF1E': 'invert(85%) sepia(80%) saturate(700%) hue-rotate(5deg)',
    '#3178C6': 'invert(34%) sepia(90%) saturate(600%) hue-rotate(194deg)',
    '#764ABC': 'invert(35%) sepia(60%) saturate(700%) hue-rotate(255deg)',
    '#5A29E4': 'invert(20%) sepia(90%) saturate(1000%) hue-rotate(252deg)',
    '#FFCA28': 'invert(85%) sepia(60%) saturate(700%) hue-rotate(5deg)',
    '#F05032': 'invert(40%) sepia(90%) saturate(900%) hue-rotate(340deg)',
    '#181717': 'invert(10%)',
    '#FF6C37': 'invert(50%) sepia(90%) saturate(700%) hue-rotate(340deg)',
    '#007ACC': 'invert(30%) sepia(90%) saturate(700%) hue-rotate(185deg)',
    '#3DDC84': 'invert(70%) sepia(50%) saturate(700%) hue-rotate(100deg)',
    '#E54B4D': 'invert(40%) sepia(90%) saturate(700%) hue-rotate(310deg)',
    '#30A960': 'invert(55%) sepia(50%) saturate(700%) hue-rotate(105deg)',
    '#414141': 'invert(25%)',
    '#000000': 'invert(0%)',
    '#000020': 'invert(0%)',
    '#F24E1E': 'invert(45%) sepia(90%) saturate(700%) hue-rotate(5deg)',
    '#512BD4': 'invert(25%) sepia(90%) saturate(700%) hue-rotate(252deg)',
    '#7F52FF': 'invert(45%) sepia(80%) saturate(1000%) hue-rotate(232deg)',
    '#4285F4': 'invert(40%) sepia(90%) saturate(700%) hue-rotate(196deg)',
    '#339933': 'invert(50%) sepia(60%) saturate(700%) hue-rotate(90deg)',
    '#json': 'invert(10%)',
  };
  return map[hex] || 'none';
}

function SkillChip({ name, slug, color, bgColor, delay }) {
  const [imgError, setImgError] = useState(false);
  const initials = name.slice(0, 2).toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.35, delay }}
      whileHover={{ y: -3, boxShadow: `0 8px 24px ${bgColor.replace('0.12', '0.35')}` }}
      className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 text-sm font-semibold text-gray-700 select-none"
      style={{ borderWidth: 1.5 }}
    >
      {!imgError ? (
        <img
          src={`${CDN}/${slug}.svg`}
          alt={name}
          width={16}
          height={16}
          style={{ filter: hexToFilter(color) }}
          onError={() => setImgError(true)}
        />
      ) : (
        <span
          className="w-4 h-4 rounded text-[8px] font-bold flex items-center justify-center text-white"
          style={{ background: color, fontSize: 7 }}
        >
          {initials}
        </span>
      )}
      {name}
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="bg-[#F5F3FF] py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <span className="inline-block bg-[#EDE9FE] text-[#7C3AED] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Skills
          </span>
          <h2 className="text-3xl font-bold text-[#0A0F1E]">Technical Expertise</h2>
          <p className="text-gray-500 mt-2">Technologies I use to build world-class mobile experiences</p>
        </div>

        <div className="space-y-10">
          {groups.map((group, gi) => (
            <div key={gi}>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{group.label}</p>
              <div className="flex flex-wrap gap-3">
                {group.skills.map(([name, slug, color, bgColor], i) => (
                  <SkillChip
                    key={name + i}
                    name={name}
                    slug={slug}
                    color={color}
                    bgColor={bgColor}
                    delay={i * 0.04}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
