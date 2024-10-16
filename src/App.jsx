import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PhotoPage from './pages/PhotoPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/unsplash-photo-gallery" element={<HomePage />} />
        <Route path="/unsplash-photo-gallery/photos/:id" element={<PhotoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
