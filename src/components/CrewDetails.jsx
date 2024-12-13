import { useParams } from "react-router-dom";
import jsondata from "../data/data.json";
import { useEffect, useState } from "react";
import CrewNav from "./CrewNav";

function CrewDetails() {
  const [crew, setCrew] = useState();
  const params = useParams();

  console.log(params.crewName);

  useEffect(() => {
    setCrew(
      jsondata.crew.find(
        crew => crew.name.toLowerCase().split(" ").join("-") === params.crewName
      )
    );
  }, [params.crewName]);

  if (!crew) return null;

  return (
    <div className="flex w-full mx-auto gap-24">
      <div className="w-1/2 flex flex-col gap-6 flex-1  px-4">
        <h2 className="text-[#979797] font-bellefair text-[32px] uppercase">
          {crew.role}
        </h2>
        <h1 className="font-bellefair text-white text-[56px]  tracking-normal leading-[1.146] uppercase ">
          {crew.name}
        </h1>
        <p className="font-barlow text-custom-blue-300 text-lg tracking-normal leading-[1.4]">
          {" "}
          {crew.bio}
        </p>

        <CrewNav crew={jsondata.crew} />
      </div>
      <div className="w-1/2">
        <img
          src={`../src/assets/${crew.images.png}`}
          alt={`image of ${crew.name}`}
          className="w-3/4 mx-auto"
        />
      </div>
    </div>
  );
}

export default CrewDetails;
