import { Akustikbau, Altbausanierung, Brandschutz, Lichtakzente, Schallschutz, Waermeschutz } from '../assets/images'

const ServiceHero = () => {
  return (
    <section>
      <div>
        <p className="text-4xl font-semibold mb-8 ml-24">Unsere Leistungen</p>
        <br />
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="flex flex-col items-center">
          <img
            src={Waermeschutz}
            alt="Wärmeschutz"
            className="w-[550px] h-[400px] border-2 object-cover the-images"
          />
          <p className="text-center mt-4 mb-11 font-bold">Wärmeschutz</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Brandschutz}
            alt="Brandschutz"
            className="w-[550px] h-[400px] border-2 object-cover the-images"
          />
          <p className="text-center mt-4 font-bold">Brandschutz</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Altbausanierung}
            alt="Altbausanierung"
            className="w-[550px] h-[400px] border-2 object-cover the-images"
          />
          <p className="text-center mt-4 mb-11 font-bold">Altbausanierung</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Akustikbau}
            alt="Akustikbau"
            className="w-[550px] h-[400px] border-2 object-cover the-images"
          />
          <p className="text-center mt-4 font-bold">Akustikbau</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Schallschutz}
            alt="Schallschutz"
            className="w-[550px] h-[400px] border-2 object-cover the-images"
          />
          <p className="text-center mt-4 font-bold">Schallschutz</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src={Lichtakzente}
            alt="Lichtakzente"
            className="w-[550px] h-[400px] border-2 object-cover the-images"
          />
          <p className="text-center mt-4 font-bold">Lichtakzente</p>
        </div>

      </div>
    </section>
  )
}

export default ServiceHero
