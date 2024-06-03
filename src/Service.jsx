import Nav from './components/Nav'
import Footer from './sections/Footer'
import ServiceHero from './serviceSection/ServiceHero'

const Service = () => (
  <main className="relative">
    <Nav />
    <section className="padding">
      <ServiceHero />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default Service
