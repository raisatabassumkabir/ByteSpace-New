import { create } from 'zustand';

interface UIState {
  isMobileMenuOpen: boolean;
  selectedCategory: string;
  searchQuery: string;
  bookmarkedCourseIds: string[];
  setMobileMenuOpen: (isOpen: boolean) => void;
  toggleMobileMenu: () => void;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  toggleBookmark: (courseId: string) => void;
  isBookmarked: (courseId: string) => boolean;
}

export const useUIStore = create<UIState>((set, get) => ({
  isMobileMenuOpen: false,
  selectedCategory: 'All Courses',
  searchQuery: '',
  bookmarkedCourseIds: ['course-1', 'course-4'],

  setMobileMenuOpen: (isOpen) => set({ isMobileMenuOpen: isOpen }),
  toggleMobileMenu: () => set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  setSelectedCategory: (category) => set({ selectedCategory: category }),
  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleBookmark: (courseId) =>
    set((state) => {
      const exists = state.bookmarkedCourseIds.includes(courseId);
      return {
        bookmarkedCourseIds: exists
          ? state.bookmarkedCourseIds.filter((id) => id !== courseId)
          : [...state.bookmarkedCourseIds, courseId],
      };
    }),

  isBookmarked: (courseId) => get().bookmarkedCourseIds.includes(courseId),
}));
