import { InfoProps } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa6";
interface InfoListProps {
  info: InfoProps;
}

const InfoList: React.FC<InfoListProps> = ({ info }) => {
  return (
    <div className=" bg-white border-2 p-3 border-gray-200 rounded-lg shadow ">
      <div className="w-full h-72 bg-slate-200 pt-5 flex justify-center ">
        <Image
          className="rounded-t-lg w-full drop-shadow-2xl"
          src={info.src}
          width={100}
          height={0}
          alt="wj"
        />
      </div>
      <div className="p-5 flex text-black justify-between">
        <p>Name:</p>
        <span>{info.name}</span>
      </div>
      <div className="p-5 flex text-black justify-between">
        <p>Sohasi:</p>
        <span>{info.role}</span>
      </div>
      <div className="p-5 flex text-black justify-between">
        <p>Yoshi:</p>
        <span>{info.age}</span>
      </div>
      <div className="p-5 flex text-black justify-between">
        <p>Ma'lumoti:</p>
        <span>{info.staj}</span>
      </div>
      <div className="p-5 flex text-black justify-between">
        <p>Manzil:</p>
        <span>{info.address}</span>
      </div>
      <div className="flex justify-center gap-4">
        {[...Array(5)].map((s, i) => (
          <FaStar
            key={i}
            size={30}
            className={`${
              info.rate! <= i ? "text-gray-400" : "text-yellow-500"
            }`}
          />
        ))}
      </div>
      <div className="w-full h-full flex justify-center items-center mt-5">
        <button className=" bg-blue-500 text-white px-5 py-2 flex justify-center items-center">
          Read more
        <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default InfoList;
