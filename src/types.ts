import React, {ReactNode} from "react";

export interface PaginationProps {
  id_page_current: number;
}

export interface PagesProps {
  id_page: number;
  paginationTitle: string;
  html1?: string;
  component: (id: number) => ReactNode;
  html2?: string;
}

export interface ChoiceProps {
  id_page: number;
  id_choice: number;
  text: string;
  weights: number[];
  next_page?: number;
}

export interface SelectedChoicesContextProps {
  selectedChoices: Set<ChoiceProps>;
  setSelectedChoices: React.Dispatch<React.SetStateAction<Set<ChoiceProps>>>;
}

export interface QuestionProps {
  id_page: number;
  question: string;
  choices: Set<ChoiceProps>;
  multiSelect: boolean; // true for multiple selections, false or omitted for single selection
  default_next_page?: number;
}

export interface HTMLProps {
  id_page: number;
  id_question: number;
  id_choice: number;
  content: string;
}

export interface ScoresProps {
  budget: number;
  highVolume: number;
  specialty: number;
}

export interface QuizContextProps {
  scores: ScoresProps;
  updateScores: (weights: number[]) => void;
}

export interface QuizProviderProps {
  children: ReactNode;
}
