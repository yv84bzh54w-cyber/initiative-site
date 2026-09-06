import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Document from '../components/Document';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Document />
      <FAQ />
      
      <section id="contact">
        <h2>Get in Touch</h2>
        <div className="contact-info">
          <p>For questions, organisational support, media enquiries or information not available on the website, contact us.</p>
          <p>
            Email us at: <a href="mailto:contact@ruleoflawappeal.org" className="email-link">contact@ruleoflawappeal.org</a>
          </p>
        </div>
        <ContactForm />
      </section>

      <Footer />
    </>
  );
}
