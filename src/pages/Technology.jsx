import { Outlet } from "react-router-dom";

function Technology() {
  return (
    <div className="bg-technology-mobile tablet:bg-technology-tablet laptop:bg-technology-desktop  bg-cover bg-no-repeat pb-16">
      <div className="max-w-[1280px] mx-auto pt-36 w-3/4 flex flex-col gap-24">
        <p className="font-barlow-condensed uppercase text-[28px] tracking-[4px] text-white flex gap-4">
          <span className="text-slate-500 font-semibold">03</span>
          <span>Space Launch 101</span>
        </p>

        <Outlet />
      </div>
    </div>
  );
}

export default Technology;
a;
