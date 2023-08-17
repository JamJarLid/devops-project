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
import Calendar from './calendar/Calendar.jsx';
import Todo from './todo/todo.jsx';
import currentDay from './calendar/currentDay.jsx';

import { kebabify } from './utilities/kebabify.js';
import NewsArticle from './NewsArticle.jsx';

export default function App() {
  const s = useStates('main', {
    menu: [
      { path: '/', Component: Home },
      { label: 'ABOUT US', path: '/om-oss', Component: AboutUs },
      { label: 'NEWS', path: '/nyheter', Component: News },
      { label: 'CALENDAR', path: '/calendar', Component: Calendar },
      //{ label: 'TODO', path: '/todo', Component: Todo },
      { path: '/nyheter/:newsPath', Component: NewsArticle },
    ],
    news: [],
  });

  useEffect(() => {
    (async () => {
      let news = await (await fetch('/json/news.json')).json();
      for (let article of news) {
        article.path = '/nyheter/' + kebabify(article.title);
      }
      s.news = news;
    })();
  }, []);

  return (
    <BrowserRouter>
      <header>
        <Header />
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
