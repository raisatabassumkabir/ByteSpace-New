import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import CourseDetails from '@/pages/CourseDetails';
import CreatorProfile from '@/pages/CreatorProfile';
import NotFound from '@/pages/NotFound';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/courses/:courseId" element={<CourseDetails />} />
        <Route path="/creator" element={<CreatorProfile />} />
        <Route path="/creator/:creatorId" element={<CreatorProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
