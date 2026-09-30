import React from 'react';

const paths = [
  { name: 'Design', image: '/images/learning-paths/path-design.png' },
  { name: 'Development', image: '/images/learning-paths/path-development.png' },
  { name: 'IT & Software', image: '/images/learning-paths/path-it.png' },
  { name: 'Business', image: '/images/learning-paths/path-business.png' },
  { name: 'Marketing', image: '/images/learning-paths/path-marketing.png' },
  { name: 'Photography', image: '/images/learning-paths/path-photography.png' },
];

export const LearningPaths: React.FC = () => {
  return (
    <section className="py-20 bg-white border-b border-surface-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-display font-black text-surface-900 tracking-tight leading-tight">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="text-xs sm:text-sm text-surface-500 max-w-3xl mx-auto leading-relaxed">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 sm:gap-12 lg:gap-10 w-full max-w-7xl mx-auto px-2">
          {paths.map((path) => (
            <button
              key={path.name}
              className="group flex flex-col items-center justify-center w-full aspect-square max-w-[180px] mx-auto bg-white border border-surface-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                <img src={path.image} alt={path.name} className="w-full h-full object-contain" />
              </div>
              <span className="text-xs sm:text-sm font-semibold text-surface-900">
                {path.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
