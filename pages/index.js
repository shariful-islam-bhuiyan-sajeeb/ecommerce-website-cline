import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import Nodata from "./Nodata";
import Details from "./details";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [userList, setUserList] = useState();
  const [details, setDetails] = useState();

  useEffect(() => {
    fetch("https://602e7c2c4410730017c50b9d.mockapi.io/users")
      .then((res) => res.json())
      .then((data) => setUserList(data));
  }, []);
  return (
    <main className="max-w-7xl mx-auto  my-20">
      <div className=" flex sm:flex-row flex-col lg:px-4 px-2 lg:justify-between justify-center lg:gap-0 gap-6 w-full mx-auto">
        {/*============== user list  */}
        <div className="flex flex-col items-center">
          <div className=" flex flex-col items-center space-y-2">
            <h1 className="lg:text-4xl md:text-2xl text-xl  font-semibold font-serif animate-bounce uppercase">
              User List
            </h1>
            <div className="flex items-center">
              <div className="lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-gray-500"></div>
              <div className="lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-yellow-400"></div>
              <div className="lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-gray-500"></div>
            </div>
          </div>
          <div className="flex items-start lg:gap-x-4 gap-x-2">
            <div className="flex items-center bg-blue-100 lg:gap-x-2 gap-x-1 lg:my-4 my-2 border xl:px-3 px-2 lg:py-2 py-1 rounded-md">
              <h2 className="bg-blue-700 text-white  rounded-md px-2 py-1">
                5
              </h2>
              <h3 className="font-serif text-blue-700 lg:text-lg text-md font-medium ">
                active
              </h3>
            </div>
            <div className="flex items-center text-gray-500 lg:gap-x-2 gap-x-1 lg:my-4 my-2 border xl:px-3 px-2 lg:py-2 py-1 rounded-md">
              <h2 className="bg-gray-300  rounded-md px-2 py-1">95</h2>
              <h3 className="font-serif lg:text-lg text-md font-medium ">
                Inactive
              </h3>
            </div>
          </div>
          <div className="">
            {userList?.slice(50, 55)?.map((data) => {
              return (
                <div
                  key={data?.id}
                  onClick={() => setDetails(data)}
                  className="lg:mt-2 mt-4 shadow-md  bg-slate-200 hover:bg-blue-300 rounded-md "
                >
                  <div className="flex items-center  lg:px-10 px-8 py-2 w-full  gap-x-2">
                    <div>
                      {data?.avatar ? (
                        <img
                          className="lg:w-20 w-16 rounded-full rounded-md"
                          src={data?.avatar}
                          alt=""
                        />
                      ) : (
                        <FaUserCircle />
                      )}
                    </div>
                    <h2 className="font-serif lg:text-2xl text-xl">
                      Name: {data?.profile?.firstName}
                    </h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/*============== user details  */}
        <div className="flex flex-col items-center  shadow-sm px-2 py-2  ">
          <div className=" flex flex-col items-center space-y-2">
            <h1 className="lg:text-4xl md:text-2xl text-xl  font-semibold font-serif animate-bounce uppercase">
              User Details
            </h1>
            <div className="flex items-center">
              <div className="lg:w-[60px] md:w-[50px] sm:w-[40px] w-[30px] h-[2px] bg-gray-500"></div>
              <div className="lg:w-[60px] md:w-[50px] sm:w-[40px] w-[30px] h-[2px] bg-yellow-400"></div>
              <div className="lg:w-[60px] md:w-[50px] sm:w-[40px] w-[30px] h-[2px] bg-gray-500"></div>
            </div>
          </div>
          <div className="mt-10 bg-slate-200 xl:px-8 lg:px-6 md:px-5 sm:px-4 px-2 rounded">
            {details ? <Details details={details} /> : <Nodata />}
          </div>
        </div>
      </div>
    </main>
  );
}
