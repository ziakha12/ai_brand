import { Route, Routes } from 'react-router-dom';

import About from './pages/common/About';

import Home_04 from './pages/home/Home_04';
import Blog_details from './pages/common/Blog_details';
import Blog from './pages/common/Blog';
import Contact from './pages/common/Contact';
import Error_404 from './pages/common/Error_404';
import Faq_02 from './pages/common/faq/faq_02/Faq_02';
import Login from './pages/common/Login';
import Portfolio_details from './pages/common/Portfolio_details';
import Portfolio from './pages/common/Portfolio';
import Pricing from './pages/common/Pricing';
import Reset_password from './pages/common/Reset_password';
import Services_Details from './pages/common/Service_Details';
import Services from './pages/common/Services';
import Signup from './pages/common/Signup';
import Team_details from './pages/common/Team_details';
import Team from './pages/common/team/Team';
import useJOSAnimation from './hooks/useJOSAnimation';
import Layout from './components/layout/Layout';
import Faq_01 from './pages/common/faq/faq_01/Faq_01';

function App() {
  // Init JOS Animation
  useJOSAnimation();

  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path='/' element={<Home_01 />} /> */}
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='blog' element={<Blog />} />
          <Route path='blog-details' element={<Blog_details />} />
          <Route path='portfolio' element={<Portfolio />} />
          <Route path='portfolio-details' element={<Portfolio_details />} />
          <Route path='faq-1' element={<Faq_01 />} />
          <Route path='faq-2' element={<Faq_02 />} />
          <Route path='team' element={<Team />} />
          <Route path='team-details' element={<Team_details />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='reset-password' element={<Reset_password />} />
          <Route path='services' element={<Services />} />
          <Route path='service-details' element={<Services_Details />} />
          <Route path='error-404' element={<Error_404 />} />
          <Route path='*' element={<Error_404 />} />
        </Route>
        {/* <Route path='home-2' element={<Home_02 />} />
        <Route path='home-3' element={<Home_03 />} /> */}
        <Route path='/' element={<Home_04 />} />
      </Routes>
    </>
  );
}

export default App;
