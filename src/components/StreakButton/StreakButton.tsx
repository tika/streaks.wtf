import React from "react";
import { motion } from "framer-motion";

import "./StreakButton.css";

interface Props {
  onClick(): void;
}

export function StreakButton(props: Props) {
  return (
    <motion.div
      className="streak-button"
      onTap={props.onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    />
  );
}
