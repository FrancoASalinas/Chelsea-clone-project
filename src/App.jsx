import './index.css';
import Header from './modules/Header';
import Main from './modules/Main';
import Cookies from './modules/Cookies';
import Footer from './modules/Footer';
import Nav from './modules/Nav';
import SearchNav from './modules/SearchNav';
import { useEffect, useState } from 'react';

function App() {
  const [floatNav, setFloatNav] = useState(false);
  const [searchNav, setSearchNav] = useState(false);
  const [main, setMain] = useState(true);

  useEffect(() => {
    floatNav || searchNav ? setMain(false) : setMain(true);
  }, [floatNav, searchNav]);

  return (
    <div className=" w-full">
      <Header
        onOpenNav={() => setFloatNav(true)}
        onOpenSearch={() => setSearchNav(true)}
      />
      {main && <Main />}
      <Footer />
      <Cookies />
      <Nav active={floatNav} onClick={() => setFloatNav(false)} />
      <SearchNav active={searchNav} onClick={() => setSearchNav(false)} />
    </div>
  );
}

export default App;
