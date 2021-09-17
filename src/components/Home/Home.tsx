import React from "react";
import { getGradient } from "../../util";
import { StreakButton } from "../StreakButton/StreakButton";
import "./Home.css";

export function Home() {
  const tempModule = "studying";
  return (
    <div>
      <div className="current-module">
        <h2>now showing</h2>
        <h1
          style={{
            background: `-webkit-linear-gradient(${getGradient(
              tempModule
            ).colors.join(", ")})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          "{tempModule}"
        </h1>
        <h3>22 day streak</h3>
      </div>
      <StreakButton onClick={() => console.log("streaks")} />
    </div>
  );
}
