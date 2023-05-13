import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa";

const DetalsPage = ({ details }) => {
  const { avatar, Bio, createdAt, jobTitle, profile } = details;
  return (
    <div className="flex lg:flex-row flex-col lg:items-start items-center  xl:gap-x-6 lg:gap-x-4 md:gap-x-3 gap-x-2 py-10 ">
      <div>
        <img className="rounded-md w-full mx-auto" src={avatar} alt="" />
      </div>
      {/* ================ details side  */}
      <div className="flex flex-col  px-2 space-y-3">
        <div className="flex items-center lg:gap-x-3 md:gap-x-2 gap-x-1">
          <div className="flex items-center lg:gap-x-2 gap-x-1 text-yellow-400">
            <h2 className="">
              <AiFillStar />
            </h2>
            <h2>
              <AiFillStar />
            </h2>
            <h2>
              <AiFillStar />
            </h2>
            <h2>
              <FaStarHalfAlt />
            </h2>
          </div>
          <div className="lg:text-md md:text-sm text-xs ">
            <p>(50 review)</p>
          </div>
        </div>
        <div className="">
          <h2 className="lg:text-xl md:text-lg text-md text-slate-800 font-serif font-semibold">
            {jobTitle.length > 30 ? jobTitle.slice(0, 30) + "..." : jobTitle}
          </h2>
          <p className="text-gray-700 font-serif">
            {Bio?.length > 30 ? Bio.slice(0, 30) + "..." : Bio}
          </p>
          <p className=""> Date: {createdAt}</p>
        </div>
        <div className="flex flex-col  gap-x-1 font-serif">
          <h2 className="lg:text-xl md:text-lg text-md font-semibold ">
            Name: {profile?.firstName}
          </h2>
          <p className="lg:text-md md:text-sm text-xs">
            Email: {profile?.email}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetalsPage;
