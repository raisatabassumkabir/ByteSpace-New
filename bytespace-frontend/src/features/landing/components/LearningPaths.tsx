import React from 'react';
import { PenTool, MonitorSmartphone, Laptop, Building2, Megaphone, Camera } from 'lucide-react';

const paths = [
  { name: 'Design', icon: PenTool },
  { name: 'Development', icon: MonitorSmartphone },
  { name: 'IT & Software', icon: Laptop },
  { name: 'Business', icon: Building2 },
  { name: 'Marketing', icon: Megaphone },
  { name: 'Photography', icon: Camera },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 w-full max-w-7xl mx-auto px-2">
          {paths.map((path) => {
            const Icon = path.icon;
            return (
              <button
                key={path.name}
                className="group flex flex-col items-center justify-center w-full aspect-square max-w-[180px] mx-auto bg-white border border-surface-200 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-neon flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-surface-900 stroke-[2]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-surface-900">
                  {path.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};
