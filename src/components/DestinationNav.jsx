import { NavLink } from "react-router-dom";

function DestinationNav({ destinations }) {
  console.log(destinations);

  return (
    <nav className="">
      <ul className="text-white flex items-center gap-8 h-8">
        {destinations.map(destination => (
          <li key={destination.name}>
            <NavLink
              to={`/destination/${destination.name.toLowerCase()}`}
              className={({ isActive }) =>
                isActive
                  ? "font-barlow-condensed tracking-[2px] leading-relaxed uppercase border-b-4 py-2 h-full"
                  : "font-barlow-condensed tracking-[2px] leading-relaxed uppercase hover:border-b-4 hover:border-[#979797] py-2 h-full"
              }
            >
              {destination.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default DestinationNav;
