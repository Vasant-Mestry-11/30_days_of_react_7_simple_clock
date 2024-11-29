import { useState } from "react";
import { useEffect } from "react";

const Clock = () => {
  const today = new Date();
  const [seconds, setSeconds] = useState(today.getSeconds());
  const [minutes, setMinutes] = useState(today.getMinutes());
  const [hour, setHour] = useState(today.getHours());

  useEffect(() => {
    const today = new Date();

    const interval = setInterval(() => {
      setSeconds(today.getSeconds());
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  useEffect(() => {
    const today = new Date();

    const interval = setInterval(() => {
      setMinutes(today.getMinutes());
    }, 60000);

    return () => clearInterval(interval);
  }, [minutes]);

  useEffect(() => {
    const today = new Date();

    const interval = setInterval(() => {
      setHour(today.getHours());
    }, 24 * 60000);

    return () => clearInterval(interval);
  }, [hour]);

  return (
    <div className="h-screen text-4xl bg-secondary text-tertiary flex justify-center items-center">
      <div className="flex gap-8 bg-primary p-16 rounded-lg">
        <div className="text-8xl">{String(hour).padStart(2, "0")} :</div>
        <div className="text-8xl">{String(minutes).padStart(2, "0")} :</div>
        <div className="text-8xl">{String(seconds).padStart(2, "0")}</div>
        <div className="text-8xl">{hour > 12 ? "PM" : "AM"}</div>
      </div>
    </div>
  );
};

export default Clock;
