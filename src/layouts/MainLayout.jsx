import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = () => {
  return (
      <div className='App'>
          <Navbar />
      {/* Header/Navigation would go here */}
      <main>
        <Outlet /> {/* This renders the child routes */}
      </main>
      {/* Footer would go here */}
    </div>
  );
};

export default MainLayout;