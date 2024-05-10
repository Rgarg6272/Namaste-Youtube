import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const List = [
  "All",
  "Live",
  "Gaming",
  "Songs",
  "Soccer",
  "cricket",
  "Cooking",
  "Valentines",
  "Funny",
  "Podcast",
];

const ButtonList = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  return (
    <div
      className={`flex z-40 bg-white pb-2 ${!isMenuOpen ? "" : "ml-[290px]"}`}
    >
      {List.map((list, index) => (
        <Button key={index} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
