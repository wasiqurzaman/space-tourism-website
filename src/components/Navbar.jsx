import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="large-desktop:max-w-[1400px]
    flex justify-between mt-4 pr-8 tablet:pr-0 tablet:mt-0 laptop:mt-8 pl-8 laptop:pl-12 w-full items-center absolute translate-x-1/2 right-1/2 text-white "
    >
      <img src="shared/logo.svg" alt="logo" className="block" />

      <hr className="w-48 desktop:w-80 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700 hidden laptop:block" />
      <ul className="font-barlow-condensed text-xl hidden tablet:flex tablet:items-center tablet:gap-8 lg:gap-16 uppercase bg-slate-900 bg-opacity-55  laptop:pl-24 px-8 py-6 invisible tablet:visible ">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 h-full py-6"
                : "h-full py-6 hover:border-b-4 hover:border-b-slate-400 transition-all duration-150"
            }
          >
            <span className="font-semibold mr-2">00</span>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destination"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 h-full py-6"
                : "h-full py-6 hover:border-b-4 hover:border-b-slate-400"
            }
          >
            <span className="font-semibold mr-2">01</span>
            <span>Destination</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/crew"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 h-full py-6"
                : "h-full py-6 hover:border-b-4 hover:border-b-slate-400"
            }
          >
            <span className="font-semibold mr-2">02</span>
            <span>Crew</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/technology"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 h-full py-6"
                : "h-full py-6 hover:border-b-4 hover:border-b-slate-400"
            }
          >
            <span className="font-semibold mr-2">03</span>
            <span>Technology</span>
          </NavLink>
        </li>
      </ul>
      <button className="block tablet:hidden">
        <img src="shared/icon-hamburger.svg" alt="mobile navigation icon" />
      </button>
    </nav>
  );
}

export default Navbar;
