import React from "react";
import { BiTrash } from "react-icons/bi";

const Goal = ({ goal, onDelete, onComplete }) => {
  return (
    <li className="goal-li">
      <input
        type="checkbox"
        className="check-box"
        onChange={() => onComplete(goal.id)}
      />
      <p className="goal-text">{goal.goalTask}</p>
      <p className="goal-text">
        {goal.day} &nbsp; {goal.month} &nbsp; {goal.year}
      </p>
      <BiTrash
        className="dust-bin"
        onClick={() => onDelete(goal.id)}
        style={{ color: "red", fontSize: "1rem" }}
      />
    </li>
  );
};

export default Goal;
