import React from "react";
import { motion } from "framer-motion";
import { CardProps } from "./types";

export default function Card({
  title,
  id,
  column,
  handleDragStart,
}: CardProps) {
  return (
    <>
      <motion.div
        layout
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 mb-2 active:cursor-grabbing"
      >
        <p className="text-sm text-neutral-100">{title}</p>
      </motion.div>
    </>
  );
}
