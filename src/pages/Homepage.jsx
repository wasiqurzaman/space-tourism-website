import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="bg-home-mobile tablet:bg-home-tablet lg:bg-home-desktop h-screen bg-cover bg-no-repeat">
      <main className="max-w-[1400px] laptop:px-24 pt-24 tablet:pt-48 large-desktop:pt-96 laptop:pt-64 flex flex-col laptop:flex-row items-center w-full mx-auto gap-16 laptop:justify-between desktop:gap-96">
        <div className="w-3/4 laptop:w-1/2  text-white text-center laptop:text-left">
          <h2 className="font-barlow-condensed text-lg tracking-[1px] tablet:text-2xl laptop:text-3xl laptop:tracking-[4px] leading-normal uppercase">
            So, You want to travel to
          </h2>
          <h1 className="font-bellefair text-[80px] tablet:text-[108px] laptop:text-[144px] tracking-normal leading-[1.6] uppercase">
            Space
          </h1>
          <p className="font-barlow  text-custom-blue-300 text-[16px] tablet:text-lg tracking-normal leading-[1.8] laptop:text-justify">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </div>

        <div className="flex items-center justify-center w-[140px] h-[140px] tablet:w-[240px] tablet:h-[240px] rounded-full bg-white cursor-pointer h transition-all duration-300 hover:outline-gray-400 hover:outline hover:outline-[40px]">
          <Link
            to="/destination/moon"
            className="text-xl tablet:text-3xl font-bellefair uppercase"
          >
            Explore
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
