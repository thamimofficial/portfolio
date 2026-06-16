export default function ImageOrPlaceholder({ src, label, className = '', style = {}, alt = '' }) {
  const isPlaceholder = !src || src.startsWith('YOUR_') || src.startsWith('LOCALITES') || src.startsWith('SMARTYUPIES') || src.startsWith('VIVIMART') || src.startsWith('GULLFRIEND') || src.startsWith('SPENDRA') || src.startsWith('PHOTO');

  if (isPlaceholder) {
    return (
      <div
        className={`flex items-center justify-center bg-gray-50 border-2 border-dashed border-[#2563EB] rounded-2xl text-center ${className}`}
        style={style}
      >
        <span className="text-xs font-mono text-[#2563EB] px-2">{label}</span>
      </div>
    );
  }

  return <img src={src} alt={alt} className={className} style={style} />;
}
