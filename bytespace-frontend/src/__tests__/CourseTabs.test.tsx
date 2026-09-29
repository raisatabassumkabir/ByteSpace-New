import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CourseTabs } from '@/features/courses/components/CourseTabs';

describe('CourseTabs Component', () => {
  it('renders all 3 tabs: About, Lessons, Reviews', () => {
    const handleChange = vi.fn();
    render(<CourseTabs activeTab="about" onChange={handleChange} />);

    expect(screen.getByRole('button', { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /lessons/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /reviews/i })).toBeInTheDocument();
  });

  it('calls onChange callback when clicking a tab', () => {
    const handleChange = vi.fn();
    render(<CourseTabs activeTab="about" onChange={handleChange} />);

    fireEvent.click(screen.getByRole('button', { name: /lessons/i }));
    expect(handleChange).toHaveBeenCalledWith('lessons');

    fireEvent.click(screen.getByRole('button', { name: /reviews/i }));
    expect(handleChange).toHaveBeenCalledWith('reviews');
  });
});
