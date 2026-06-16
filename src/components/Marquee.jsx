const CDN = 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons';

// [slug, color, bg]
const icons = [
  ['react', '#61DAFB', 'rgba(97,218,251,0.15)'],
  ['javascript', '#F7DF1E', 'rgba(247,223,30,0.15)'],
  ['typescript', '#3178C6', 'rgba(49,120,198,0.15)'],
  ['redux', '#764ABC', 'rgba(118,74,188,0.15)'],
  ['firebase', '#FFCA28', 'rgba(255,202,40,0.15)'],
  ['git', '#F05032', 'rgba(240,80,50,0.15)'],
  ['github', '#181717', 'rgba(24,23,23,0.08)'],
  ['postman', '#FF6C37', 'rgba(255,108,55,0.15)'],
  ['visualstudiocode', '#007ACC', 'rgba(0,122,204,0.15)'],
  ['figma', '#F24E1E', 'rgba(242,78,30,0.15)'],
  ['androidstudio', '#3DDC84', 'rgba(61,220,132,0.15)'],
  ['expo', '#000020', 'rgba(0,0,32,0.06)'],
  ['nodedotjs', '#339933', 'rgba(51,153,51,0.15)'],
  ['kotlin', '#7F52FF', 'rgba(127,82,255,0.15)'],
  ['tailwindcss', '#06B6D4', 'rgba(6,182,212,0.15)'],
  ['googlemaps', '#4285F4', 'rgba(66,133,244,0.15)'],
  ['android', '#3DDC84', 'rgba(61,220,132,0.15)'],
  ['apple', '#000000', 'rgba(0,0,0,0.06)'],
  ['xcode', '#147EFB', 'rgba(20,126,251,0.15)'],
];

const filterMap = {
  '#61DAFB': 'invert(72%) sepia(68%) saturate(400%) hue-rotate(154deg) brightness(105%)',
  '#F7DF1E': 'invert(85%) sepia(80%) saturate(700%) hue-rotate(5deg)',
  '#3178C6': 'invert(34%) sepia(90%) saturate(600%) hue-rotate(194deg)',
  '#764ABC': 'invert(35%) sepia(60%) saturate(700%) hue-rotate(255deg)',
  '#FFCA28': 'invert(85%) sepia(60%) saturate(700%) hue-rotate(5deg)',
  '#F05032': 'invert(40%) sepia(90%) saturate(900%) hue-rotate(340deg)',
  '#181717': 'invert(10%)',
  '#FF6C37': 'invert(50%) sepia(90%) saturate(700%) hue-rotate(340deg)',
  '#007ACC': 'invert(30%) sepia(90%) saturate(700%) hue-rotate(185deg)',
  '#F24E1E': 'invert(45%) sepia(90%) saturate(700%) hue-rotate(5deg)',
  '#3DDC84': 'invert(70%) sepia(50%) saturate(700%) hue-rotate(100deg)',
  '#000020': 'invert(0%)',
  '#339933': 'invert(50%) sepia(60%) saturate(700%) hue-rotate(90deg)',
  '#7F52FF': 'invert(45%) sepia(80%) saturate(1000%) hue-rotate(232deg)',
  '#06B6D4': 'invert(60%) sepia(80%) saturate(500%) hue-rotate(160deg)',
  '#4285F4': 'invert(40%) sepia(90%) saturate(700%) hue-rotate(196deg)',
  '#000000': 'invert(0%)',
  '#147EFB': 'invert(35%) sepia(90%) saturate(700%) hue-rotate(196deg)',
};

function IconPill({ slug, color, bg }) {
  return (
    <div
      className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 mx-2"
      style={{ background: bg, border: '1.5px solid rgba(0,0,0,0.06)' }}
    >
      <img
        src={`${CDN}/${slug}.svg`}
        alt={slug}
        width={28}
        height={28}
        style={{ filter: filterMap[color] || 'none' }}
      />
    </div>
  );
}

function Row({ direction }) {
  const doubled = [...icons, ...icons];
  return (
    <div className="overflow-hidden w-full">
      <div className={`flex ${direction === 'left' ? 'marquee-left' : 'marquee-right'} w-max`}>
        {doubled.map(([slug, color, bg], i) => (
          <IconPill key={i} slug={slug} color={color} bg={bg} />
        ))}
      </div>
    </div>
  );
}

export default function Marquee() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 mb-10 text-center">
        <span className="inline-block bg-gray-100 text-gray-500 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-2">
          Tech Stack
        </span>
        <h2 className="text-3xl font-bold text-[#0A0F1E]">Tech I Work With</h2>
      </div>
      <div className="flex flex-col gap-4">
        <Row direction="left" />
        <Row direction="right" />
      </div>
    </section>
  );
}
