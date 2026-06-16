/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ron Keter | Software Developer",
  description:
    "CS student at Hebrew University. Systems, computer vision, backend.",
  og: {
    title: "Ron Keter Portfolio",
    type: "website",
    url: "https://ronketer.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Ron Keter",
  logo_name: "RonKeter",
  nickname: "ronketer",
  subTitle:
    "3rd-year Computer Science student at The Hebrew University of Jerusalem. I build OS systems, CV pipelines, and backend APIs.",
  resumeLink: "",
  portfolio_repository: "https://github.com/ronketer/masterPortfolio",
  githubProfile: "https://github.com/ronketer",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ronketer",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ronketer/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:ron.j.keter@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Systems & Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing high-performance systems in C++ and Java with multi-threading, concurrency, and custom schedulers",
        "⚡ Building robust backend APIs and services using Node.js, Express, and PostgreSQL",
        "⚡ Designing clean architectures using design patterns, custom memory structures, and lock-free concurrency",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "logos:c-plusplus",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos:nodejs-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#FFFFFF",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "logos:react",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "logos:postgresql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos:javascript",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "logos:html-5",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "logos:css-3",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Computer Vision & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Reconstructing 3D trajectories and processing KITTI dataset frames using stereo visual SLAM",
        "⚡ Building image processing and panorama stitching pipelines with Lucas-Kanade optical flow and corner detection",
        "⚡ Recovering camera ego-motion and optimizing spatial estimation with AKAZE features and RANSAC outlier rejection",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "logos:opencv",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos:numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Containerizing services and configuring multi-stage Docker builds for local development and production",
        "⚡ Orchestrating deployments using Kubernetes (Minikube) manifests and local environments",
        "⚡ Automating testing, coverage verification, and deployments via GitHub Actions CI/CD pipelines",
        "⚡ Managing cloud infrastructure on Amazon Web Services (AWS)",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos:aws",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos:kubernetes",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "logos:github-actions",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "The Hebrew University of Jerusalem",
      subtitle: "B.Sc. in Computer Science",
      logo_path: "education.svg",
      alt_name: "Hebrew University of Jerusalem",
      duration: "Expected Graduation: September 2027",
      descriptions: [
        "⚡ 3rd-year Computer Science student.",
        "⚡ Focus on systems programming, concurrency, computer vision, and backend APIs.",
      ],
      website_link: "https://new.huji.ac.il/en",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "AWS Certified Cloud Practitioner",
      subtitle: "- Amazon Web Services",
      logo_path: "aws-certified-cloud-practitioner.png",
      certificate_link:
        "https://www.credly.com/badges/22f2122f-1936-40d5-834a-a5b0454a0a56/public_url",
      alt_name: "AWS Certified Cloud Practitioner badge",
      color_code: "#FF990022",
    },
    {
      title: "Building with the Claude API",
      subtitle: "- Anthropic",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "Anthropic",
      color_code: "#cc785c33",
    },
    {
      title: "Claude Code 101",
      subtitle: "- Anthropic",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "",
      alt_name: "Anthropic",
      color_code: "#cc785c33",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I am a CS student looking for SWE, systems, backend, and DevOps roles.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Waiter and Manager",
          company: "Pop-Up Restaurant",
          company_url: "",
          logo_path: "experience.svg",
          duration: "2020 - 2021",
          location: "Tel Aviv, Israel",
          description:
            "Managed floor operations and a small team during peak service, training new hires and resolving escalations in real time.",
          color: "#0879bf",
        },
        {
          title: "Legal Assistant",
          company: "Civic Trust",
          company_url: "",
          logo_path: "experience.svg",
          duration: "2016 - 2017",
          location: "Tel Aviv, Israel",
          description:
            "Drafted case documentation and coordinated client-attorney communications for an active caseload.",
          color: "#9b1578",
        },
        {
          title: "Logistics Coordinator",
          company: "IDF",
          company_url: "",
          logo_path: "experience.svg",
          duration: "2014 - 2015",
          location: "Israel",
          description:
            "Coordinated inventory and cross-unit logistics under strict operational constraints.",
          color: "#fc1f20",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Selected work spanning OS internals, computer vision, and full-stack applications.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ron_keter.jpeg",
    description:
      "I am a Computer Science student at Hebrew University. Feel free to reach out via email or connect with me on LinkedIn/GitHub!",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "",
    subtitle: "",
    locality: "",
    country: "",
    region: "",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "",
    location_map_link: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
