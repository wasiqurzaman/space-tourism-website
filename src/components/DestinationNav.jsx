import { NavLink } from "react-router-dom";

function DestinationNav({ destinations }) {
  console.log(destinations);

  return (
    <nav className="">
      <ul className="text-white flex gap-8">
        {destinations.map(destination => (
          <li key={destination.name}>
            <NavLink
              to={`/destination/${destination.name.toLowerCase()}`}
              className="font-barlow-condensed tracking-[2px] leading-relaxed uppercase"
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
