import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Service from './Pages/Service';
import Header from './Components/Header';

const queryClient = new QueryClient();

export default function App() {
  return (
    <Router>
      <QueryClientProvider client={queryClient}>
        <div>
          <Header />
          <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </Router>
  );
}