import { Outlet } from "react-router-dom";

function Crew() {
  return (
    <div className="bg-crew-mobile tablet:bg-crew-tablet laptop:bg-crew-desktop h-screen bg-cover bg-no-repeat pb-16 tablet:pb-24 laptop:pb-0 laptop:h-screen">
      <div className="max-w-[1280px] mx-auto pt-36 w-3/4 flex flex-col gap-24">
        <p className="font-barlow-condensed uppercase text-[28px] tracking-[4px] text-white flex gap-4">
          <span className="text-slate-500 font-semibold">02</span>
          <span>Meet Your Crew</span>
        </p>

        <Outlet />
      </div>
    </div>
  );
}

export default Crew;
