import './style/App.scss';
import { createContext } from 'react';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast';

export const AppContext = createContext();

function App() {
  const appName = 'Github User Search';
  const navigationArray = [
    { name: 'App description', path: '' },
    { name: 'Search form', path: 'api' },
  ];
  return (
    <AppContext.Provider value={{ appName, navigationArray }}>
      <main>
        <NavBar />
        <section className="section-container">
          <Outlet />
        </section>
        <Footer />
        <Toaster />
      </main>
    </AppContext.Provider>
  );
}

export default App;
