import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import jsondata from "../data/data.json";
import DestinationNav from "./DestinationNav";

function DestinationDetails() {
  const [data, setData] = useState([]);
  const [destination, setDestination] = useState(null);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    setData(jsondata);
    setDestination(
      jsondata.destinations.find(
        destination => destination.name.toLowerCase() === params.name
      )
    );
  }, [params.name]);

  if (!destination) return null;

  return (
    <div className="flex flex-col items-center laptop:flex-row w-full mx-auto gap-8 tablet:gap-12 large-desktop:gap-24">
      <div className="max-w-1/2 tablet:flex-1 h-full">
        <img
          src={`../src/assets/${destination.images.webp}`}
          alt={`image of ${destination.name}`}
          className="w-[60%] laptop:w-3/4 mx-auto"
        />
      </div>
      <div className="flex-1 flex flex-col items-center justify-between laptop:items-start gap-6 tablet:gap-6  large-desktop:gap-12  tablet:px-4 laptop:px-0">
        <DestinationNav destinations={data.destinations} />
        <h1 className="font-bellefair text-white text-[60px] tablet:text-[80px]  large-desktop:text-[100px]  tracking-normal leading-[1.146] uppercase ">
          {destination.name}
        </h1>
        <p className="tablet:w-[80%] laptop:w-full text-center laptop:text-left font-barlow text-custom-blue-300 tablet:text-lg  desktop:text-lg tracking-normal leading-[1.4] ">
          {" "}
          {destination.description}
        </p>
        <hr className="h-px w-full bg-gray-200 border-0" />
        <div className="flex flex-col items-center tablet:flex-row gap-8 tablet:gap-16">
          <div className="flex flex-col gap-2 text-center tablet:text-left">
            <p className="font-barlow-condensed text-sm text-white tracking-[2px] leading-5 uppercase">
              Avg. Distance
            </p>
            <p className="font-bellefair text-[28px] text-white tracking-normal leading-[1.3] uppercase">
              {destination.distance}
            </p>
          </div>
          <div className="flex flex-col gap-2 text-center tablet:text-left">
            <p className="font-barlow-condensed text-sm text-white tracking-[2px] leading-5 uppercase">
              Est. travel time
            </p>
            <p className="font-bellefair text-[28px] text-white tracking-normal leading-[1.3] uppercase">
              {destination.travel}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestinationDetails;
