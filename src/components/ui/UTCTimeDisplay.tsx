"use client";
import React, { useEffect, useState } from "react";

const LocalTimeDisplay = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateLocalTime = () => {
      const now = new Date();
      setLocalTime(formatLocalTime(now));
    };

    // Initial call to set the time immediately on load
    updateLocalTime();

    // Update the time every second
    const intervalId = setInterval(updateLocalTime, 1000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-light-900 font-iceland tracking-widest top-3 fixed left-3 z-[9000] text-xl cursor-default pointer-events-none">
      <p> {localTime}</p>
    </div>
  );
};

// Helper function to format date in user's local timezone
const formatLocalTime = (date: Date) => {
  return new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false, // Set to true if you want a 12-hour format
  }).format(date);
};

export default LocalTimeDisplay;
