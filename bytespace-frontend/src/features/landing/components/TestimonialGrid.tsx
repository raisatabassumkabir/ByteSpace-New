import React from 'react';

export const TestimonialGrid: React.FC = () => {
  const testimonials = [
    {
      id: 'test-1',
      name: 'Sarah M.',
      role: 'Enthusiastic Learner',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
      content:
        '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
    },
    {
      id: 'test-2',
      name: 'James L.',
      role: 'Lifelong Learner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
      content:
        '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
    },
    {
      id: 'test-3',
      name: 'Alex B.',
      role: 'Inspired Creator',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
      content:
        '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
    },
  ];

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden border-t border-surface-200 bg-white">
      
      {/* Background Glows / Shading matching the reference */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] bg-[#e2ff66]/40 rounded-full blur-[100px] lg:blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-blue-400/15 rounded-full blur-[100px] lg:blur-[120px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 z-10">
        
        {/* Section Header: 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-[36px] sm:text-[40px] lg:text-[44px] font-display font-bold text-slate-900 tracking-tight leading-[1.2]">
              Discover What Our<br className="hidden lg:block" /> Community Is Saying
            </h2>
          </div>
          <div>
            <p className="text-[14px] sm:text-[15px] lg:text-[16px] text-slate-500 leading-[1.8] font-normal">
              At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
            </p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white/95 backdrop-blur-sm rounded-[32px] p-8 lg:p-10 border border-white shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col"
            >
              {/* Avatar */}
              <div className="mb-6">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-16 h-16 rounded-full object-cover bg-brand-100 p-1"
                />
              </div>

              {/* Author Meta */}
              <div className="mb-6">
                <h4 className="font-bold text-[18px] lg:text-[20px] text-slate-900 leading-snug">
                  {t.name}
                </h4>
                <p className="text-[14px] text-blue-500 font-light mt-1">
                  {t.role}
                </p>
              </div>

              {/* Quote */}
              <p className="text-slate-500 text-[14px] lg:text-[15px] leading-[1.8] font-light">
                {t.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
