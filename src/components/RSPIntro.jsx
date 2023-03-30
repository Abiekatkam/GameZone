import React, { useEffect, useState } from "react";
import Loaders from "./Loaders";
import rsp from "../assets/rsp.jpg";
import { Link } from "react-router-dom";

const RSPIntro = () => {
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);
  return (
    <>
      {Loading ? (
        <Loaders />
      ) : (
        <div className="flex justify-center items-center w-[100vw] h-[100vh]">
          <div className="w-[900px] min-h-[650px] h-fit rounded-[15px] border-2 border-white flex justify-center gap-7 flex-col items-center p-[2rem]">
            <div className="flex w-[100%] justify-between items-center gap-2 p-0 ">
              <div className="text-center flex flex-col justify-center items-center gap-5">
                <h1 className="text-7xl ">Rock Paper Scissor Game</h1>
                <Link to="/rock-paper-scissor" className="start__button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="34"
                    height="34"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fill="currentColor"
                      d="M5 13c0-5.088 2.903-9.436 7-11.182C16.097 3.564 19 7.912 19 13c0 .823-.076 1.626-.22 2.403l1.94 1.832a.5.5 0 0 1 .095.603l-2.495 4.575a.5.5 0 0 1-.793.114l-2.234-2.234a1 1 0 0 0-.707-.293H9.414a1 1 0 0 0-.707.293l-2.234 2.234a.5.5 0 0 1-.793-.114l-2.495-4.575a.5.5 0 0 1 .095-.603l1.94-1.832C5.077 14.626 5 13.823 5 13zm1.476 6.696l.817-.817A3 3 0 0 1 9.414 18h5.172a3 3 0 0 1 2.121.879l.817.817.982-1.8-1.1-1.04a2 2 0 0 1-.593-1.82c.124-.664.187-1.345.187-2.036 0-3.87-1.995-7.3-5-8.96C8.995 5.7 7 9.13 7 13c0 .691.063 1.372.187 2.037a2 2 0 0 1-.593 1.82l-1.1 1.039.982 1.8zM12 13a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                    ></path>
                  </svg>
                  <span>start</span>
                </Link>
              </div>
              <img
                src={rsp}
                alt="rsp"
                className="w-[370px] h-[290px] rounded-[13px]"
              />
            </div>
            <div className="w-[100%] flex-1 mt-6">
              <p className="text-[1.9rem] leading-9">
                Rock Paper Scissors is a simple game played between a player and
                a computer. The rules are straightforward:
              </p>
              <p className="text-[1.7rem] leading-7 mt-4">
                <span>Rule 01: </span>Rock beats Scissors. If a player forms a
                rock and the other player forms scissors, the player with the
                rock wins.
              </p>
              <p className="text-[1.7rem] leading-7 mt-4">
                <span>Rule 02: </span>Scissors beats Paper. If a player forms
                scissors and the other player forms paper, the player with the
                scissors wins.
              </p>
              <p className="text-[1.7rem] leading-7 mt-4">
                <span>Rule 03: </span>Paper beats Rock. If a player forms paper
                and the other player forms rock, the player with the paper wins.
              </p>
              <p className="text-[1.7rem] leading-7 mt-4">
                <span>Rule 04: </span>If both players make the same shape, it's
                a tie and the game is usually played again.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RSPIntro;
