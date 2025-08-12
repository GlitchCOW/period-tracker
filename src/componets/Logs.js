import React from "react";

export default function Logs({ symptoms }) {
  return (
    <section>
      <h2>Recent Logs</h2>
      <ul>
        {symptoms.length === 0 && <p>No logs yet!</p>}
        {symptoms.map((log, index) => (
          <li key={index}>
            <strong>{log.date}</strong>: {log.symptom}
          </li>
        ))}
      </ul>
    </section>
  );
}