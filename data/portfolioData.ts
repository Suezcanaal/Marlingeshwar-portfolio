// data/portfolioData.ts

export const portfolioData = {
  name: "Maralingeshwar Kattimani",
  profileImage: "https://assets.leetcode.com/users/marlingeshwar260/avatar_1758437168.png",
  resume: "https://drive.google.com/file/d/19tyV-dgAYEL3dAIDy46oaRIpvRTvmmf_/view?usp=sharing",
  contact: {
    phone: "+91 636323572",
    email: "marlingeshwarkattimani@gmail.com",
    linkedin: "https://linkedin.com/in/marlingeshwar26",
    github: "https://github.com/Suezcanaal",
    leetcode: "https://leetcode.com/u/marlingeshwar260",
    codechef: "https://www.codechef.com/users/marlingeshwar",
  },
  education: {
    institution: "Ramaiah Institute of Technology, Bengaluru",
    years: "2022 – 2026",
    degree: "B.E. in Computer Science and Engineering",
    cgpa: "8.5",
    location: "Bengaluru, Karnataka",
    additional: [
      {
        level: "Class 12 (PCM)",
        institution: "Gurukul PU College, Kalaburgi",
        year: "2021",
        score: "95%",
      },
      {
        level: "Class 10",
        institution: "St Mary School, Kalaburgi",
        year: "2019",
        score: "90%",
      },
    ],
  },
  experience: [
    {
      title: "SDE Intern",
      company: "BOCK AI, Bengaluru (Onsite)",
      duration: "Jan 2025 – Mar 2025",
      description: [
        "Worked on a healthcare AI chatbot using TensorFlow-based LLMs and Hugging Face models",
        "Developed and tested backend components in Linux-based environments",
        "Used Git/GitHub workflows and CI/CD pipelines for automated deployment",
        "Debugged core system components and optimized performance bottlenecks",
        "Containerized and deployed applications using Docker on AWS and GCP",
      ],
    },
  ],
  projects: [
    {
      title: "Secure Proctoring & Adaptive Interview System (PoC)",
      link: "https://github.com/Suezcanaal/ethicra-NUC",
      website: "https://ethicra.onrender.com/",
      technologies: "Django, Next.js, FFmpeg, OpenCV, DeepFace, VAPI LLM",
      date: "2024",
      summary: "Designed a cloud-native secure proctoring and interview evaluation system with real-time video processing and behavioral analysis.",
      description: [
        "Designed a cloud-native secure proctoring and interview evaluation system",
        "Built using Django and Next.js with FFmpeg and OpenCV for real-time video processing",
        "Integrated DeepFace for emotion and behavioral analysis during interviews",
        "Used VAPI LLM for adaptive interview flow and evaluation logic",
        "Stored and managed behavioral and emotion analytics efficiently for scalable assessments",
        "Developed as a Proof of Concept (PoC) focusing on scalability, security, and performance",
      ],
    },
    {
      title: "Memory Management Simulator",
      link: "#",
      technologies: "C++, Data Structures, Operating Systems",
      date: "Sep 2025",
      summary: "Implemented FIFO, LRU, and Optimal Page Replacement algorithms with data structures to simulate page faults, swap-in, and swap-out operations, strengthening understanding of operating system memory management concepts.",
      description: [
        "Implemented FIFO, LRU, and Optimal Page Replacement algorithms",
        "Designed data structures to simulate page faults, swap-in, and swap-out operations",
        "Strengthened understanding of operating system memory management concepts",
      ],
    },
    {
      title: "Facial Recognition-Based Photo Sorter",
      link: "#",
      technologies: "Django, HTML, CSS, JavaScript, Face Recognition",
      date: "Jan 2024 – Feb 2024",
      summary: "Developed a web application using Django for facial recognition and automatic photo organization with face embeddings to compare, match, and cluster similar faces with high accuracy.",
      description: [
        "Developed a web application using Django for facial recognition and automatic photo organization",
        "Used face embeddings to compare, match, and cluster similar faces with high accuracy",
        "Built an interactive dashboard using HTML, CSS, and JavaScript for photo upload, filtering, and display",
      ],
    },
  ],
  skills: {
    languages: "C, C++, Java, Object-Oriented Programming",
    techFrameworks: "HTML5, CSS3, JavaScript, React.js, Git, GitHub, AWS, Docker, VS Code, Cursor, Jira",
    systemsConcepts: "Linux, Operating Systems, Data Structures, Algorithms, Computer Networks, REST APIs",
    coursework: "DBMS, MySQL, SDLC, Agile/Scrum Methodologies, Cybersecurity",
    softSkills: "Problem-solving, Presentation, Teamwork, Accountability, Adaptability",
  },
  certifications: [
    {
      name: "Python – Meta",
      link: "https://coursera.org/share/cfcb212779b4f41d3b245ca431d54272",
      date: "Mar 2025",
    },
    {
      name: "AWS Academy Graduate – Amazon Web Services",
      link: "https://www.credly.com/badges/9e005c4f-2a9b-4227-a6c3-a5e71c5316b2/public_url",
      date: "May 2025",
    },
    {
      name: "Google Cybersecurity Certificate – Google",
      link: "https://www.credly.com/badges/0b452841-0ce8-4138-a501-0769ae5a908b/public_url",
      date: "May 2025",
    },
  ],
  competitions: [
    {
      title: "RBIH Codeathon",
      date: "November 2024",
      location: "Bengaluru, Karnataka",
      description: "Participated in a 24-hour coding hackathon organized by IIIT Bangalore in collaboration with RBIH. Worked on developing an AI-driven solution to evaluate the creditworthiness of unbanked nano-entrepreneurs in developing economies.",
    },
    {
      title: "BuildFastWithAI Hackathon",
      date: "August 2024",
      location: "Online",
      description: "Participated in a student hackathon focused on AI innovation. Developed NeuroLearn, an AI-powered platform that personalizes learning experiences for neurodiverse children using Generative AI.",
    },
  ],
  extracurricular: [
    {
      title: "Winner (Rank 1) – KIMO AI Tech Quiz, KIMO's-Edge 24",
      description: "Achieved first place in KIMO AI Tech Quiz competition in August 2024.",
    },
    {
      title: "Data Structures & Algorithms",
      description: "Solved 450+ Data Structures and Algorithms problems across LeetCode, CodeChef, and GeeksforGeeks.",
    },
    {
      title: "Digital Literacy Volunteer – Yuva Foundation",
      description: "Recognized by Yuva Foundation for completing 90 days of digital literacy volunteering for government school students.",
    },
  ],
};
