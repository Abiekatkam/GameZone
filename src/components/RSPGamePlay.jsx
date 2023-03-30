import React from "react";
import { Link } from "react-router-dom";
import rock from "../assets/rsp/Rock.png";
import paper from "../assets/rsp/Paper.png";
import scissor from "../assets/rsp/Scissors.png";

const RSPGamePlay = ({ setSelection }) => {
  const setChoice = (e) => {
    setSelection(e.target.dataset.id);
  };
  return (
    <div className="rsp__background-triangle">
      <Link
        to="game"
        className="mr-[20px] transition duration-150 ease-in-out hover:-translate-y-[8px]"
      >
        <img
          src={rock}
          alt="rock"
          data-id="rock"
          className="w-[200px] h-[200px] block hover:animate-pulse cursor-pointer"
          onClick={setChoice}
        />
      </Link>
      <Link
        to="game"
        className="ml-[20px] transition duration-150 ease-in-out hover:-translate-y-[8px]"
      >
        <img
          src={paper}
          data-id="paper"
          alt="paper"
          className="w-[200px] h-[200px] block hover:animate-pulse cursor-pointer"
          onClick={setChoice}
        />
      </Link>
      <Link
        to="game"
        className="transition duration-150 ease-in-out hover:-translate-y-[8px]"
      >
        <img
          src={scissor}
          data-id="scissor"
          alt="scissor"
          className="w-[200px] h-[200px] block hover:animate-pulse cursor-pointer"
          onClick={setChoice}
        />
      </Link>
    </div>
  );
};

export default RSPGamePlay;
