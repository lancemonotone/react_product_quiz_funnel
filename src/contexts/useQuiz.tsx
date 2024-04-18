import { useContext } from 'react';
import {QuizContext} from './QuizContext';

const useQuiz = () => useContext(QuizContext);

export default useQuiz;
