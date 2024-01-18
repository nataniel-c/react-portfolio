import './App.css';

import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
      </div>
      <main className="container">
        {/* The Outlet component will be replaced by the proper page based on the URL */}
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </>
      
  )
}

export default App;
