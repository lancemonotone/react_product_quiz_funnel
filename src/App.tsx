// App.tsx
import React from 'react';
import {QuizProvider} from './contexts/QuizContext';
// import Results from './components/Results';
import styles from './assets/scss/App.module.scss';
import { SelectedChoicesProvider } from "./contexts/SelectedChoicesContext";
import Page from "./components/Page.tsx";

const App: React.FC = () => {
  return (
    <QuizProvider>
      <SelectedChoicesProvider>
        <button className={`popup-toggle ${styles.closeButton}`} data-target="product-quiz-popup">
          Exit
        </button>
        <div className={styles.app}>
          <Page/>
        </div>
      </SelectedChoicesProvider>
    </QuizProvider>
  );
};

export default App;
