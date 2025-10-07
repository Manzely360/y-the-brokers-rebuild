import Header from './components/Header';
import Hero from './components/Hero';
import CertifiedProjects from './components/CertifiedProjects';
import Services from './components/Services';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Header />
      <main>
        <Hero />
        <CertifiedProjects />
        <Services />
        <ContactForm />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
