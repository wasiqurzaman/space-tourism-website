import { Outlet } from "react-router-dom";

function Destination() {
  return (
    <div className="bg-destination-desktop h-screen bg-cover bg-no-repeat">
      <div className="max-w-[1280px] mx-auto pt-36 w-3/4 flex flex-col gap-24">
        <p className="font-barlow-condensed uppercase text-[28px] tracking-[4px] text-white flex gap-4">
          <span className="text-slate-500 font-semibold">01</span>
          <span>Pick your destination</span>
        </p>

        <Outlet />
      </div>
    </div>
  );
}

export default Destination;
