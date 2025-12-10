import React, { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function App() {
  const [value, setValue] = useState(null);

  const handleClick = () => {
    alert(`your appoinment has been booked on ${value}`);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Select Date"
            value={value}
            onChange={(newValue) => setValue(newValue)}
            renderInput={(params) => (
              <TextField fullWidth {...params} />
            )}
          />
        </LocalizationProvider>

        <button className="btn" onClick={handleClick}>
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
  );
}

export default App;