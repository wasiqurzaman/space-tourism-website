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
    <div className="flex w-full mx-auto gap-24">
      <div className="w-1/2">
        <img
          src={`/${destination.images.webp}`}
          alt={`image of ${destination.name}`}
          className="w-3/4 mx-auto"
        />
      </div>
      <div className="w-1/2 flex flex-col gap-6 flex-1  px-4">
        <DestinationNav destinations={data.destinations} />
        <h1 className="font-bellefair text-white text-[100px]  tracking-normal leading-[1.146] uppercase ">
          {destination.name}
        </h1>
        <p className="font-barlow text-custom-blue-300 text-lg tracking-normal leading-[1.4]">
          {" "}
          {destination.description}
        </p>
        <hr />
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <p className="font-barlow-condensed text-sm text-white tracking-[2px] leading-5 uppercase">
              Avg. Distance
            </p>
            <p className="font-bellefair text-[28px] text-white tracking-normal leading-[1.3] uppercase">
              {destination.distance}
            </p>
          </div>
          <div className="flex flex-col gap-2">
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
