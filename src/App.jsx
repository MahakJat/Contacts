import { nanoid } from "nanoid/non-secure";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [isCheck, setisCheck] = useState(false);
  const [userArr, setuserArr] = useState([]);

  const sumbitHandler = (e) => {
    e.preventDefault();
    const id = nanoid();
    const copyArr = [...userArr, { name, company, phone, isCheck,id}];
    console.log(copyArr);
    setuserArr(copyArr);
    setName("");
    setPhone("");
    setCompany("");
    setisCheck(false);
  };

  const deleteHandler = (idx)=>{
    // code when idx is used
    const newArr = [...userArr];
    newArr.splice(idx,1);
    setuserArr(newArr);

    // code when nano id is used 
    // const newArr = userArr.filter((a)=> a.id != idx);
    // setuserArr(newArr);
  }

  return (
    <div className="w-screen bg-[#e6e5e5] flex p-[3vh] h-screen">
      <div className="w-1/2 bg-white rounded-[2vh] h-[45vw]">
        <form
          onSubmit={(e) => {
            sumbitHandler(e);
          }}
          className="p-[5vh] "
        >
          <h1 className="font-[gilroy] text-3xl text-black capitalize font-bold ">
            Add Contact
          </h1>

          <h1 className="font-semibold mt-4 ">Name</h1>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(target) => {
              setName(target.target.value);
            }}
            className="w-full border border-[#848181] rounded-[1vh] p-1 px-2"
            required
          />

          <h1 className="font-semibold mt-4">Company</h1>
          <input
            type="text"
            placeholder="Enter Company"
            value={company}
            onChange={(target) => setCompany(target.target.value)}
            className="w-full border border-[#848181] rounded-[1vh] p-1 px-2"
            required
          />

          <h1 className="font-semibold mt-4">Phone</h1>
          <input
            type="text"
            placeholder="Enter phone number"
            value={phone}
            onChange={(target) => {
              setPhone(target.target.value);
            }}
            className="w-full border border-[#848181] rounded-[1vh] p-1 px-2"
            required
          />

          <label>
            <input
              type="checkbox"
              checked={isCheck}
              onChange={() => {
                setisCheck(!isCheck);
              }}
              className="mt-4"
            />
            <span className="font-medium"> Favorite</span>
          </label>
          <button className="mt-4 w-full bg-blue-950 py-[1vh] text-white rounded-[1.5vh]">
            Add contact
          </button>
        </form>
      </div>

      <div className="w-1/2  p-[3vh] flex flex-col gap-5 ">
        <h1 className="font-[gilroy] text-3xl  text-black capitalize font-bold">
          Contact List
        </h1>
        <div className="overflow-y-auto max-h-[40vw] overflow-x-hidden flex flex-col gap-3 scrollbar-hidden">
          {/* scrollbar-hidden given property in index.css */}
          {userArr.length > 0
            ? userArr.map(function (elem ,idx) {
                return (
                  <div key={idx} className="w-full bg-white py-5 px-4 rounded-xl shadow-md  flex justify-between items-start">
                    <div className="properties">
                     <h1 className="font-[gilroy] text-2xl text-black capitalize font-medium rounded-md">
                      {elem.name}
                    </h1>
                    <h1 className="capitalize mt-1 text-[2.3vh]">
                      Company: {elem.company}
                    </h1>
                    <h1 className="capitalize text-[2.3vh]">
                      Phone: {elem.company}
                    </h1>
                    {elem.isCheck ? (
                      <h1 className="bg-[#d6a74f] w-fit text-white capitalize px-2 mt-2 py-[0.2vh] rounded-full text-[2vh]">
                        Favorite
                      </h1>
                    ) : (
                      ""
                    )}
                    </div>
                    <button onClick={() => {
                        // deleteHandler(elem.id);
                        deleteHandler(idx);
                        
                    }}> <i className="text-2xl ri-close-fill"></i></button>
                  </div>
                );
              })
            : "no contact yet"}
        </div>
      </div>
    </div>
  );
};

export default App;
