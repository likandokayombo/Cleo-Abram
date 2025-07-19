import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './components/Home';
import About from './components/About';
import Socials from './components/Socials';
import NotFoundPage from './pages/NotFoundPage';
import Photo from './components/Photo';
import Footer from './components/Footer';
import Video from './components/Video';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route index element={<Photo />} />
      <Route index element={<Footer />} />
      <Route index element={<Video />} />
      <Route path="about" element={<About />} />
      <Route path="socials" element={<Socials />} />
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;