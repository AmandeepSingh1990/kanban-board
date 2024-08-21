import React, { DragEvent, useState } from "react";
import { CardType, ColumnProps } from "./types";
import Card from "./Card";

export default function Column({
  title,
  column,
  headingColor,
  cards,
  setCards,
}: ColumnProps) {
  const [active, setActive] = useState(false);

  const handleDragEnd = (e: DragEvent) => {
    const cardId = e.dataTransfer.getData("cardId");

    const position = "1";

    let clone = [...cards];

    let cardToTransfer = clone.find((c) => c.id === cardId);
    if (!cardToTransfer) return;
    cardToTransfer = { ...cardToTransfer, column };

    clone = clone.filter((c) => c.id !== cardId);

    const insertAtIndex = clone.findIndex((el) => el.id === position);
    if (insertAtIndex === undefined) return;

    clone.splice(insertAtIndex, 0, cardToTransfer);

    setCards(clone);

    setActive(false);
  };

  const handleDragOver = (e: DragEvent) => {
    e.preventDefault();
    setActive(true);
  };

  const handleDragLeave = () => {
    setActive(false);
  };

  const handleDragStart = (e: DragEvent, card: CardType) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <div className="w-64 shrink-0">
      <div className="mb-3 flex items-center justify-between">
        <h3 className={`font-medium ${headingColor}`}>{title}</h3>
        <span className="rounded text-sm text-neutral-400">
          {filteredCards.length}
        </span>
      </div>
      <div
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((card) => {
          return <Card {...card} handleDragStart={handleDragStart} />;
        })}
      </div>
    </div>
  );
}
