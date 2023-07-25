import Navbar from "./components/Navbar";
import HeroImage from "./components/HeroImage";
import ProductGroup from "./components/ProductGroup";
import ContactForm from "./components/ContactForm";
import './css/App.css';

function App() {
  return (
    <div className="App container-sm">
      <header className="header">
        <Navbar />
      </header>
      <hr/>
      <section className="hero">
        <HeroImage />
      </section>
      <section className="product-group" id="product-group">
        <ProductGroup />
      </section>
      <section className="contact-form" id="contact-form">
        <ContactForm />
      </section>
    </div>
  );
}

export default App;
