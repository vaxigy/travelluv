import './styles/main.scss';

import Header from './components/Header.jsx';
import Main from './components/Main.jsx';
import Footer from './components/Footer.jsx';
import ScrollResetter from './components/ScrollResetter.jsx';

function App() {
  return (
    <div className='App'>
      <ScrollResetter />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
