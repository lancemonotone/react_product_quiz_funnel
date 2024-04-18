import {ScoresProps} from '../types';
import useQuiz from '../contexts/useQuiz';
// import styles from '../assets/scss/Results.module.scss';

const Results = () => {
  const {scores} = useQuiz() as { scores: ScoresProps };
  // const draggableRef = useRef<HTMLDivElement>(null);

  const getResultCategory = () => {
    const categories = Object.entries(scores).sort((a, b) => b[1] - a[1]);
    return categories[0][0];
  };

  const category = getResultCategory();
  let resultMessage, resultHeading, resultLink;

  switch (category) {
    case 'budget':
      resultHeading = 'Budget Package';
      resultMessage = 'Our high volume package is a collection of carefully curated products specifically selected for a shop looking to serve lots of coffee to lots of customers with very little friction points. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum.';
      resultLink = <a href="/budget">Shop {resultHeading} &gt;</a>;
      break;
    case 'highVolume':
      resultHeading = 'High Volume Package';
      resultMessage = 'Our high volume package is a collection of carefully curated products specifically selected for a shop looking to serve lots of coffee to lots of customers with very little friction points. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum.';
      resultLink = <a href="/high-volume">Shop {resultHeading} &gt;</a>;
      break;
    case 'specialty':
      resultHeading = 'Specialty Package';
      resultMessage = 'You don’t compromise on quality and process. Creating the best coffee requires equipment as comprehensive as your process and knowledge and we’ve curated a collection just for you. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum.';
      resultLink = <a href="/specialty">Shop {resultHeading} &gt;</a>;
      break;
    default:
      resultHeading = 'Inconclusive';
      resultMessage = 'Your quiz results are inconclusive.';
      resultLink = <a href="/">Return &gt;</a>;
      break;
  }

  return (
    <div
      // className={styles.draggablePopup}
      // ref={draggableRef}
    >
      {/*<h2*/}
      {/*  className={styles.draggableTitle}*/}
      {/*>Quiz Results</h2>*/}
      <p>Thanks for taking the time to answer our questions</p>
      <h4>Based on your answers, we recommend our:</h4>
      <h2>{resultHeading}</h2>
      <p>{resultMessage}</p>
      <p>{resultLink}</p>
      <fieldset >
        <legend>Scores (Development Only)</legend>
        <ul>
          <li>Budget: {scores.budget}</li>
          <li>High Volume: {scores.highVolume}</li>
          <li>Specialty: {scores.specialty}</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Results;
