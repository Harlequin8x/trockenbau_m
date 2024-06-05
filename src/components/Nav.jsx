import { headerLogo } from '../assets/images'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container border-b border-slate-gray pb-4 max-width-navbar">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ml-96">
          <div className="font-montserrat leading-normal text-lg text-slate-gray font-semibold flex space-x-16">
            <Link to="/leistungen">Leistungen </Link>
            <Link to="/über-uns">Über Uns </Link>
            <Link to="/kontakt">Kontakt </Link>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
