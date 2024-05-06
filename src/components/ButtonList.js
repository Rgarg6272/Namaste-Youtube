import React from "react";
import Button from "./Button";

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
  return (
    <div className="flex">
      {List.map((list, index) => (
        <Button key={index} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
