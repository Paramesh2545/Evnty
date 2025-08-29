import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, align = 'center' }) => {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  const mxAuto = align === 'center' ? 'mx-auto' : '';

  return (
    <div className={`${alignClass} mb-12`}>
      <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">{title}</h2>
      {subtitle && <p className={`mt-4 max-w-2xl ${mxAuto} text-lg text-gray-400`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;