import React from "react";
import "./Calendar.css";

export default function Calendar({ startDate }) {
  if (!startDate) {
    return (
      <section>
        <h2>Cycle Calendar</h2>
        <p>Log a period start date to see your cycle days!</p>
      </section>
    );
  }

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth(); // 0-indexed

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Convert start date to Date object
  const periodStart = new Date(startDate);
  const predictedPeriodDays = [];
  const cycleLength = 28;
  const periodLength = 5;

  // Calculate predicted period days
  const nextPeriodStart = new Date(periodStart);
  nextPeriodStart.setDate(periodStart.getDate() + cycleLength);

  for (let i = 0; i < periodLength; i++) {
    const day = new Date(nextPeriodStart);
    day.setDate(day.getDate() + i);
    if (day.getMonth() === month) {
      predictedPeriodDays.push(day.getDate());
    }
  }

  return (
    <section>
      <h2>Cycle Calendar</h2>
      <div className="calendar">
        {[...Array(daysInMonth)].map((_, index) => {
          const day = index + 1;
          const isPeriod = predictedPeriodDays.includes(day);
          return (
            <div key={day} className={`day ${isPeriod ? "period-day" : ""}`}>
              {day}
            </div>
          );
        })}
      </div>
    </section>
  );
}
