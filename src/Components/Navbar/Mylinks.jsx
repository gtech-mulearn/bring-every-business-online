const mulearnlink = "https://mulearn.org";
const learnlink = "https://learn.mulearn.org";

export const links = [
  {
    head: -1,
    name: "About",
    submenu: true,
    sublinks: [
      {
        name: "The Team",
        submenu: true,
        sublinks: [
          {
            name: "Our Team",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/team",
            foreign: false,
          },
        ],
      },
      {
        name: "Partners",
        submenu: true,
        sublinks: [
          {
            name: "Community Partners",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/community-partners",
            foreign: false,
          },
          {
            name: "Company Partners",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/company-partners",
            foreign: false,
          },
        ],
      },
      {
        name: "Leaderboard",
        submenu: true,
        sublinks: [
          {
            name: "Overall Leaderboards",
            link: mulearnlink + "/leaderboard",
          },
          {
            name: "Monthly Leaderboards",
            link: mulearnlink + "/leaderboard/monthly",
          },
        ],
      },
      {
        name: "Media",
        submenu: true,
        sublinks: [
          {
            name: "Gallery",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/gallery",
            foreign: false,
          },
          {
            name: "News",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/news",
            foreign: false,
          },
        ],
      },
      {
        name: "Campus Chapters",
        submenu: true,
        sublinks: [
          {
            name: "Home Page",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/campuschapters",
            foreign: false,
          },
          {
            name: "Campus Logo Generator",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/campuschapters/#logo-generator",
            foreign: false,
          },
          {
            name: "Success Stories",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/campuschapters/#success-stories",
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Programs",
    submenu: true,
    sublinks: [
      {
        head: 1,
        name: "Flagship",
        submenu: true,
        sublinks: [
          {
            name: "YIP 2021",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/yip",
            foreign: false,
          },
          {
            name: "Foundation Program",
            submenu: false,
            sublinks: [],
            link: "https://foundation.mulearn.org",
            foreign: true,
          },
        ],
      },
      {
        head: 1,
        name: "Ongoing",
        submenu: true,
        sublinks: [
          {
            name: "Art of Teaching",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/artofteaching",
            foreign: false,
          },
        ],
      },
      {
        head: 1,
        name: "Others",
        submenu: true,
        sublinks: [
          {
            name: "Wiki Syllabus",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/wikisyllabus",
            foreign: false,
          },
          {
            name: "Hacktober Fest",
            submenu: false,
            sublinks: [],
            link: mulearnlink + "/hacktoberfest",
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Events Page",
    submenu: true,
    sublinks: [
      {
        head: 2,
        name: "Global Calendar",
        submenu: true,
        sublinks: [
          {
            name: "Calendar",
            link: mulearnlink + "/calendar",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 2,
        name: "Announcements",
        submenu: true,
        sublinks: [
          {
            name: "Announcements",
            link: mulearnlink + "/announcements",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 2,
        name: "Weekly Events",
        submenu: true,
        sublinks: [
          {
            name: "Inspiration Station",
            link: mulearnlink + "/isr",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
    ],
  },
  {
    head: -1,
    name: "Interest Group",
    submenu: true,
    sublinks: [
      {
        head: 3,
        name: "Interest Groups",
        submenu: true,
        sublinks: [
          {
            name: "Home Page",
            link: learnlink + "/",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Web Development",
            link: learnlink + "/web",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Android Development",
            link: learnlink + "/android",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "UI / UX",
            link: learnlink + "/uiux",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Product Management",
            link: learnlink + "/pm",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "IoT",
            link: learnlink + "/iot",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Cyber Security",
            link: learnlink + "/cybersec",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Search",
        submenu: true,
        sublinks: [
          {
            name: "Mentor Directory",
            link: learnlink + "/mentors",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Existing Circles",
            link: learnlink + "/searchcircles",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Practice",
        submenu: true,
        sublinks: [
          {
            name: "Problem Shelf",
            link: learnlink + "/problemshelves",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Challenges",
            link: learnlink + "/challenges",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Courses",
            link: learnlink + "/courses",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "API Setu",
            link: learnlink + "/apisetu",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
      {
        head: 3,
        name: "Learning Circles",
        submenu: true,
        sublinks: [
          {
            name: "Create Circle",
            link: learnlink + "/create",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
          {
            name: "Join Circles",
            link: learnlink + "/join",
            submenu: false,
            sublinks: [],
            foreign: false,
          },
        ],
      },
    ],
  },
];
