import React, { useEffect, useState } from "react";
import logo from "../assets/rsp/title.png";

import { Route, Routes } from "react-router-dom";
import RSPGamePlay from "../components/RSPGamePlay";
import RSPGame from "../components/RSPGame";
import Loaders from "../components/Loaders";

const RockPaperScissor = () => {
  const [selection, setSelection] = useState(null);
  const [score, setScore] = useState(0);

  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(() => setLoading(false), 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {Loading ? (
        <Loaders />
      ) : (
        <div className="w-[100vw] h-[100vh] flex items-center flex-col">
          <div className="w-[700px] h-[150px] rounded-[15px] border-2 border-white flex justify-between items-center mt-[50px]">
            <div className="pl-[30px]">
              <img src={logo} alt="title" />
            </div>
            <div className="w-[150px] h-[114px] bg-white border-2 rounded-[8px] mr-[30px] flex flex-col justify-center items-center">
              <p className="text-orange text-[1.1rem] font-bold leading-[19px] text-left uppercase tracking-[2.5px]">
                score
              </p>
              <h1 className="text-[#565468] text-[56px]">{score}</h1>
            </div>
          </div>

          <Routes>
            <Route
              path="/"
              element={<RSPGamePlay setSelection={setSelection} />}
            />
            <Route
              path="game"
              element={
                <RSPGame
                  selection={selection}
                  score={score}
                  setScore={setScore}
                />
              }
            />
          </Routes>
        </div>
      )}
    </>
  );
};

export default RockPaperScissor;
