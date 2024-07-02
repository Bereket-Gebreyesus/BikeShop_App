import React from 'react';
import ReactDOM from 'react-dom/client'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import App from './App';
import NewReleases from './pages/new-releases/NewReleases';
import Home from './pages/Home';
import TrendingBikes from './pages/trending/TrendingBikes';
import UpcomingBikes from './pages/upcoming/UpcomingBikes';
import FavoriteBikes from './pages/favorite/FavoriteBikes';

const routing = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/new-releases" element={<NewReleases />} />
        <Route path="/trending-bikes" element={<TrendingBikes />} />
        <Route path="/upcoming-bikes" element={<UpcomingBikes />} />
        <Route path="/favorite-bikes" element={<FavoriteBikes />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById('root')).render(routing);