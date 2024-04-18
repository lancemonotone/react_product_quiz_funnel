import {QuestionProps} from "../types";

export const questions: QuestionProps[] = [
  {
    id_page: 1,
    question: "Which business model best describes you?",
    choices: new Set([
      {id_page: 1, id_choice: 1, text: "I’m a Startup", weights: [2, 3, 1]},
      {id_page: 1, id_choice: 2, text: "I’m opening a new location", weights: [1, 3, 2]},
      {id_page: 1, id_choice: 3, text: "I’m upgrading my existing equipment", weights: [1, 2, 3]},
      {id_page: 1, id_choice: 4, text: "I’m adding a coffee menu to my non-coffee specific business", weights: [2, 1, 3]},
    ]),
    multiSelect: false,
  },
  {
    id_page: 3,
    question: "What will you serve?",
    choices: new Set([
      {id_page: 3, id_choice: 1, text: "Espresso", weights: [2, 2, 2], next_page: 4},
      {id_page: 3, id_choice: 2, text: "Batch Brewed Coffee", weights: [1, 3, 1]},
      {id_page: 3, id_choice: 3, text: "Hand Brewed / Pour Over", weights: [1, 2, 3]},
      {id_page: 3, id_choice: 4, text: "Cold Brew", weights: [2, 3, 1]},
      {id_page: 3, id_choice: 5, text: "Nitro", weights: [1, 1, 3]},
    ]),
    multiSelect: true,
    default_next_page: 5,
  },
  {
    id_page: 4,
    question: "How many types of espresso will you serve?",
    choices: new Set([
      {id_page: 4, id_choice: 1, text: "1 Type", weights: [3, 1, 1]},
      {id_page: 4, id_choice: 2, text: "2 Types (+ decaf)", weights: [2, 2, 2]},
      {id_page: 4, id_choice: 3, text: "3 Types (+ alternate espresso)", weights: [1, 1, 3]},
    ]),
    multiSelect: false,
  },
  {
    id_page: 5,
    question: "Tell us about your shop. Will/do you have?",
    choices: new Set([
      {id_page: 5, id_choice: 1, text: "Walk-In Customers", weights: [2, 3, 1]},
      {id_page: 5, id_choice: 2, text: "Drive-Thru", weights: [1, 3, 1]},
      {id_page: 5, id_choice: 3, text: "Mobile Cart", weights: [3, 1, 2]},
      {id_page: 5, id_choice: 4, text: "Trailer / Mobile Venue", weights: [3, 1, 2]},
    ]),
    multiSelect: true,
  },
  {
    id_page: 6,
    question: "I’d like my equipment experience to be",
    choices: new Set([
      {id_page: 6, id_choice: 1, text: "A high-quality experience that is mostly automated & needs very little training", weights: [2, 3, 1]},
      {id_page: 6, id_choice: 2, text: "Hand-made on reliable equipment w/ moderate staff training", weights: [2, 2, 3]},
      {id_page: 6, id_choice: 3, text: "Top-of-the-line, precision, expert level equipment", weights: [1, 1, 3]},
      {id_page: 6, id_choice: 4, text: "Self-serve, customer / employee facing", weights: [3, 2, 1]},
    ]),
    multiSelect: false,
  },
  {
    id_page: 7,
    question: "How soon are you opening?",
    choices: new Set([
      {id_page: 7, id_choice: 1, text: "Less than 2 months, I need equipment ASAP!", weights: [3, 2, 1]},
      {id_page: 7, id_choice: 2, text: "2-4 Months", weights: [2, 3, 2]},
      {id_page: 7, id_choice: 3, text: "5+ Months", weights: [1, 2, 3]},
    ]),
    multiSelect: false,
  },
];
