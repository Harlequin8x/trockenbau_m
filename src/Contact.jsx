import Nav from './components/Nav'
import Footer from './sections/Footer'
import ContactHero from './contactSection/ContactHero'
 
const Contact = () => (
  <main className="relative">
    <Nav />
    <section className="padding">
      <ContactHero />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default Contact
