import React from "react";
import { StreakButton } from "../StreakButton/StreakButton";
import "./Home.css";

export function Home() {
  return (
    <div>
      <div className="current-module">
        <h2>now showing</h2>
        <h1>"studying"</h1>
        <h3>22 day streak</h3>
      </div>
      <StreakButton onClick={() => console.log("streaks")} />
    </div>
  );
}
