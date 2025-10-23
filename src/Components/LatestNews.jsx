import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 rounded-xs">
      <p className="bg-secondary p-3 text-[#ffff]">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        <p className="font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero
          sit labore ratione officiis assumenda dignissimos aliquid quidem optio
          vel.
        </p>
        <p className="font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero
          sit labore ratione officiis assumenda dignissimos aliquid quidem optio
          vel.
        </p>
        <p className="font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta vero
          sit labore ratione officiis assumenda dignissimos aliquid quidem optio
          vel.
        </p>
       
      </Marquee>
    </div>
  );
};

export default LatestNews;
