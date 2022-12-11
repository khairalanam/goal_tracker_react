import React, { useState } from "react";

const AddGoal = ({ onAdded, onSubmitted }) => {
  const [goalTask, setGoalTask] = useState("");
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!goalTask || !day || !month || !year) {
      alert("Please add a goal!");
      return;
    }

    onAdded({ goalTask, day, month, year });
    onSubmitted();
    setGoalTask("");
    setDay("");
    setMonth("");
    setYear("");
  };

  const formStyles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1em",
    textAlign: "center",
    backgroundColor: "rgb(73, 146, 255)",
    color: "white",
    padding: "1em 0",
    width: "75%",
    margin: "0 auto",
    borderRadius: "0.5rem",
  };

  const formControlStyles = {
    display: "flex",
    flexDirection: "column",
    gap: "0.5em",
    fontSize: "0.875rem",
    width: "50%",
  };

  const inputStyles = {
    border: "None",
    padding: "0.5em",
    borderRadius: "0.25rem",
  };

  const submitStyles = {
    width: "50%",
    margin: "1em 0",
    padding: "0.5em",
    borderRadius: "0.25rem",
    border: "None",
    backgroundColor: "green",
    color: "white",
    cursor: "pointer",
  };

  return (
    <form className="goal-add-form" style={formStyles} onSubmit={onSubmit}>
      <div className="form-control" style={formControlStyles}>
        <p>Goal</p>
        <input
          type="text"
          placeholder="Add Goal"
          style={inputStyles}
          value={goalTask}
          onChange={(e) => setGoalTask(e.target.value)}
        />
      </div>
      <div className="form-control" style={formControlStyles}>
        <p>Day</p>
        <input
          type="text"
          style={inputStyles}
          placeholder="Add Day"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>
      <div className="form-control" style={formControlStyles}>
        <p>Month</p>
        <input
          type="text"
          style={inputStyles}
          placeholder="Add Month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
      </div>
      <div className="form-control" style={formControlStyles}>
        <p>Year</p>
        <input
          type="text"
          style={inputStyles}
          placeholder="Add Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>

      <input type="submit" value="Save Goal" style={submitStyles} />
    </form>
  );
};

export default AddGoal;
