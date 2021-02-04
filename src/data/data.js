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

export const techData = {
  frontend: `ReactJS, ReduxJS, React Native, HTML5, CSS3/SASS, Bootstrap/MaterialUI
  `,
  backend: 'NodeJS/ExpressJS, REST/GraphQL, Apollo, Firebase, PostgreSQL/MongoDB',
  tools: 'Git, Heroku, Netlify, Mocha/Jest',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'chatroom',
    title: 'Firebase Chatroom',
    info: 'Hobby project',
    info2: `Live chatroom with separate rooms`,
    info3: 'React, Firebase',
    url: 'https://my-first-firebase-8edd4.web.app/',
    repo: 'https://github.com/seriousCookies/my-firebase-app', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'website',
    title: 'This Website',
    info: 'Hobby project',
    info2: `My website portfolio`,
    info3: 'React, Gatsby',
    url: '',
    repo: 'https://github.com/seriousCookies/portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'expo-QR-code.png',
    title: 'Meny food scanner',
    info: 'Hobby project',
    info2: `Scan Meny food items to find healthier alternatives`,
    info3: 'React Native, GraphQL, MongoDB, Webscrapping',
    url: 'https://github.com/seriousCookies/foodFinder',
    repo: 'https://github.com/seriousCookies/foodFinder', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'koProject.png',
    title: 'MVP Live store counter',
    info: 'Graduation project',
    info2:
      'Live stream, centralised platform, allowing businesses to track their current venue capacity',
    info3: 'Apollo, React,GraphQL, Firebase',
    url: 'https://fierce-retreat-29938.herokuapp.com/index.html',
    repo: 'https://github.com/seriousCookies/koe_project', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'foodFinder.png',
    title: 'MVP Recipe Finder',
    info: 'Hackday project',
    info2: 'Recipe finder with filter options for dietary preferences and allergies.',
    info3: 'Expressjs, React, REST API',
    url: 'https://recipe-finder-mvp.herokuapp.com/',
    repo: 'https://github.com/seriousCookies/recipe-finder', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'na.wei@appliedtechnology.se',
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
