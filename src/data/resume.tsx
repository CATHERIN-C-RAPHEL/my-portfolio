import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Catherin C Raphel",
  initials: "CR",
  url: "https://catherin.io",
  location: "Thrissur, Kerala, India",
  locationLink: "",
  description:
    "UI/UX Designer passionate about creating simple and beautiful digital experiences. I love turning ideas into user-friendly designs.",
  summary:
    "I completed my master’s in Mobile Phone Application Development from CUSAT, during which I did my internship at Acube Innovations. After that, I worked as a UI/UX Designer cum Trainer at Mentorow, where I trained students in design concepts and tools. Currently, I’m a UI/UX Designer at Invisor in Kochi, where I design clean, user-friendly interfaces and create engaging digital experiences that bring ideas to life.",
  avatarUrl: "/catherin.jpeg",
  skills: [
    "Figma",
    "User Interface (UI) Design",
    "User Experinece (UX) Design",
    "Prototyping",
    "User Research",
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Webflow",
    "FigJam",
    "Adobe XD",
    "HTML",
    "CSS",
    "Bootstrap",
    "Agile",
    "Srum",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "catherincr19@gmail.com",
    tel: "+91 9400096902",
    social: {
      // GitHub: {
      //   name: "GitHub",
      //   url: "https://dub.sh/dillion-github",
      //   icon: Icons.github,

      //   navbar: true,
      // },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/catherin-c-raphel/",
        icon: Icons.linkedin,

        navbar: true,
      },
      // X: {
      //   name: "X",
      //   url: "",
      //   icon: Icons.x,

      //   navbar: true,
      // },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Invisor Consulting Services",
      href: "https://invisor.in/",
      badges: [],
      location: "Infopark, Kochi, India",
      title: "UI/UX Designer",
      logoUrl: "/invisor.jpeg",
      start: "September 2024",
      end: "Present",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },
    {
      company: "Mentorow",
      badges: [],
      href: "",
      location: "Infopark, Kochi, India",
      title: "UI/UX Designer cum Trainer",
      logoUrl: "/mentorow.png",
      start: "July 2024",
      end: "August 2024",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
    {
      company: "Acube Innovations",
      href: "https://acubeinnovations.com/",
      badges: [],
      location: "Kochi, India",
      title: "Software Deceloper Intern",
      logoUrl: "/acube.webp",
      start: "December 2023",
      end: "April 2024",
      description:
        "Architected and wrote the entire MVP of the GeForce Now Cloud Gaming internal admin and A/B testing dashboard using React, Redux, TypeScript, and Python.",
    },
    {
      company: "LearnHeros",
      href: "",
      badges: [],
      location: "Kochi, India",
      title: "Software Deceloper Intern",
      logoUrl: "/learnheros.jpeg",
      start: "May 2023",
      end: "July 2023",
      description:
        "Co-developed a prototype iOS app with another intern in Swift for the new Splunk Phantom security orchestration product (later publicly demoed and launched at .conf annual conference in Las Vegas). Implemented a realtime service for the iOS app in Django (Python) and C++; serialized data using protobufs transmitted over gRPC resulting in an approximate 500% increase in data throughput.",
    },
    // {
    //   company: "Lime",
    //   href: "https://li.me/",
    //   badges: [],
    //   location: "San Francisco, CA",
    //   title: "Software Engineer",
    //   logoUrl: "/lime.svg",
    //   start: "January 2018",
    //   end: "April 2018",
    //   description:
    //     "Proposed and implemented an internal ruby API for sending/receiving commands to scooters over LTE networks. Developed a fully automated bike firmware update system to handle asynchronous firmware updates of over 100,000+ scooters worldwide, and provide progress reports in real-time using React, Ruby on Rails, PostgreSQL and AWS EC2 saving hundreds of developer hours.",
    // },
    // {
    //   company: "Mitre Media",
    //   href: "https://mitremedia.com/",
    //   badges: [],
    //   location: "Toronto, ON",
    //   title: "Software Engineer",
    //   logoUrl: "/mitremedia.png",
    //   start: "May 2017",
    //   end: "August 2017",
    //   description:
    //     "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
    // },
  ],
  education: [
    {
      school: "Cochin Unvisersity of Science and Technology",
      href: "https://www.cusat.ac.in/",
      degree: "Master's Degree in Mobile Phone Application Development",
      logoUrl: "/cusat.png",
      start: "2022",
      end: "2024",
    },
    {
      school: "Smart Media College",
      href: "https://smartmediacollege.com/",
      degree: "Professional Diploma in Multimedia and Animation",
      logoUrl: "/smartmedia.png",
      start: "2021",
      end: "2023",
    },
    {
      school: "Vimala College",
      href: "https://www.vimalacollege.edu.in/",
      degree: "Bachelor's Degree in Web Technology",
      logoUrl: "/vimala.webp",
      start: "2019",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Invisor Business Facts",
      href: "https://www.invisorcpa.ca/",
      dates: "",
      active: true,
      description:
        "Designed a clean and user-friendly website for small business accounting services, making it easy for users to understand how bookkeeping and financial support can help them grow.",
      technologies: [
        
      ],
      links: [
        {
          type: "Website",
          href: "https://www.invisorcpa.ca/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/businessfacts.png",
      video:
        "",
    },
    {
      title: "Zyroll",
      href: "https://zyroll.ca/",
      dates: "",
      active: true,
      description:
        "Designed the ZyRoll website, which promotes our company’s payroll solutions for accountants, highlighting accurate processing and seamless management.",
      technologies: [
        
      ],
      links: [
        {
          type: "Website",
          href: "https://zyroll.ca/",
          icon: <Icons.globe className="size-3" />,
        },
        // {
        //   type: "Source",
        //   href: "https://github.com/magicuidesign/magicui",
        //   icon: <Icons.github className="size-3" />,
        // },
      ],
      image: "/zyroll.jpeg",
      video: "",
    },
    {
      title: "Invisor Learning",
      href: "https://invisor.in/",
      dates: "",
      active: true,
      description:
        "Designed the Invisor.in website as a learning platform offering CMA, EA, and FCP courses, making it easy for students to explore programs and start their learning journey.",
      technologies: [
        
      ],
      links: [
        {
          type: "Website",
          href: "https://invisor.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/invisorlearning.png",
      video: "",
    },
       {
      title: "Invisor Staffing",
      href: "https://invisorstaffing.com/",
      dates: "",
      active: true,
      description:
        "Designed the Invisor Staffing website, highlighting our role as the world’s first Zoho staffing service provider and presenting our global solutions for Finance, IT, and HR.",
      technologies: [
        // "Next.js",
        // "Typescript",
        // "PostgreSQL",
        // "Prisma",
        // "TailwindCSS",
        // "Shadcn UI",
        // "Magic UI",
        // "Stripe",
        // "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://invisorstaffing.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/invisorstaffing.jpeg",
      video: "",
    },
    {
      title: "Fintalent",
      href: "https://fintalent.in/",
      dates: "",
      active: true,
      description:
        "Designed the Fintalent.in website to simplify hiring and job searching—offering instant access to experienced professionals and a seamless journey for both candidates and recruiters.",
      technologies: [
       
      ],
      links: [
        {
          type: "Website",
          href: "https://fintalent.in/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fintalent.png",
      video:
        "",
    },
    {
      title: "Invisor CMA",
      href: "https://engagefinpro.com/newcma/",
      dates: "",
      active: true,
      description:
        "Designed the Invisor CMA Online website to help aspiring finance professionals access focused learning, expert mentorship, and a simpler path to CMA success.",
      technologies: [
        
      ],
      links: [
        {
          type: "Website",
          href: "https://engagefinpro.com/newcma/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/cmaonline.png",
      video:
        "",
    },
  ],
  hackathons: [
    // {
    //   title: "HackMining",
    //   dates: "May 12th - 14th, 2017",
    //   location: "Toronto, Ontario",
    //   description: "Developed neural network to optimize a mining process",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
    //   links: [],
    // },
    // {
    //   title: "Waterloo Equithon",
    //   dates: "May 5th - 7th, 2017",
    //   location: "Waterloo, Ontario",
    //   description:
    //     "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
    //   image:
    //     "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
    //   links: [
    //     {
    //       title: "Devpost",
    //       icon: <Icons.globe className="h-4 w-4" />,
    //       href: "https://devpost.com/software/pocketdoc-react-native",
    //     },
    //     {
    //       title: "YouTube",
    //       icon: <Icons.youtube className="h-4 w-4" />,
    //       href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
    //     },
    //     {
    //       title: "Source",
    //       icon: <Icons.github className="h-4 w-4" />,
    //       href: "https://github.com/dillionverma/pocketdoc-react-native",
    //     },
    //   ],
    // },
  ],
} as const;
