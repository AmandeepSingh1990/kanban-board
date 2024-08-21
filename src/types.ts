import { Dispatch, SetStateAction } from "react";

export type ColumnType = "backlog" | "todo" | "doing" | "done";

export type CardType = {
  title: string;
  id: string;
  column: ColumnType;
};

export type ColumnProps = {
  title: string;
  column: ColumnType;
  headingColor: string;
  cards: CardType[];
  setCards: Dispatch<SetStateAction<CardType[]>>;
};

export type CardProps = CardType & {
  handleDragStart: Function;
};
