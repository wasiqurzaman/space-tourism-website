import { Outlet } from "react-router-dom";

function Destination() {
  return (
    <div className="bg-destination-mobile tablet:bg-destination-tablet laptop:bg-destination-desktop bg-cover bg-no-repeat pb-40 laptop:pb-0 laptop:h-screen">
      <div className="max-w-[1280px] mx-auto pt-24 tablet:pt-32 desktop:pt-32 large-desktop:pt-48 w-full px-8  laptop:w-3/4 flex flex-col gap-12 large-desktop:gap-24">
        <p className="font-barlow-condensed uppercase text-[20px] tablet:text-[24px] laptop:text-[28px] tracking-[4px] text-white flex gap-4 self-center tablet:self-start">
          <span className="text-slate-500 font-semibold">01</span>
          <span>Pick your destination</span>
        </p>

        <Outlet />
      </div>
    </div>
  );
}

export default Destination;
