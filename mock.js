// Mock data for contact form submissions
// This will be replaced with backend API integration

export const mockContactSubmission = async (formData) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock successful response
  return {
    success: true,
    message: "Thank you for your message. I'll get back to you soon!",
    data: formData
  };
};

// Portfolio data that could be dynamically loaded
export const portfolioData = {
  personalInfo: {
    name: "Raghav Arora",
    email: "ar.raghav07@outlook.com",
    linkedin: "https://www.linkedin.com/in/raghav-4-r7r4",
    tagline: "Business Analytics | AI | SEO | Global Business | Supply Chain | Social Media Marketer | Creative Designer",
    summary: "A passionate professional exploring the intersection of international business, logistics, and AI, with a creative approach to design and problem-solving."
  },
  experience: [
    {
      id: 1,
      title: "Social Media Marketing Specialist",
      company: "SOAK & STEP",
      period: "July 2025 - Present",
      responsibilities: [
        "Manage Soak & Step's social media presence and content strategy",
        "Use AI tools to generate and edit brand images/videos",
        "Drive engagement through trend-driven, creative marketing"
      ]
    },
    {
      id: 2,
      title: "NGO Intern",
      company: "Missionaries of Charity",
      period: "December 2024",
      responsibilities: [
        "Contributed 30+ hours supporting elderly, disabled, and handicapped individuals",
        "Developed empathy and understanding through direct community engagement"
      ]
    },
    {
      id: 3,
      title: "Sales and Marketing Intern",
      company: "SBI Life Insurance Co. Ltd.",
      period: "March 2024 - September 2024",
      responsibilities: [
        "Explained insurance products and policies to prospective customers",
        "Supported sales initiatives and customer outreach campaigns remotely"
      ]
    },
    {
      id: 4,
      title: "Manager of Operations",
      company: "Himvikas Industries",
      period: "November 2023 - January 2024",
      responsibilities: [
        "Gained experience in marketing, operations, and project management",
        "Enhanced skills in market research, data analysis, and customer relationship management"
      ]
    }
  ],
  skills: {
    topSkills: ["Social Media Marketing", "International Logistics", "Operations Management"],
    certifications: [
      "2 Day AI Mastermind - Outskill",
      "International Logistics and Supply Chain",
      "Introduction to Artificial Intelligence",
      "Mandarin Chinese: Chinese for Beginners"
    ]
  },
  education: [
    {
      id: 1,
      institution: "Christ University, Bangalore",
      degree: "Bachelor of Business Administration - BBA",
      field: "Strategy And Business Analytics",
      period: "2024 - 2027"
    },
    {
      id: 2,
      institution: "St. Mary's Covent Sr. Secondary School",
      degree: "High School Graduate",
      field: "Business/Commerce",
      period: "2021 - 2023"
    }
  ]
};