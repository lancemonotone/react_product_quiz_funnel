import React, {useContext, useEffect, useState} from 'react';
import {pages} from '../data/pages';
import Pagination from "./Pagination.tsx";
import {SelectedChoicesContext} from "../contexts/SelectedChoicesContext.tsx";
import {PagesProps, QuestionProps} from "../types.ts";
import Question from "./Question.tsx";
import Results from "./Results.tsx";
import styles from '../assets/scss/Page.module.scss';
import {questions} from "../data/questions.tsx";

const Page: React.FC = () => {
  const context = useContext(SelectedChoicesContext);

  if (!context) {
    throw new Error('SelectedChoicesContext is not provided');
  }

  const {selectedChoices, setSelectedChoices} = context;
  const [id_page_current, setCurrentPageId] = useState(pages[0].id_page);
  const [navigationHistory, setNavigationHistory] = useState<number[]>([]);
  const [slideDirection, setSlideDirection] = useState('');

  useEffect(() => {
    if (slideDirection !== '') {
      // Reset the animation state after it completes
      setTimeout(() => setSlideDirection(''), 500);
    }
  }, [slideDirection]);

  const currentPageIndex = pages.findIndex(page => page.id_page === id_page_current);
  const previousPageId = currentPageIndex > 0 ? pages[currentPageIndex - 1].id_page : null;
  const nextPageId = currentPageIndex < pages.length - 1 ? pages[currentPageIndex + 1].id_page : null;

  const pageObj = pages.find(page => page.id_page === id_page_current);
  const {
    html1,
    component,
    html2
  } = pageObj ? pageObj : {} as PagesProps;

  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedChoicesForCurrentPage = Array.from(selectedChoices).filter(choice => choice.id_page === id_page_current);
    const questionObj: QuestionProps | undefined = questions.find(question => question.id_page === id_page_current);
    let nextPageId: number | undefined | null = null;

    const selectedChoiceWithNextPage = selectedChoicesForCurrentPage.find(choice => choice.next_page !== undefined);

    if (selectedChoiceWithNextPage) {
      nextPageId = selectedChoiceWithNextPage.next_page;
    } else if (questionObj && questionObj.default_next_page) {
      nextPageId = questionObj.default_next_page;
    } else {
      nextPageId = Number(event.currentTarget.getAttribute('data-next-page'));
    }

    if (nextPageId) {
      setSlideDirection('right');
      setNavigationHistory(prev => [...prev, id_page_current]);
      setCurrentPageId(nextPageId);
    }
  };

  const handlePrevious = () => {
    if (navigationHistory.length > 0) {
      setSlideDirection('left');
      const previousPageId = navigationHistory[navigationHistory.length - 1];
      setNavigationHistory(prev => prev.slice(0, -1));
      setCurrentPageId(previousPageId);

      // Get the choice from the previous page that has a next_page property
      const choiceWithNextPage = Array.from(selectedChoices).find(choice => choice.id_page === previousPageId && choice.next_page !== undefined);

      if (choiceWithNextPage) {
        // Get all choices from the next_page only
        const choicesToRemove = Array.from(selectedChoices).filter(choice => choice.id_page === choiceWithNextPage.next_page);

        // Remove these choices from selectedChoices
        setSelectedChoices(prev => {
          const newSet = new Set(prev);
          choicesToRemove.forEach(choice => newSet.delete(choice));
          return newSet;
        });
      }
    }
  };

  const gotoStart = () => {
    setSlideDirection('left');
    setSelectedChoices(new Set());
    setCurrentPageId(pages[0].id_page);
  };


  // Determine if a choice has been made on the current page
  const isChoiceMade = Array.from(selectedChoices).some(choice => choice.id_page === id_page_current);

  // Determine if the current component is a Question
  const componentElement = component?.(id_page_current);
  const isQuestion = React.isValidElement(componentElement) && componentElement.type === Question;

  // Determine if the current component is Results
  const isResults = React.isValidElement(componentElement) && componentElement.type === Results;

  return (
    <>
      <Pagination id_page_current={id_page_current}/>

      <div className={`${styles.content} ${slideDirection === 'right' ? styles.fadeSlideInRight : slideDirection === 'left' ? styles.fadeSlideInLeft : ''}`}>

        {html1 && <p dangerouslySetInnerHTML={{__html: html1}}/>}

        {component && component(id_page_current)}

        {html2 && <p dangerouslySetInnerHTML={{__html: html2}}/>}

      </div>

      <nav className={styles.navButtons}>
        {!isResults && <>
            <button
                onClick={handlePrevious}
                className={id_page_current === pages[0].id_page ? styles.hidden : ''}
                disabled={id_page_current === pages[0].id_page}
                data-previous-page={previousPageId}
            >
              {'<'} Previous
            </button>
            <button
                onClick={handleNext}
                className={isResults || (isQuestion && !isChoiceMade) ? styles.hidden : ''}
                disabled={isResults || (isQuestion && !isChoiceMade)}
                data-next-page={nextPageId}
            >
                Next {'>'}
            </button>
        </>}
        {isResults &&
            <button onClick={gotoStart}>
                Go to start
            </button>
        }
      </nav>

    </>
  );
};

export default Page;
