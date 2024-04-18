import {useContext} from 'react';
import useQuiz from '../contexts/useQuiz';
import {ChoiceProps, QuestionProps} from '../types';
import styles from '../assets/scss/Question.module.scss';
import {questions} from '../data/questions';
import {SelectedChoicesContext} from '../contexts/SelectedChoicesContext';


const Question = ({id}: { id: number }) => {
  const {updateScores} = useQuiz();
  const context = useContext(SelectedChoicesContext);

  if (!context) {
    throw new Error('SelectedChoicesContext is not provided');
  }

  const {selectedChoices, setSelectedChoices} = context;

  const questionObj: QuestionProps | undefined = questions.find(question => question.id_page === id);

  if (!questionObj) {
    return <p>Question not found</p>;
  }

  const {question, choices, multiSelect} = questionObj;

  const numChoices = Array.from(choices).length;

  const deselectAllChoices = (choices: Set<ChoiceProps>, updateScoresFunc: (weights: number[]) => void, currentQuestionId: number) => {
    choices.forEach((choice: ChoiceProps) => {
      if (choice.id_page === currentQuestionId) {
        setSelectedChoices(prev => {
          const newSet = new Set(prev);
          newSet.delete(choice);
          return newSet;
        });
        updateScoresFunc(choice.weights.map(weight => weight * -1));
      }
    });
  };

  const handleChoiceSelect = (choice: ChoiceProps) => {

    if (selectedChoices.has(choice)) {
      setSelectedChoices(prev => {
        const newSet = new Set(prev);
        newSet.delete(choice);
        return newSet;
      });

      updateScores(choice.weights.map(weight => weight * -1));
    } else {
      if (!multiSelect) {
        deselectAllChoices(selectedChoices, updateScores, id);
      }
      setSelectedChoices(prev => {
        const newSet = new Set(prev);
        newSet.add(choice);
        return newSet;
      });
      updateScores(choice.weights);
    }
  };

  return (
    <>
      <h4>{question}</h4>
      <h6>{multiSelect ? 'Select all that apply' : 'Select the one that most applies'}</h6>
      <div className={styles.optionsContainer}
           style={{gridTemplateColumns: `repeat(${numChoices}, 1fr)`}}
      >
        {Array.from(choices).map((choice: ChoiceProps) => (
          <button
            key={choice.id_choice}
            className={`${styles.optionButton} ${selectedChoices.has(choice) ? styles.selected : ''}`}
            onClick={() => handleChoiceSelect(choice)}
            data-option={JSON.stringify(choice)}
            data-selected-choices={JSON.stringify(selectedChoices)}
          >
            {choice.text}
          </button>
        ))}
      </div>
    </>
  );
};

export default Question;
