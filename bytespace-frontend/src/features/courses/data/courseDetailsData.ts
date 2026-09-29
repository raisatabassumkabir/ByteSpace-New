import { CourseReview, ModuleItem } from '@/types';

export const courseDetailsData = {
  id: 'build-digital-asset',
  title: 'Build Digital Asset: A Comprehensive Guide',
  subtitle: 'Unlock the Power of Digital Creation with Expert Guidance',
  instructor: {
    id: 'purepearl-studio',
    name: 'PurePearl Studio',
    username: 'purepearl studio',
    role: 'Professional Creator',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    bio: 'Passionate UI/UX Web designer creating scalable design systems and digital products.',
  },
  level: 'Intermediate',
  rating: 4.8,
  reviewCount: 172,
  studentsCount: 199,
  lessonsCount: 112,
  duration: '24 hours',
  price: 25,
  originalPrice: 50,
  videoPoster: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',

  about: {
    descriptionParagraphs: [
      'Embark on an enlightening exploration into the world of digital creation with our comprehensive course, "Build Digital Assets: A Comprehensive Guide." This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.',
      'In the initial modules, you\'ll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.',
      'As you progress through the course, you\'ll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.',
    ],
    sneakPeekImages: [
      {
        id: 'sneak-1',
        title: 'Design Sketches',
        url: '/images/wireframe-sketches.png',
      },
      {
        id: 'sneak-2',
        title: 'Icon & Asset System',
        url: '/images/icon-design-assets.png',
      },
      {
        id: 'sneak-3',
        title: 'Data & Analytics',
        url: '/images/data-analytics-dashboard.png',
      },
      {
        id: 'sneak-4',
        title: 'Workspace & Studio',
        url: '/images/productivity-workstation.png',
      },
    ],
    keyPoints: [
      'Foundational Concepts',
      'Design Principles Mastery',
      'Advanced Techniques in Digital Creation',
      'Project Showcase and Critique',
      'Optimizing for Various Platforms',
      'Digital Asset Management Best Practices',
      'Monetization Strategies',
      'Capstone Project : Building Your Portfolio',
    ],
  },

  modules: [
    {
      id: 'mod-1',
      number: 1,
      title: 'Module 1: Introduction to Digital Assets',
      description:
        'Lay the groundwork with lessons like \'Understanding Digital Elements\' and \'Navigating Design Software Tools\'. Dive into the essentials of digital asset creation.',
      duration: '12 mins',
    },
    {
      id: 'mod-2',
      number: 2,
      title: 'Module 2: Design Principles for Impact',
      description:
        'Master the principles that drive impactful designs with lessons such as \'Color Theory in Digital Design\' and \'Typography Essentials\'. Elevate your visual communication skills.',
      duration: '21 mins',
    },
    {
      id: 'mod-3',
      number: 3,
      title: 'Module 3: User-Centric Design Strategies',
      description:
        'Understand Design Thinking in Digital Creation and delve into \'User Experience (UX) Essentials\'. Craft digital assets with a focus on user-centric design.',
      duration: '14 mins',
    },
    {
      id: 'mod-4',
      number: 4,
      title: 'Module 4: Interactive Media and Engagement',
      description:
        'Engage your audience with lessons like \'Creating Interactive Presentations\' and \'Integrating Multimedia Elements\'. Master the art of arresting immersive digital experiences.',
      duration: '18 mins',
    },
    {
      id: 'mod-5',
      number: 5,
      title: 'Module 5: Project Showcase and Critique',
      description:
        'Perfect your presentation skills with \'Effective Presentation Techniques\' and embrace collaboration with \'Peer Critique and Collaboration\'. Showcase your work with confidence.',
      duration: '25 mins',
    },
    {
      id: 'mod-6',
      number: 6,
      title: 'Module 6: Optimizing Digital Assets for Various Platforms',
      description:
        'Adapt your digital creations for \'Mobile Platforms\' and optimize for \'Social Media\'. Ensure widespread accessibility and engagement across diverse digital landscapes.',
      duration: '30 mins',
    },
  ] as ModuleItem[],

  sidebarPreviewLessons: [
    { number: '01', title: 'Introduction to Digital Assets', duration: '12 mins' },
    { number: '02', title: 'Design Principles for Impacts', duration: '21 mins' },
    { number: '03', title: 'Advanced Techniques in Digital Creation', duration: '14 mins' },
  ],

  inclusions: [
    { label: 'Learning Resources', icon: 'BookOpen' },
    { label: 'Quality Lesson Videos', icon: 'Video' },
    { label: 'Certificate of Completion', icon: 'Award' },
    { label: 'Private Consultation', icon: 'MessageSquare' },
  ],

  reviewsData: {
    aggregateRating: 4.7,
    totalRatings: 949,
    ratingDistribution: [
      { stars: 5, count: 750, percentage: 79 },
      { stars: 4, count: 120, percentage: 13 },
      { stars: 3, count: 51, percentage: 5 },
      { stars: 2, count: 12, percentage: 1 },
      { stars: 1, count: 16, percentage: 2 },
    ],
    reviewsList: [
      {
        id: 'rev-1',
        name: 'PurePearl Studio',
        role: 'UI/UX Designer',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: 'a year ago',
        comment:
          'This course provided me with a comprehensive understanding of digital asset creation. The lessons were insightful, practical, and immediately applicable to my work. Highly recommended!',
      },
      {
        id: 'rev-2',
        name: 'Alison Flores',
        role: 'UI/UX Designer',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: 'a year ago',
        comment:
          'This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I\'ve learned!',
      },
      {
        id: 'rev-3',
        name: 'Cody Fisher',
        role: 'UI/UX Designer',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: 'a year ago',
        comment:
          'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
      },
      {
        id: 'rev-4',
        name: 'Brooklyn Simmons',
        role: 'UI/UX Designer',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
        rating: 5,
        date: 'a year ago',
        comment:
          'The lessons on optimizing digital assets for various platforms were particularly insightful. The course caters to the evolving digital landscape, and the engaging content kept me motivated throughout.',
      },
    ] as CourseReview[],
  },
};
