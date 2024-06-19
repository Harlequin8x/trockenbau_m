import Nav from './components/Nav'
import Footer from './sections/Footer'
import AboutUsHero from './aboutUsSection/AboutUsHero'

const AboutUs = () => (
  <main className="relative">
    <Nav />
    <section className="padding">
      <AboutUsHero />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default AboutUs
