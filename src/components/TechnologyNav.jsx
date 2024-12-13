import { NavLink } from "react-router-dom";

function TechnologyNav({ technology }) {
  return (
    <nav className="">
      <ul className="text-white font-bellefair text-[32px]  flex flex-col items-center gap-8 h-8">
        {technology.map((technology, index) => (
          <li key={technology.name} className="">
            <NavLink
              to={`/technology/${technology.name
                .toLowerCase()
                .split(" ")
                .join("-")}`}
              className={({ isActive }) => {
                console.log(isActive);
                return isActive
                  ? "flex justify-center items-center h-20 w-20 rounded-full border-2 border-white text-custom-blue-900 bg-white "
                  : "flex justify-center items-center h-20 w-20 rounded-full border-2 border-[#979797]";
              }}
            >
              {index + 1}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default TechnologyNav;
