import "./App.css";
import Button from "./components/Button";
import Goal from "./components/Goal";
import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import { useEffect, useState } from "react";
import NoGoal from "./components/NoGoal";
import AddGoal from "./components/AddGoal";

function App() {
  const [goals, setGoals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddGoal, setShowAddGoal] = useState(false);

  // fetch the goals data initially
  useEffect(() => {
    const getGoals = async () => {
      const goalsFromServer = await fetchGoals();

      setGoals(goalsFromServer);
    };
    getGoals();
  }, []);

  // fetch goals data
  const fetchGoals = async () => {
    const res = await fetch("http://localhost:5000/goals");
    const data = await res.json();

    return data;
  };

  // delete goal
  const deleteGoal = async (id) => {
    await fetch(`http://localhost:5000/goals/${id}`, {
      method: "DELETE",
    });
    setGoals(goals.filter((goal) => goal.id !== id));
  };

  // add goal
  const addGoal = async (goal) => {
    const res = await fetch("http://localhost:5000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal),
    });

    const data = await res.json();
    setGoals([...goals, data]);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-section">
        <Searchbar
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <Button
          text={showAddGoal ? "Close" : "Add Goal"}
          color={showAddGoal ? "red" : "rgb(73, 146, 255)"}
          onSet={() => setShowAddGoal(!showAddGoal)}
        />
      </div>
      {showAddGoal && (
        <AddGoal
          onAdded={addGoal}
          onSubmitted={() => setShowAddGoal(!showAddGoal)}
        />
      )}
      {goals.length === 0 ? (
        <NoGoal className="no-goal" />
      ) : (
        <ul className="goals-list" style={{ margin: "2em 0" }}>
          {goals
            .filter((goal) => {
              return searchTerm === ""
                ? goal
                : goal.goalTask
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            })
            .map((goal, index) => {
              return (
                <Goal
                  goal={goal}
                  key={index}
                  onDelete={deleteGoal}
                  onComplete={deleteGoal}
                />
              );
            })}
        </ul>
      )}
    </div>
  );
}

export default App;
