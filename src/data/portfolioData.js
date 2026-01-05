const portfolioData = {
  Bio: "Bonna Akter, MERN Stack Developer.",
  devServerPort: 5173,
  About: "I am a passionate MERN Stack Developer who loves transforming ideas into real, user-friendly digital experiences. Skilled in MongoDB, Express, React, and Node.js. Completed graduation from Pallabi Government College.",
  
  Skills: {
    Frontend: ["React", "Next.js", "Tailwind", "Framer Motion"],
    Backend: ["Node", "Express", "MongoDB", "Firebase", "Stripe API"],
    Tools: ["Git", "REST APIs", "Nodemailer"]
  },

  Stats: {
    completedProjects: "12+",
    technologiesUsed: "15+",
    learningHours: "500+"
  },

  Services: [
    { title: "Website Development", icon: "💻" },
    { title: "App Development", icon: "📱" },
    { title: "MERN Stack Solutions", icon: "⚙️" }
  ],

  Projects: [
    {
      title: "Garment Track",
      description: "A professional role-based system for Buyers, Managers, and Admins. Features Stripe payment integration and real-time production tracking for garment manufacturing.",
      image: "https://i.ibb.co.com/XH5G26C/garment-Track.png",
      live: "https://garment-track.web.app/",
      source: "https://github.com/mehers-bonna/garment-track-client.git",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "Firebase"],
      features: [
        "Role-based Access Control (RBAC)",
        "Stripe Payment Gateway Integration",
        "Real-time Production Status Tracking",
        "Inventory Management Dashboard"
      ]
    },
    {
      title: "Travel Ease",
      description: "A complete full-stack travel booking application. Users can explore destinations and manage their travel plans with secure authentication.",
      image: "https://i.ibb.co.com/pj6cNfzj/travel-Ease-client.png",
      live: "https://visionary-babka-96d985.netlify.app/",
      source: "https://github.com/mehers-bonna/travel-ease-client.git",
      techStack: ["React", "Firebase Auth", "Express", "MongoDB", "Tailwind CSS"],
      features: [
        "Firebase Social Authentication",
        "Dynamic Destination Listings",
        "User Specific Booking History",
        "Fully Responsive UI Design"
      ]
    },
    {
      title: "Care Nest",
      description: "A specialized Next.js home-care platform providing a bridge between caregivers and those in need. Built with modern authentication and automated email systems.",
      image: "https://i.ibb.co.com/8498vZDt/care-nest.png",
      live: "https://care-nest-six.vercel.app/",
      source: "https://github.com/mehers-bonna/care-nest.git",
      techStack: ["Next.js", "Next-Auth", "Nodemailer", "MongoDB", "Tailwind"],
      features: [
        "Secure Auth with Next-Auth",
        "Automated Email Notifications",
        "Caregiver Marketplace Listing",
        "Advanced Search and Filters"
      ]
    }
  ],

  Contact: {
    Email: "mehersbonna17131713@gmail.com",
    Phone: "+8801324534240", // Updated with your WhatsApp number
    Location: "Dhaka, Bangladesh",
    LinkedIn: "https://www.linkedin.com/in/bonna-akterr/",
    GitHub: "https://github.com/mehers-bonna"
  }
};

export default portfolioData;