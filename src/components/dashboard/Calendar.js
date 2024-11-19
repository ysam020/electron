import { useState } from "react";
import { Calendar } from "primereact/calendar";

function CalendarComponent() {
  const [date, setDate] = useState(null);
  return (
    <div className="dashboard-container">
      <h5>
        <strong>Calendar</strong>
      </h5>
      <div className="card flex justify-content-center">
        <Calendar value={date} onChange={(e) => setDate(e.value)} inline />
      </div>
    </div>
  );
}

export default CalendarComponent;
