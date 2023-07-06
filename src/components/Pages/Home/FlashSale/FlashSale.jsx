"use client";
import React, { useEffect, useState } from "react";

const FlashSale = () => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const targetDate = new Date("2023-07-07");
      const timeDiff = targetDate.getTime() - now.getTime();
      let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      setTime({
        days,
        hours,
        minutes,
        seconds,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="px-1">
      <div className="flex justify-between">
        <h4 className="font-bold text-2xl">Flash Sale</h4>
        <div className="flex text-center gap-1 font-mono text-lg font-bold text-yellow-500 border px-2 py-1 cursor-pointer">
          <p>{time.days < 10 ? "0" + time.days : time.days}</p> <span>:</span>
          <p>{time.hours < 10 ? "0" + time.hours : time.hours}</p>{" "}
          <span>:</span>
          <p>{time.minutes < 10 ? "0" + time.minutes : time.minutes}</p>{" "}
          <span>:</span>
          <p>{time.seconds < 10 ? "0" + time.seconds : time.seconds}</p> ➩
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
