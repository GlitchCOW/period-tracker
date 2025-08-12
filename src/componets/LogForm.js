import React, {useState} from "react";

export default function LogForm({setStartDate, addLog}){
    const[date, setDate] = useState("");
    const[symptom, setSymptom] = useState("happy");

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(!date)return alert('please Select a Date');
        setStartDate(date);
        addLog(date, symptom);
    }

    return(
        <section>
            <h2>Log Today</h2>
            <form onSubmit={handleSubmit}>
                <label>Period Start Date:</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

                <label>symptom/Mood:</label>
                <select value={symptom} onChange={(e)=> setSymptom(e.target.value)}>
                    <option value="happy">😊 Happy!</option>
                    <option value="cramps">🤕 cramps</option>
                    <option value="neutral">😴 Tired</option>
                </select>

                <button type="submit">Save Log</button>

            </form>
        </section>
    )
}