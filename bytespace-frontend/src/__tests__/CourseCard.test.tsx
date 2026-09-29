import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { CourseCard } from '@/features/courses/components/CourseCard';
import { mockCourses } from '@/features/courses/data/mockCourses';

describe('CourseCard Component', () => {
  const sampleCourse = mockCourses[0];

  const renderWithRouter = (ui: React.ReactElement) => {
    return render(<BrowserRouter>{ui}</BrowserRouter>);
  };

  it('renders course title, instructor, and price', () => {
    renderWithRouter(<CourseCard course={sampleCourse} />);

    expect(screen.getByText(sampleCourse.title)).toBeInTheDocument();
    expect(screen.getByText(sampleCourse.instructor.name)).toBeInTheDocument();
    expect(screen.getByText(/\$25/i)).toBeInTheDocument();
  });

  it('renders rating and lesson count', () => {
    renderWithRouter(<CourseCard course={sampleCourse} />);

    expect(screen.getByText(sampleCourse.rating.toFixed(1))).toBeInTheDocument();
    expect(screen.getByText(/17 Lessons/i)).toBeInTheDocument();
  });
});
