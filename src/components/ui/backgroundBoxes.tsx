// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
"use client";
import React, { useCallback, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";
import LocalTimeDisplay from "./UTCTimeDisplay";

function throttle(fn, delay) {
  let lastCall = 0;
  let timeoutId;
  return async function (...args) {
    const now = Date.now();
    const remaining = delay - (now - lastCall);

    if (remaining <= 0) {
      lastCall = now;
      clearTimeout(timeoutId);
      return await fn(...args);
    } else if (!timeoutId) {
      timeoutId = setTimeout(async () => {
        lastCall = Date.now();
        timeoutId = null;
        await fn(...args);
      }, remaining);
    }
  };
}
export const BoxesCore = ({
  className,

  ...rest
}: {
  className?: string;
}) => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);
  const [mount, setMount] = React.useState(false);
  const devTextControl = useAnimation();
  // Define an array of lower frequency notes for a bass-heavy sound
  const devTextVariants = {
    initial: {
      opacity: 0,
      display: "none",
    },
    show: (delay: number) => ({
      opacity: 1,
      display: "block",
      transition: {
        duration: 1.6,
        ease: [0.68, -0.55, 0.27, 1.55],
        delay: delay,
      },
    }),
    exit: (delay: number) => ({
      opacity: 0,
      display: "none",
      transition: {
        duration: 1.6,
        ease: [0.68, -0.55, 0.27, 1.55],
        delay: delay,
      },
    }),
  };
  useEffect(() => {
    setMount(true);
  }, []);
  const animate = useCallback(
    throttle(async () => {
      await devTextControl.start((i) => devTextVariants.show(i * 0.1));
      await devTextControl.start((i) =>
        devTextVariants.exit((name.length - i - 1) * 0.1)
      );
    }, 500),
    []
  );

  const handleClick = useCallback(() => {
    animate();
  }, [animate]);
  if (!mount) return null;
  return (
    <div className="relative h-full w-full flex justify-center items-center overflow-hidden ">
      <LocalTimeDisplay />
      <Image
        src="/assets/gollum.png"
        alt="one ring"
        width={100}
        height={100}
        className=" w-20 h-20 pointer-events-none absolute top-4 right-4 z-20 animate-pulse"
      />
      <Image
        src="/assets/one_ring.svg"
        alt="one ring"
        width={100}
        height={100}
        className="z-10 animate-spin w-40 h-40 pointer-events-none absolute top-[30vh] max-md:w-30 max-md:h-30 max-sm:top-[25vh]"
      />
      <div className="font-bold fixed top-[55vh] z-[9000] cursor-default font-iceland text-yellow-600   text-[10rem] max-sm:text-[2.7rem] max-md:text-[5rem] max-lg:text-[6rem] max-xl:text-[7rem] tracking-widest max-md:tracking-wide max-sm:block hidden pointer-events-none text-shadow-yellow">
        Create your Fellowship
      </div>
      <div className="flex flex-row fixed top-[45vh] select-none z-[9000] cursor-default gap-4 max-sm:left-[20vw] max-sm:top-[50vh] max-sm:gap-1 max-md:hidden ">
        {"Create Your Fellowship".split("").map((letter, i) => (
          <motion.h1
            key={i}
            variants={devTextVariants}
            animate={devTextControl}
            initial="initial"
            exit="exit"
            custom={i}
            className="text-[7rem] font-bold text-yellow-600  font-iceland max-sm:text-[2.5rem] max-md:text-[5rem] max-lg:text-[6rem] max-xl:text-[7rem] text-shadow-custom pointer-events-none"
          >
            {letter}
          </motion.h1>
        ))}
      </div>

      <div
        style={{
          transform: `translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) rotate(0deg) translateZ(0)`,
        }}
        className={cn(
          "fixed left-1/4 p-4 -top-1/4 flex  -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 max-md:-top-2 ",
          className
        )}
        {...rest}
      >
        {rows.map((_, i) => (
          <div
            key={`row-${i}+md`}
            className="w-16 h-8 border-l border-slate-700 relative "
          >
            {cols.map((_, j) => (
              <div
                key={`col` + j + "md"}
                className={cn(
                  "w-16 h-8  border-r border-t border-slate-700 relative  hover-effect  max-md:w-8 max-md:h-4 will-change-auto "
                )}
                onClick={handleClick}
              >
                {j % 2 === 0 && i % 2 === 0 ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="absolute h-6 w-10 -top-[14px] -left-[22px] text-red-900 stroke-[3px] pointer-events-none max-md:h-4 max-md:w-7 max-sm:-top-[10px] max-sm:-left-[15px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoxesCore;
