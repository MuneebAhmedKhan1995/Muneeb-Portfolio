import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import FinalProjectPage from './pages/finalproject'
import ReactProjectsPage from "./pages/ReactProjectsPage";
import HTMLCSSProjectsPage from './pages/HTMLCSSProjects';
import JavaScriptProjects from './pages/JavaScriptProjects';
import TypeScriptProjects from './pages/TypeScriptProjects';
import Website from './pages/WebsiteProjects';
import MERNStackProjectsPage from './pages/MERNStackProject';
import CourseCertificatePage from './pages/CourseCertificate'; // Fixed import path
import FrontendInternshipCertificatePage from './pages/frontendInternship';
import BackendInternshipCertificatePage from './pages/backendInternship';
import HackathonCertificatePage from './pages/HackathonCertificate';
import CourseraCertificatePage from './pages/CourseraCertificate';
import JavaScriptCertificatePage from './pages/JavaScriptCertificate';
import FullStackInternshipCertificatePage from './pages/FullStackInternship'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects/finalproject" element={<FinalProjectPage />} />
        <Route path="/projects/react" element={<ReactProjectsPage />} />
        <Route path="/projects/html-css" element={<HTMLCSSProjectsPage />} />
        <Route path="/projects/javascript" element={<JavaScriptProjects />} />
        <Route path="/projects/typescript" element={<TypeScriptProjects />} />
        <Route path="/projects/MERNStack" element={<MERNStackProjectsPage />} />
        <Route path="/projects/website" element={<Website />} />
        <Route path="/certificates/frontendInternship" element={<FrontendInternshipCertificatePage />} />
        <Route path="/certificates/backendInternship" element={<BackendInternshipCertificatePage />} />
        <Route path="/certificates/FullStackInternship" element={<FullStackInternshipCertificatePage />} />
        <Route path="/certificates/smit" element={<CourseCertificatePage />} />
        <Route path="/certificates/hackathon" element={<HackathonCertificatePage />} />
        <Route path="/certificates/google" element={<CourseraCertificatePage />} />
        <Route path="/certificates/Cisco" element={<JavaScriptCertificatePage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;