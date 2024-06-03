import { Waermeschutz } from '../assets/images'

const ServiceHero = () => {
  return (
    <section>
      <div>
        <p>Unsere Leistungen</p>
        <br></br>
      </div>

      <div className="flex flex-1 flex-col w-full max-sm:w-full rounded-xl max-h-72">
        <img
          src={Waermeschutz}
          alt={name}
          className="w-[350px] h-[280px]"
        />
      </div>
    </section>
  )
}

export default ServiceHero
