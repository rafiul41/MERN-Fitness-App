import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [visible2, setvisible2] = useState(false);
  return (
    <nav className="w-screen h-16 bg-[#1f0729] flex items-center max-md:hidden">
      {visible2 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-10 flex justify-center items-center">
          <div className="w-96 h-96 bg-white rounded-md text-[#1f0729] flex justify-center items-center  font-bold relative p-4">
            <div id="text"></div>
            <div
              className="bg-red-600 absolute bottom-1 px-4 text-white rounded-full cursor-pointer hover:bg-red-500"
              onClick={() => {
                setvisible2(false);
              }}
            >
              Close
            </div>
          </div>
        </div>
      )}
      <ul className="text-white font-dm-sans flex w-screen justify-around rounded-full">
        {/* <li className="hover:cursor-pointer hover:text-yellow-400">Home</li> */}
        <li
          className="hover:cursor-pointer hover:text-yellow-400"
          onClick={() => navigate("/")}
        >
          Home
        </li>
        <li
          className="hover:cursor-pointer hover:text-yellow-400"
          onClick={() => {
            setvisible2(true);
            setTimeout(() => {
              document.querySelector("#text").innerHTML =
                "<p>Email: <span class='font-normal'>hello_world@yopmail.com</span></p><p>Contact No: <span class='font-normal'>+923486186394</span></p>";
            }, 0);
          }}
        >
          Contact
        </li>
        <li
          className="hover:cursor-pointer hover:text-yellow-400"
          onClick={() => {
            setvisible2(true);
            setTimeout(() => {
              document.querySelector("#text").innerHTML =
                "<p class='font-normal text-base text-center'>I am a full stack web-developer with expertise in creating userfriendly web app for multiple audiences</p>";
            }, 0);
          }}
        >
          About us
        </li>
        <li
          className="hover:cursor-pointer hover:text-yellow-400"
          onClick={() => {
            setvisible2(true);
            setTimeout(() => {
              document.querySelector("#text").innerHTML =
                "<p class='font-normal text-base text-center'>This app has all the essential micro and macronutients data available for you to track your fitness needs. Whether you want to gain or loss the weight this app will guide you throughout achieving your fitness goals</p>";
            }, 0);
          }}
        >
          Guide
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
