import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Na Wei | Fullstack Developer', // e.g: 'Name | Developer'
  lang: 'en, nob, 中', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hey there, I'm`,
  name: 'Na',
  subtitle: 'and welcome to my portfolio',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `I am a curious and creative life learner with a keen
  interest in data and technology. I enjoy working with
  people, solving challenges and building apps and
  services that makes life easier. `,
  paragraphTwo: `Having previously
  worked in healthcare, I have now transitioned into the
  software development field to pursue my passion as a
  full-stack Javascript web developer.
  `,
  paragraphThree: '',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'expo-QR-code.png',
    title: 'Meny food scanner',
    info: 'Hobby project-React Native, GraphQL, MongoDB, Webscrapping',
    info2: `Scan Meny food items to find healthier alternatives`,
    url: '',
    repo: 'https://github.com/seriousCookies/foodFinder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://fierce-retreat-29938.herokuapp.com/index.html',
    title: 'MVP Live store counter',
    info: 'Graduation project-Apollo, React, REST API',
    info2:
      'Live stream, centralised platform, allowing businesses to track their current venue capacity',
    url: '',
    repo: 'https://fierce-retreat-29938.herokuapp.com/index.html', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'https://recipe-finder-mvp.herokuapp.com/',
    title: 'MVP Recipe Finder',
    info: 'Hackday project-Express.js, React, REST API',
    info2: 'Recipe finder with filter options for dietary preferences and allergies.',
    url: '',
    repo: 'https://github.com/seriousCookies/recipe-finder', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/naweioslo/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/seriousCookies/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
