import Typewriter from "./typewriter";
import { useState } from "react";
import { TITLES } from "../lib/constants";

export default function IntroDemo({ setIntroDone }) {
  const [subtitle, setSubtitle] = useState(`Devon | Developer | Dad`);
  const [loadingSub, setLoadingSub] = useState(false);
  const [subClickCount, setSubClickCount] = useState(0);
  const namePrefix = `<Dev`;
  const nameSuffix = `on Wells />`;

  const handleSubtitleClick = () => {
    if (loadingSub) return;
    setLoadingSub(true);
    setSubClickCount(subClickCount+1);
    setSubtitle(generateRandomSubtitle);
  };

  const generateRandomSubtitle = () => {
    if (subClickCount !== 0 && subClickCount % 10 === 0) {
      return `You know, you've clicked this thing over ${subClickCount} times now. It's really just looping randomly generated strings...`;
    }

    let newSubtitle = subtitle;
    while (newSubtitle == subtitle) {
      newSubtitle = `Dev : ${
        TITLES[Math.floor(Math.random() * Math.floor(TITLES.length - 1))]
      }`;
    }
    return newSubtitle;
  };

  return (
    <>
      <div className="flex-col flex h-screen justify-center items-center m-auto">
        <h1 className="text-center text-accent-4 font-bold md:text-8xl text-6xl tracking-tighter leading-tight">
          {namePrefix}
          <Typewriter
            srcString={nameSuffix}
            styles={"text-accent-6"}
            cursor={false}
          />
        </h1>
        <h1
          onClick={handleSubtitleClick}
          className="text-center cursor-pointer text-accent-6 text-2xl md:text-3xl tracking-tighter leading-tight"
        >
          <Typewriter srcString={subtitle} setStillTyping={setLoadingSub} />
        </h1>
      </div>
    </>
  );
}
