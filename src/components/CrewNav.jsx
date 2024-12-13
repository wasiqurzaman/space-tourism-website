import { NavLink } from "react-router-dom";

function CrewNav({ crew }) {
  return (
    <nav className="">
      <ul className="text-white flex items-center gap-8 h-8">
        {crew.map(crew => (
          <li key={crew.name} className="">
            <NavLink
              to={`/crew/${crew.name.toLowerCase().split(" ").join("-")}`}
              className={({ isActive }) => {
                console.log(isActive);
                return isActive
                  ? "block h-3 w-3 rounded-full bg-white"
                  : "block h-3 w-3 rounded-full bg-[#979797]";
              }}
            ></NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default CrewNav;
