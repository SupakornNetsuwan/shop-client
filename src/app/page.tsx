"use client";
import Wrapper from "@/core/layouts/Wrapper";
import Check from "./(resources)/components/Check";

const Home = () => {
  return (
    <div>
      <h2 className="text-slate-800 font-bold text-lg">Hello my applciation</h2>
      <p className="text-slate-500">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, ipsam.</p>
      <Check />
    </div>
  );
};

export default Home;
