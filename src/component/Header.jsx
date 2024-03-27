import { CaretDown } from "phosphor-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="px-4 md:px-12 py-4 flex justify-between items-center shadow">
      <div>Gopal Metal Ind</div>

      <nav className="hidden lg:flex justify-between gap-5 font-medium">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <div className="overflow-hidden float-left group">
          <button className="border-none outline-none flex items-center gap-1">
            Product
            <CaretDown />
          </button>
          <div className="hidden absolute z-100 min-w-[160px]shadow-sla300 group-hover:flex flex-col bg-blue-50">
            <Link className="px-4 py-2">Flanges</Link>
            <Link className="px-4 py-2">Forged Fittings</Link>
          </div>
        </div>
        <NavLink to={"/quality"}>Quality</NavLink>
        <div className="overflow-hidden float-left group">
          <button className="border-none outline-none flex items-center gap-1">
            Technical info <CaretDown />
          </button>
          <div className="hidden absolute z-1 min-w-[160px]shadow-slate-300 group-hover:flex flex-col bg-blue-50">
            <Link to="/chemical-composition" className="px-4 py-2">
              Chemical Composition
            </Link>
            <Link to="/mechanical-composition" className="px-4 py-2">
              Mechanical Composition
            </Link>
          </div>
        </div>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      {isMenuOpen && (
        <nav className="lg:hidden absolute flex flex-col gap-5 font-medium transition-max-height duration-500 ease-in-out w-f">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <div>
            <button>
              Product
              <CaretDown />
            </button>
            <div>
              <Link>Flanges</Link>
              <Link>Forged Fittings</Link>
            </div>
          </div>
          <NavLink to={"/quality"}>Quality</NavLink>
          <div>
            <button>
              Technical info <CaretDown />
            </button>
            <div>
              <Link to="/chemical-composition" onClick={toggleMenu}>
                Chemical Composition
              </Link>
              <Link to="/mechanical-composition" onClick={toggleMenu}>
                Mechanical Composition
              </Link>
            </div>
          </div>
          <NavLink to={"/contact"}>Contact</NavLink>
        </nav>
      )}
      <div className="lg:hidden">
        <button onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}

export default Header;
