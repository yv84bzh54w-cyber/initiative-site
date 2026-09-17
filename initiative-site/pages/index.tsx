import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Document from '../components/Document';
import FAQ from '../components/FAQ';
import SignPetition from '../components/SignPetition';
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
      <SignPetition />
      
      <section id="contact">
        <h2>Get Involved</h2>
        <div className="contact-info">
          <p>For questions, organisational support, media enquiries or information not available on the website, contact us.</p>
          <p>
            Email us at: <a href="mailto:contact@ruleoflawappeal.org" className="email-link">contact@ruleoflawappeal.org</a>
          </p>
        </div>
        <ContactForm />
      </section>

      <section id="finance">
        <h2>Finance</h2>
        <div className="contact-info">
          <p>This initiative is the work of volunteers: the main author, Assembly members, editors, verifiers of machine translations as well as the website builder, carried out all work on a voluntary basis. No single entity provided financial support. Organizing a campaign, however, costs money. The Assembly welcomes financial support and any other support to increase outreach. Please contact for contributions: <a href="mailto:contact@ruleoflawappeal.org" className="email-link">contact@ruleoflawappeal.org</a></p>
        </div>
      </section>

      <Footer />
    </>
  );
}
