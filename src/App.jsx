// useful hooks, comment these in, when needed:
import { useState } from 'react';
import { useEffect } from 'react';
import { useStates } from './utilities/states.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import AboutUs from './AboutUs.jsx';
import News from './News.jsx';
import Calendar from './calendar/Calendar.jsx'

export default function App() {
  const s = useStates('main', {
    menu: [
      { path: '/', Component: Home },
      { label: 'OM OSS', path: '/om-oss', Component: AboutUs },
      { label: 'NYHETER', path: '/nyheter', Component: News },
      { label: 'calendar', path: '/calendar', Component: Calendar },
    ],
  });

  return (
    <BrowserRouter>
      <header>
        <Header />
        <Calendar/>
      </header>
      <main>
        <Routes>
          {s.menu.map(({ path, Component }) => (
            <Route path={path} element={<Component />} />
          ))}
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
