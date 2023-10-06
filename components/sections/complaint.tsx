import React from "react";

const Complaint = () => {
  return (
    <div className="bg-[#3F697A] text-black w-full py-12 mt-20 ">
      <form className="w-full h-full flex flex-col space-y-5 justify-center items-center">
        <input
          className="indent-3 outline-none w-2/3 py-3"
          placeholder="Ism"
          type="text"
        />
        <input
          className="indent-3 outline-none w-2/3 py-3"
          placeholder="Familya"
          type="text"
        />
        <div className=" w-2/3 ">
          <textarea
            className="indent-3 w-full h-36 outline-none py-3"
            placeholder="Izoh Va Taklif"
          />
          <div className="w-full flex justify-end" >
            <button className="bg-blue-500 text-white px-3 py-2 rounded-md" type="submit">
              Jo'natish
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Complaint;
