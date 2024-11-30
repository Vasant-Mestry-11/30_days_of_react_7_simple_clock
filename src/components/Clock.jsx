import { useState, useEffect } from "react";

const getWeekDay = (day) => {
  let weekday = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return weekday[day];
};

const getDate = (date) => {
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const year = date.getFullYear();
  return `${month} ${day}, ${year}`;
};

const getTime = (date) => {
  const time = date.toLocaleTimeString();
  return time;
};

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    let interval = setInterval(() => {
      const today = new Date();
      setDate(today);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen text-4xl bg-secondary text-tertiary flex justify-center items-center">
      <div className="flex gap-4 bg-primary p-16 rounded-lg">
        <div className="text-4xl">{getWeekDay(date)} </div>
        <div className="text-4xl">{getDate(date)}</div>
        <div className="text-4xl">{getTime(date)}</div>
      </div>
    </div>
  );
};

export default Clock;
