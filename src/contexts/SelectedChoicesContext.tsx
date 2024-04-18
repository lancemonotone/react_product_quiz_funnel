import React, {createContext, useState} from 'react';
import {ChoiceProps, SelectedChoicesContextProps} from '../types';

export const SelectedChoicesContext = createContext<SelectedChoicesContextProps | undefined>(undefined);

export const SelectedChoicesProvider: React.FC<React.PropsWithChildren<object>> = ({children}) => {
  const [selectedChoices, setSelectedChoices] = useState<Set<ChoiceProps>>(new Set());

  return (
    <SelectedChoicesContext.Provider value={{selectedChoices, setSelectedChoices}}>
      {children}
    </SelectedChoicesContext.Provider>
  );
};
