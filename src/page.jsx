import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Navbar from './components/navbar.jsx';
import Banner from './components/banner.jsx';
import About from './components/about.jsx';
import Projects from './components/projects.jsx';
import Gallery from './components/gallery.jsx';
import Contact from './components/contact.jsx';
import Signup from './components/signup.jsx';
import Articles from './components/articles.jsx';
import Footer from './components/footer.jsx';

function HomePage() {
  return (
  <>
  <Banner />
  <About />
  <Projects />
  <Gallery />
  <Contact />
  <Signup />
  <Articles />
  </>
  );
  }

function AuthPage() {
return (
  <div className="auth-panels">
  <Login />
  <Register />
  </div>
  );
  }

function Page() {
return (
<BrowserRouter>
<Navbar />

  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<AuthPage />} />
    <Route path="/signup" element={<AuthPage />} />
  </Routes>

  <Footer />
</BrowserRouter>

);
}

export default Page;