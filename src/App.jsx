// useful hooks, comment these in, when needed:
import { useState } from 'react';
import { useEffect } from 'react';
import { kebabify } from './utilities/kebabify.js';
import { useStates } from './utilities/states.js';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './Home';
import Menu from './Menu.jsx';
import Header from './Header.jsx'

export default function App() {

  const s = useStates('main', {
    menu: [
      { path: '/', Component: Home },
    ],
  });

  return <BrowserRouter>
    <header>
      <Header/>
      <Menu/>
    </header>
    <main>
      <Routes>
        {s.menu.map(({ path, Component }) => 
          <Route path={path} element={<Component />} />
        )}
      </Routes>
    </main>
    <footer></footer>
  </BrowserRouter>;
}