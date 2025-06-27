import { NextResponse } from "next/server"

const projects = [
  {
    id: 1,
    title: "Task Manager Web App",
    description:
      "A productivity app to manage tasks with a React.js frontend and Django REST API backend. Includes user login, task filtering, and responsive Bootstrap design.",
    technologies: ["React.js", "Django", "Bootstrap", "REST API"],
    type: "Web Application",
    status: "Completed",
    github: "https://github.com/usmankhan40691/task-manager-web",
    demo: null,
  },
  {
    id: 2,
    title: "Blog Website",
    description:
      "A full stack blog platform built with React.js and Django. Supports posting, commenting, and rich-text editing. Styled using Tailwind CSS.",
    technologies: ["React.js", "Django", "Tailwind CSS", "Rich Text Editor"],
    type: "Web Application",
    status: "Completed",
    github: "https://github.com/usmankhan40691/blog-website",
    demo: null,
  },
  {
    id: 3,
    title: "Online Bookstore",
    description:
      "An eCommerce web app using React.js and Django with MySQL. Features product listings, user login, shopping cart, and checkout simulation.",
    technologies: ["React.js", "Django", "MySQL", "eCommerce"],
    type: "Web Application",
    status: "Completed",
    github: "https://github.com/usmankhan40691/online-bookstore",
    demo: null,
  },
  {
    id: 4,
    title: "Task Manager Mobile App",
    description:
      "Built with React Native and Django REST API. Includes user login, task filtering, push notifications, and UI with React Native Paper.",
    technologies: ["React Native", "Django", "Push Notifications", "React Native Paper"],
    type: "Mobile Application",
    status: "Completed",
    github: "https://github.com/usmankhan40691/task-manager-mobile",
    demo: null,
  },
  {
    id: 5,
    title: "Blog Mobile App",
    description:
      "Built with React Native and Django. Supports posting, commenting, and rich-text editing. Styled with NativeWind (Tailwind CSS).",
    technologies: ["React Native", "Django", "NativeWind", "Rich Text"],
    type: "Mobile Application",
    status: "Completed",
    github: "https://github.com/usmankhan40691/blog-mobile-app",
    demo: null,
  },
  {
    id: 6,
    title: "Personal Portfolio Mobile App",
    description:
      "Built with Flutter and Django. Includes a project gallery, resume download, and social media links. Styled with Styled Components, with offline support via AsyncStorage.",
    technologies: ["Flutter", "Django", "AsyncStorage", "Offline Support"],
    type: "Mobile Application",
    status: "Completed",
    github: "https://github.com/usmankhan40691/portfolio-mobile-app",
    demo: null,
  },
]

export async function GET() {
  try {
    return NextResponse.json({
      success: true,
      data: projects,
    })
  } catch (error) {
    console.error("Projects API error:", error)
    return NextResponse.json({ error: "Failed to fetch projects" }, { status: 500 })
  }
}
