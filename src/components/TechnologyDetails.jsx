import { useParams } from "react-router-dom";
import jsondata from "../data/data.json";
import { useEffect, useState } from "react";
import TechnologyNav from "./TechnologyNav";

function TechnologyDetails() {
  const [technology, setTechnology] = useState();

  const params = useParams();

  console.log(params);

  console.log(technology);

  useEffect(() => {
    setTechnology(
      jsondata.technology.find(
        technology =>
          technology.name.toLowerCase().split(" ").join("-") === params.techName
      )
    );
  }, [params.techName]);

  if (!technology) return null;

  return (
    <div className="flex w-full mx-auto">
      <div className="flex flex-1 gap-16">
        <TechnologyNav technology={jsondata.technology} />
        <div className="w-1/2 flex flex-col gap-6 flex-1  px-4">
          <h2 className="text-[#979797] font-bellefair text-[32px] uppercase">
            The Terminology...
          </h2>
          <h1 className="font-bellefair text-white text-[56px]  tracking-normal leading-[1.146] uppercase ">
            {technology.name}
          </h1>
          <p className="font-barlow text-custom-blue-300 text-lg tracking-normal leading-[1.4]">
            {" "}
            {technology.description}
          </p>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src={`../src/assets/${technology.images.portrait}`}
          alt={`image of ${technology.name}`}
          className="w-3/4 mx-auto"
        />
      </div>
    </div>
  );
}

export default TechnologyDetails;
