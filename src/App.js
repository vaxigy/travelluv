import './styles/main.scss';

import { useState } from 'react';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import ScrollResetter from './components/ScrollResetter.jsx';
import SearchOverlay from './components/SearchOverlay.jsx';

function App() {
  const [isSearchOverlayOpen, setIsSearchOverlayOpen] = useState(false);

  return (
    <div className={`App ${isSearchOverlayOpen ? 'popup-open' : ''}`}>
      <ScrollResetter />
      <Header onSearchClick={() => setIsSearchOverlayOpen(true)}/>
      <Main />
      <Footer />
      <SearchOverlay isOpen={isSearchOverlayOpen} onClose={() => setIsSearchOverlayOpen(false)}/>
    </div>
  );
}

export default App;
