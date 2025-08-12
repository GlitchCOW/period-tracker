import React from "react";

export default function Dashboard({startDate, predictNextPeriod}){
    if (!startDate)return <p>log a start date to see predictions</p>;

    const nextPeriod = predictNextPeriod(startDate);
    const daysLeft = Math.ceil((new Date(nextPeriod) - new Date()) /(1000 * 60 * 60 * 24));

    return(
        <section>
            <h2>Nest period</h2>
            <p>{nextPeriod}</p>
            <p>Days left: {daysLeft}</p>
        </section>
    );
}