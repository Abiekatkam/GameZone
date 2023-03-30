import React from "react";
import MainHeader from "../components/MainHeader";
import rsp from "../assets/rsp.jpg";
import rspsl from "../assets/rspsl.jpg";
import memory from "../assets/memory.jpg";
import tictactoe from "../assets/tictactoe.jpg";

import game1 from "../assets/game1.jpg";
import game2 from "../assets/game2.jpg";
import game3 from "../assets/game3.jpg";
import Footer from "../components/Footer";
import Card from "../components/Card";

const HomePage = () => {
  return (
    <div>
      <MainHeader />
      <div className="pt-[4rem] pb-[2.5rem] px-[11rem] text-white select-none flex flex-col items-center justify-center gap-4">
        <h1 className="text-[4.4rem] border-b-2 border-white">
          Welcome to Game Zone
        </h1>

        <div className="flex items-center justify-center gap-4 w-[1100px] h-[550px]">
          <p className="text-[1.72rem] w-[45%]">
            Welcome Player to your ultimate destination for offline gaming! Our
            zone is designed to provide a unique and immersive gaming experience
            where you can disconnect from the online world and immerse yourself
            in the excitement of single-player games.
            <br />
            We know that sometimes you just need to escape from the chaos of the
            online world and enjoy the thrill of playing games at your own pace.
            That's why we offer a wide selection of offline games that are sure
            to satisfy your gaming cravings. From action-packed adventures to
            challenging puzzle games, we've got something for everyone.
          </p>
          <div className="flex w-[45%] items-center gap-4 justify-center">
            <img
              src={game1}
              alt="game1"
              className="w-[210px] h-[240px] rounded-lg object-cover"
            />
            <div className="flex flex-col gap-4">
              <img
                src={game2}
                alt="game1"
                className="w-[210px] h-[240px] rounded-lg object-cover"
              />
              <img
                src={game3}
                alt="game1"
                className="w-[210px] h-[240px] rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[4rem] pb-[2.5rem] px-[11rem] text-white select-none flex flex-col items-center justify-center gap-4">
        <h1 className="text-[4.4rem] border-b-2 border-white">
          Available Games
        </h1>

        <div className="w-[1100px] py-[3rem] flex items-center justify-center gap-[4rem] h-fit flex-wrap">
          <Card
            link="/start/rock-paper-scissor"
            image={rsp}
            title="Rock Paper Scissor"
          />
          <Card
            link="/rock-paper-scissor"
            image={rspsl}
            title="Rock Paper Scissor Extended"
          />
          <Card link="/" image={memory} title="Memory Game" />
          <Card link="/" image={tictactoe} title="Tic Tac Toe" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
