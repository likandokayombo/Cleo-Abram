import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
      <div className='App'>
          <Navbar />
      {/* Header/Navigation would go here */}
      <main>
        <Outlet /> {/* This renders the child routes */}
      </main>
      <Footer />
      {/* Footer would go here */}
    </div>
  );
};

export default MainLayout;