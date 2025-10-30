import iu from "../assets/timeline/iu.jpg"
import mbbank from "../assets/timeline/mbbank.jpg"
import vlu from "../assets/timeline/vlu.jpg"
import vlu_bvda from "../assets/timeline/vlu_bvda.jpg"
import vnyi from "../assets/timeline/vnyi.jpg"
import pnt from "../assets/timeline/pnt.jpg"
const timeline = [
  // ===== Education =====
  {
    id: 1,
    type: "education",
    year: 2020,
    school: "International University",
    degree: "Bachelor of Finance & Banking",
    period: "2020–2021",
    summary: "Admitted to Finance & Banking; completed foundational courses before pivoting to Software Engineering.",
    description:
      "Entered the Finance & Banking program at International University. Built fundamentals in finance and quantitative methods before deciding to transition toward Software Engineering to align with long-term goals.",
    picture: iu
  },
  {
    id: 2,
    type: "education",
    year: 2021,
    school: "Van Lang University",
    degree: "Bachelor of Software Engineering",
    period: "2021–2025",
    summary: "Pursued Software Engineering with focus on web development, product thinking, and AI-assisted tooling.",
    description:
      "Transitioned to Software Engineering at Van Lang University. Focused on modern web stacks, data modeling, and product development practices, including hands-on projects and collaborative coursework.",
    picture: vlu
  },
  {
    id: 4,
    type: "education",
    year: 2025,
    school: "Van Lang University",
    degree: "Capstone Defense",
    period: "05/2025–06/2025",
    summary: "Defended capstone on AI-assisted Resume/Quiz Builder; covered system design and UX.",
    description:
      "Presented an AI-assisted platform that streamlines quiz creation and resume authoring. The defense highlighted architecture, microservices integration, evaluation workflows, and user-centric UX decisions.",
    picture: vlu_bvda
  },
//   {
//     id: 5,
//     type: "education",
//     year: 2026,
//     school: "Pham Ngoc Thach University of Medicine",
//     degree: "Bachelor of Pharmacy (in progress)",
//     period: "2026–present",
//     summary: "Began Pharmacy studies to deepen domain knowledge in healthcare and pharmaceuticals.",
//     description:
//       "Started the Bachelor of Pharmacy program at Pham Ngoc Thach University of Medicine, focusing on pharmacology, pharmaceutical care, and healthcare systems to complement technology interests with healthcare expertise.",
//     picture: pnt
//   },

  // ===== Experience (replaced with 2 new items) =====
  {
    id: 6,
    type: "experience",
    year: 2025,
    company: "MB Bank",
    position: "Business Analyst Intern",
    period: "03/2025–08/2025",
    summary: "Supported requirements elicitation and UAT for retail banking features.",
    description:
      "Collaborated with stakeholders to elicit and clarify requirements, drafted BRD/SRS, mapped AS-IS/TO-BE processes (BPMN), and assisted UAT for incremental releases. Worked closely with tech squads to align scope, constraints, and acceptance criteria.",
    picture: mbbank
  },
  {
    id: 7,
    type: "experience",
    year: 2025,
    company: "VNYI Software",
    position: "Frontend Engineer Intern",
    period: "09/2025–12/2025",
    summary: "Built React components, state management, and UI performance tuning.",
    description:
      "Implemented reusable React/Tailwind components, optimized rendering and bundle size, and collaborated with designers to deliver accessible UI. Participated in code reviews, unit testing, and release QA for SPA features.",
    picture: vnyi
  }
];


export default timeline;