import { headerLogo } from '../assets/images'
import { navLinks } from '../constants'

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container border-b border-slate-gray pb-4">
        <a href="/">
          <img
            src={headerLogo}
            alt="Logo"
            width={130}
            height={29}
          />
        </a>

        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <ul className="nav-menu"> 
          </ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray font-semibold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Nav