import Nav from './components/Nav'
import Footer from './sections/Footer'
import Hero from './sections/Hero'

const App = () => (
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App
