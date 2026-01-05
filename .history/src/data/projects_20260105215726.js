export const projects = [
    {
        id: 1,
        title: "Nano Garments Tracker",
        // তোমার প্রজেক্টের স্ক্রিনশট থাকলে এখানে লিংক দিও, এখন প্লেসহোল্ডার রাখলাম
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Garments+Tracker",
        description: "A comprehensive full-stack production management system designed to bridge the gap between Buyers, Production Managers, and Admins. It streamlines the garment manufacturing process from order placement to shipment tracking with secure Role-Based Access Control (RBAC).",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT", "TanStack Query"],
        liveLink: "https://garments-tracker-6d930.web.app/", // এখানে লাইভ লিংক বসাবে
        githubLink: "https://github.com/nahid-hasann/garments-tracker-client", // এখানে গিটহাব লিংক বসাবে
        challenges: "Implementing secure Role-Based Access Control (RBAC) was complex. Ensuring that Managers cannot access Admin routes and handling JWT token verification with Axios Interceptors for secure API calls required deep logic.",
        futurePlans: "I plan to add a real-time chat system between Buyers and Managers and implement an AI-based inventory prediction system."
    },
    {
        id: 2,
        title: "SocialEvents Platform",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=Social+Events",
        description: "A community-driven event management platform where users can create, join, and track social development events. It features separate dashboards for Users and Admins, allowing efficient management of community activities.",
        technologies: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "MongoDB", "Firebase Auth"],
        liveLink: "https://social-events-e4686.web.app",
        githubLink: "https://github.com/nahid-hasann/social-events",
        challenges: "Managing state for event participation (Join/Leave) and ensuring real-time updates on the dashboard was challenging. Also, implementing a secure 'Demo Login' system for testing purposes required careful handling.",
        futurePlans: "Integrating Google Maps to show event locations visually and adding an email notification system for event reminders."
    },
    {
        id: 3,
        title: "GameHub Portal",
        image: "https://placehold.co/600x400/1a1a1a/ffffff?text=GameHub",
        description: "A dynamic gaming portal where users can explore the latest games, view details, and manage their profiles. It features a modern dark-themed UI with smooth animations and secure authentication.",
        technologies: ["React", "Vite", "Tailwind CSS", "Firebase Auth", "Framer Motion"],
        liveLink: "https://your-gamehub-live-link.com", // এখানে লাইভ লিংক বসাবে
        githubLink: "https://github.com/programming-hero-web-course2/b12-a9-firesheild-nahid-hasann",
        challenges: "Implementing the 'Forgot Password' workflow via Firebase and ensuring protected routes redirected unauthenticated users smoothly were key challenges. Also, optimizing Framer Motion animations for mobile devices took some fine-tuning.",
        futurePlans: "Connecting with a real Gaming API (like RAWG) to fetch live game data and adding a user review and rating system."
    }
];