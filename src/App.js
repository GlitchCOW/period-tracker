import React, {useState, useEffect} from 'react';
import Pet from './componets/Pet';
import Dashboard from './componets/Dashboard';
import LogForm from './componets/LogForm';
import Logs from './componets/Logs';
import Calendar from './componets/Calendar';
import './App.css';

function App() {
  const [startDate, setStartDate] = useState("");
  const [symptoms, setSympton] = useState([]);
  const [petMood, setPetMood] = useState("happy");

  const predictNextPeriod = (date) =>{
    const start = new Date(date);
    start.setDate(start.getDate() + 28);
    return start.toDateString();
  };

  const addLog = (date, symptom) =>{
    const newLog = {date, symptom};
    const updatedLogs = [...symptoms, newLog];
    setSympton(updatedLogs);
    localStorage.setItem("logs", JSON.stringify(updatedLogs));

  //pet change

    if(symptoms === "cramps") setPetMood("tired");
    else if (symptoms === "happy") setPetMood("happy");
    else setPetMood("neutral");

  };

  useEffect(() =>{
    const savedLogs = JSON.parse(localStorage.getItem("logs")) || [];
    setSympton(savedLogs);
  }, []);

  return (
    <div className="App">
      <h1>🌸 Period Pet Tracker</h1>
      <Pet mood={petMood} />
      <Dashboard startDate={startDate} predictNextPeriod={predictNextPeriod} />
      <LogForm setStartDate={setStartDate} addLog={addLog} />
      <Logs symptoms={symptoms} />
      <Calendar startDate={startDate} />
    </div>
  );

}

export default App;
