import './index.css';
import Header from './modules/Header';
import Main from './modules/Main';
import Cookies from './modules/Cookies';
import Footer from './modules/Footer';

function App() {
  return (
    <div className=" w-full">
      <Header />
      <Main />
      <Footer />
      <Cookies />
    </div>
  );
}

export default App;
