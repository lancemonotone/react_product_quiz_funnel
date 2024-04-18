import {useContext} from 'react';
import {html} from '../data/html.tsx';
import {SelectedChoicesContext} from '../contexts/SelectedChoicesContext';
import styles from '../assets/scss/Html.module.scss';

const HTML = () => {
  // Inside your HTML component
  const context = useContext(SelectedChoicesContext);

  if (!context) {
    throw new Error('HTML must be used within a SelectedChoicesProvider');
  }

  const selectedChoicesArray = Array.from(context.selectedChoices);

  const matchingElements = html.filter(html =>
    selectedChoicesArray.some(choice =>
      choice.id_page === html.id_question &&
      choice.id_choice === html.id_choice
    )
  );

  //console.log('Matching elements:', matchingElements);

  if (matchingElements.length === 0) {
    return <p>No matching HTML content found</p>;
  }

  const htmlObj = matchingElements[0];

  return <div className={styles.html} dangerouslySetInnerHTML={{__html: htmlObj.content}}/>;
};

export default HTML;
