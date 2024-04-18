import React, {createContext, useState} from 'react';
import {QuizContextProps, ScoresProps, QuizProviderProps} from '../types';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const defaultAddScores = () => {
  console.warn("updateScores was called without a QuizProvider. Ensure your components are wrapped in a QuizProvider.");
};

export const QuizContext = createContext<QuizContextProps>({
  scores: {budget: 0, highVolume: 0, specialty: 0},
  updateScores: defaultAddScores, // Updated to use the more informative default function
});

export const QuizProvider: React.FC<QuizProviderProps> = ({children}) => {
  const [scores, setScores] = useState<ScoresProps>({budget: 0, highVolume: 0, specialty: 0});

  const updateScores = (weights: number[]) => {
    setScores(prevScores => {
      // console.log('prevScores', prevScores);
      // console.log('weights', weights);

      return {
        budget: prevScores.budget + weights[0],
        highVolume: prevScores.highVolume + weights[1],
        specialty: prevScores.specialty + weights[2],
      };
    });
  };

  return (
    <QuizContext.Provider value={{scores, updateScores}}>
      {children}
    </QuizContext.Provider>
  );
};
