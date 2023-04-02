import ProjectData from "./ProjectData";

const ProjectDetailsData = {
  sheruta: {
    heading: ProjectData[0].title,
    description: ProjectData[0].description,
    image: ProjectData[0].img,
    tags: "Real Estate, Social Media",
    category: "Real Estate",
    technologies: [
      "React",
      "Redux",
      "Bootstrap",
      "Node",
      "Postgres",
      "Socket IO",
      "PWA",
    ],
    quote:
      "There is no greater feeling than the feeling of knowing that the project you spent so much time on, is having a positive impact on people lives.",
    date_started: "20th July 2020",
    date_finished: "22nd April 2022",
    first_paragraph:
      "This is a freelance project I single-handedly built from scratch. Due to the rise in demand and shortage properties for rent in my country <strong>Sheruta</strong> is a platform where users can find potential flatmates to share an apartment with. <br /> <br /> The key features of this web application is the ability to provide as much information about yourself as possible, and getting the perfect match in seconds. <br /> <br /> Other features of the project are, real-time messaging, property search & filtering, real time notifications, backend email notification and booking of inspection",
    second_paragraph: "",
    demo_url:
      "https://firebasestorage.googleapis.com/v0/b/dont-delete-ad6f2.appspot.com/o/Portfolio%20Videos%2F2022-05-04%2004-20-05.mkv?alt=media&token=3ea73be5-6e7a-488b-8595-fd47fb123adc",
    live_link: ProjectData[0].live_url,
    repo_link: ProjectData[0].github_url,
  },
  portfolio_builder: {
    heading: ProjectData[1].title,
    description: ProjectData[1].description,
    image: ProjectData[1].img,
    tags: "Website Builder, Resume",
    category: "Resume Builder",
    technologies: [
      "React",
      "Redux",
      "Next Js",
      "Jest",
      "React Testing Library",
      "Cypres E2E Testing",
      "Typescript",
      "Github Actions",
      "Bootstrap",
      "Node",
      "Postgres",
      "StoryBook",
      "PWA",
    ],
    quote: null,
    date_started: "10th Feb 2021",
    date_finished: "20nd Nov 2021",
    first_paragraph:
      "This application allows users to build professional looking resumes quickly and easily. <br /> <br /> The next order of business is to allow the user to save and share a link of their resumes to potential employees.",
    second_paragraph: "",
    demo_url:
      "https://firebasestorage.googleapis.com/v0/b/dont-delete-ad6f2.appspot.com/o/Portfolio%20Videos%2F2022-05-04%2005-00-41.mkv?alt=media&token=94e93d79-5d7b-4411-aa46-ee1af1dc0d6d",
    live_link: ProjectData[1].live_url,
    repo_link: ProjectData[1].github_url,
  },
  mofi: {
    heading: ProjectData[2].title,
    description: ProjectData[2].description,
    image: ProjectData[2].img,
    tags: "Real Estate, Social Media",
    category: "Real Estate",
    technologies: [
      "Next.js",
      "Typescript",
      "React",
      "Redux",
      "Bootstrap",
      "Prismic CMS",
    ],
    quote:
      "I I'm proud to have built this website for the government of my country.",
    date_started: "20th July 2020",
    date_finished: "22nd April 2022",
    first_paragraph:
      "MOFI stands for 'The Ministry of Finance Incorporated'.<br /> I was asked to build a dynamic website for MOFI which was SEO friendly and asy to use.<br/> ",
    second_paragraph: "",
    demo_url:
      null,
    live_link: ProjectData[2].live_url,
    repo_link: ProjectData[2].github_url,
  },
};

export default ProjectDetailsData;
