import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import rock from "../assets/rsp/Rock.png";
import paper from "../assets/rsp/Paper.png";
import scissor from "../assets/rsp/Scissors.png";

const RSPGame = ({ score, selection, setScore }) => {
  const [compSelection, setCompSelection] = useState(null);
  const [referee, setReferee] = useState("");

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissor"];
    setCompSelection(choices[Math.floor(Math.random() * 3)]);
  };

  useEffect(() => {
    newHousePick();
  }, []);

  const Result = () => {
    if (selection === "rock" && compSelection === "scissor") {
      setReferee("you win");
      setScore(score + 1);
    } else if (selection === "rock" && compSelection === "paper") {
      setReferee("you lose");
      setScore(score - 1);
    } else if (selection === "scissor" && compSelection === "paper") {
      setReferee("you win");
      setScore(score + 1);
    } else if (selection === "scissor" && compSelection === "rock") {
      setReferee("you lose");
      setScore(score - 1);
    } else if (selection === "paper" && compSelection === "rock") {
      setReferee("you win");
      setScore(score + 1);
    } else if (selection === "paper" && compSelection === "scissor") {
      setReferee("you lose");
      setScore(score - 1);
    } else {
      setReferee("it's a draw");
    }
  };

  useEffect(() => {
    Result();
  }, [compSelection]);

  return (
    <div className="mt-[50px] w-[850px] flex">
      <div className="flex-1">
        <h1 className="text-white text-[24px] mt-[20px] mb-[25px] text-center uppercase">
          you picked
        </h1>
        <div className="flex justify-center">
          <img
            src={
              selection === "rock"
                ? rock
                : selection === "paper"
                ? paper
                : scissor
            }
            alt="data"
            className="w-[255px] h-[255px]"
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1
          className={`uppercase text-[45px] ${
            referee === "you win"
              ? "text-green"
              : referee === "you lose"
              ? "text-red"
              : "text-orange"
          }`}
        >
          {referee}
        </h1>
        <Link
          to="/rock-paper-scissor"
          className="uppercase bg-orange text-white px-[24px] py-[12px] rounded-[6px] cursor-pointer hover:-translate-y-1 text-[1.2rem]"
          onClick={() => setCompSelection(null)}
        >
          play again
        </Link>
        <a
          href="/"
          className="uppercase bg-red text-white px-[24px] py-[8px] rounded-[6px] cursor-pointer text-[1.2rem] mt-[1rem] hover:animate-pulse"
        >
          quit game
        </a>
      </div>
      <div className="flex-1">
        <h1 className="text-white text-[24px] mt-[20px] mb-[25px] text-center uppercase">
          computer picked
        </h1>
        <div className="flex justify-center">
          <img
            src={
              compSelection === "rock"
                ? rock
                : compSelection === "paper"
                ? paper
                : scissor
            }
            alt="rock"
            className="w-[255px] h-[255px]"
          />
        </div>
      </div>
    </div>
  );
};

export default RSPGame;
