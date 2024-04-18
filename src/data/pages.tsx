import {PagesProps} from "../types.ts";
import Question from "../components/Question.tsx";
import Results from "../components/Results.tsx";
import HTML from "../components/HTML.tsx";

export const pages: PagesProps[] = [
  {
    id_page: 1,
    paginationTitle: "00",
    html1: "Before we get started, tell us a little bit about yourself",
    component: (id: number) => <Question id={id}/>,
    html2: "",
  },
  {
    id_page: 2,
    paginationTitle: "00",
    html1: "",
    component: () => <HTML/>,
    html2: "",
  },
  {
    id_page: 3,
    paginationTitle: "01",
    html1: "Let’s start with what you’re planning to offer",
    component: (id: number) => <Question id={id}/>,
    html2: "<a href='/consultation'>I’m actually not sure where to start, can I book a free consultation</a>",
  },
  {
    id_page: 4,
    paginationTitle: "01",
    html1: "We love espresso! Let’s get a better idea about espresso offerings",
    component: (id: number) => <Question id={id}/>,
    html2: "",
  },
  {
    id_page: 5,
    paginationTitle: "02",
    html1: "Now that we know what you’ll serve, let’s talk about the shop itself",
    component: (id: number) => <Question id={id}/>,
    html2: "",
  },
  {
    id_page: 6,
    paginationTitle: "03",
    html1: "Great! Equipment can only be as good as the experience using it",
    component: (id: number) => <Question id={id}/>,
    html2: "",
  },
  {
    id_page: 7,
    paginationTitle: "04",
    html1: "We’ve got coffee, equipment and shop covered, only thing left is timeline",
    component: (id: number) => <Question id={id}/>,
    html2: "",
  },
  {
    id_page: 8,
    paginationTitle: "Results",
    html1: "",
    component: () => <Results/>,
    html2: "",
  },
// ... rest of the pages
];
