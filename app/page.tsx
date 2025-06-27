"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Smartphone,
  Globe,
  User,
  Briefcase,
  GraduationCap,
  Languages,
  Send,
  CheckCircle,
  Award,
  TrendingUp,
  Users,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function Portfolio() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const skills = {
    languages: ["Python", "JavaScript", "Dart", "HTML5", "CSS3", "C++"],
    frameworks: ["React.js", "Next.js", "Django", "Flutter", "Django REST Framework"],
    tools: ["Git", "GitHub", "Docker", "Firebase", "AWS", "MySQL", "PostgreSQL"],
    styling: ["Tailwind CSS", "Bootstrap", "Material-UI", "Styled Components"],
    other: ["REST APIs", "GraphQL", "AI/ML Integration", "Agile/Scrum", "CI/CD", "Unit Testing"],
  }

  const achievements = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "15+ Projects Delivered",
      description: "Successfully completed web and mobile applications",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Cross-functional Collaboration",
      description: "Worked with design and product teams",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "1.5+ Years Experience",
      description: "Professional development experience",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Modern Tech Stack",
      description: "Expertise in cutting-edge technologies",
    },
  ]

  const projects = [
    {
      title: "Enterprise Task Management System",
      description:
        "Comprehensive productivity solution featuring React.js frontend with Django REST API backend. Implemented advanced user authentication, role-based access control, task filtering, and real-time notifications with responsive Bootstrap design.",
      technologies: ["React.js", "Django", "Bootstrap", "REST API", "PostgreSQL"],
      type: "Web Application",
      impact: "Improved team productivity by 40%",
    },
    {
      title: "Content Management Platform",
      description:
        "Full-stack blog platform engineered with React.js and Django architecture. Features include advanced rich-text editing, comment moderation system, SEO optimization, and responsive design using Tailwind CSS.",
      technologies: ["React.js", "Django", "Tailwind CSS", "Rich Text Editor", "SEO"],
      type: "Web Application",
      impact: "Supports 1000+ daily active users",
    },
    {
      title: "E-Commerce Bookstore Solution",
      description:
        "Scalable eCommerce platform built with React.js frontend and Django backend with MySQL database. Implemented secure payment integration, inventory management, shopping cart functionality, and order processing system.",
      technologies: ["React.js", "Django", "MySQL", "Payment Gateway", "Security"],
      type: "Web Application",
      impact: "Processed 500+ transactions",
    },
    {
      title: "Cross-Platform Task Management App",
      description:
        "Native mobile application developed with React Native and Django REST API. Features include biometric authentication, push notifications, offline synchronization, and Material Design components.",
      technologies: ["React Native", "Django", "Push Notifications", "Offline Sync"],
      type: "Mobile Application",
      impact: "4.8/5 user rating",
    },
    {
      title: "Mobile Content Publishing App",
      description:
        "React Native application with Django backend for content creation and publishing. Implemented real-time collaboration, media upload optimization, and cross-platform synchronization with NativeWind styling.",
      technologies: ["React Native", "Django", "NativeWind", "Real-time Sync"],
      type: "Mobile Application",
      impact: "50% faster content creation",
    },
    {
      title: "Professional Portfolio Mobile App",
      description:
        "Flutter-based portfolio application with Django API integration. Features include dynamic project gallery, resume download functionality, social media integration, and offline caching with AsyncStorage.",
      technologies: ["Flutter", "Django", "AsyncStorage", "Offline Support"],
      type: "Mobile Application",
      impact: "Enhanced professional presence",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">MU</span>
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Muhammad Usman</h1>
                <p className="text-sm text-gray-600">Full Stack Developer</p>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                About
              </a>
              <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Expertise
              </a>
              <a href="#experience" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Experience
              </a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Portfolio
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Muhammad
                    <span className="block text-blue-600">Usman</span>
                  </h1>
                  <h2 className="text-2xl lg:text-3xl text-gray-700 font-light">Senior Full Stack Developer</h2>
                  <h3 className="text-xl text-gray-600">Web & Mobile Application Specialist</h3>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <MapPin className="w-5 h-5" />
                  <span className="font-medium">Valencia Town, Lahore, Pakistan</span>
                </div>
              </div>

              <div className="prose prose-lg text-gray-700 leading-relaxed">
                <p>
                  Experienced Full Stack Developer specializing in scalable web applications and cross-platform mobile
                  solutions. Proficient in modern JavaScript frameworks including React.js and Next.js, with extensive
                  backend expertise in Django and RESTful API development.
                </p>
                <p>
                  Demonstrated success in delivering enterprise-grade applications with clean, maintainable code and
                  optimal performance. Passionate about leveraging emerging technologies including AI integration to
                  create innovative user experiences and drive business value.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="https://www.linkedin.com/in/m-usman-a989b233a" target="_blank">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </Button>
                </Link>
                <Link href="https://github.com/usmankhan40691" target="_blank">
                  <Button variant="outline" className="border-gray-300 bg-transparent">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Portfolio
                  </Button>
                </Link>
                <Button variant="outline" className="border-gray-300 bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-2xl flex items-center justify-center">
                  <User className="w-32 h-32 text-white opacity-90" />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white rounded-xl shadow-lg flex items-center justify-center">
                  <Code className="w-12 h-12 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-blue-600">{achievement.icon}</div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Technical Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive skill set in modern web and mobile development technologies, with a focus on scalable
              architecture and best practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <Code className="w-6 h-6 mr-3 text-blue-600" />
                  Programming Languages
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.languages.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <Globe className="w-6 h-6 mr-3 text-green-600" />
                  Frameworks & Libraries
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-green-50 text-green-700 hover:bg-green-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <Database className="w-6 h-6 mr-3 text-purple-600" />
                  Tools & Platforms
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <Smartphone className="w-6 h-6 mr-3 text-orange-600" />
                  UI/UX Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.styling.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-orange-50 text-orange-700 hover:bg-orange-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="md:col-span-2 border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center text-lg">
                  <ExternalLink className="w-6 h-6 mr-3 text-red-600" />
                  Additional Competencies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.other.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-red-50 text-red-700 hover:bg-red-100">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-blue-900 text-xl">Web Development Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 leading-relaxed">
                  Architecting responsive, high-performance web applications using React.js ecosystem and Django
                  backend. Expertise in RESTful API design, database optimization, and modern deployment practices.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-green-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-green-900 text-xl">Mobile Development Mastery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-800 leading-relaxed">
                  Developing cross-platform mobile applications with Flutter and React Native. Focus on native
                  performance, intuitive user interfaces, and seamless backend integration.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional Experience</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Delivering innovative solutions and driving technical excellence in fast-paced development environments.
            </p>
          </div>

          <Card className="max-w-5xl mx-auto border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <CardTitle className="flex items-center text-2xl text-gray-900">
                    <Briefcase className="w-6 h-6 mr-3 text-blue-600" />
                    Senior Full Stack Developer & Mobile Application Specialist
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 font-medium">
                    Tech Innovations • Lahore, Pakistan
                  </CardDescription>
                </div>
                <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-medium">August 2023 - Present</Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-8 pb-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg mb-4">Core Responsibilities & Achievements:</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                        <span>
                          Architected and developed responsive web applications using React.js with advanced state
                          management and component optimization
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                        <span>
                          Engineered cross-platform mobile applications using Flutter and React Native with focus on
                          performance and user experience
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                        <span>
                          Designed and implemented scalable Django REST APIs with comprehensive security measures and
                          documentation
                        </span>
                      </li>
                    </ul>
                    <ul className="space-y-4 text-gray-700">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                        <span>
                          Established Git workflows and CI/CD pipelines, improving team collaboration and deployment
                          efficiency by 60%
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                        <span>
                          Integrated AI/ML capabilities including recommendation systems and intelligent chatbots to
                          enhance user engagement
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2.5 mr-4 flex-shrink-0"></div>
                        <span>
                          Mentored junior developers and led technical discussions on architecture decisions and best
                          practices
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-gray-900 text-lg mb-3">Technical Impact:</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-blue-600">15+</div>
                      <div className="text-sm text-gray-600">Projects Delivered</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">40%</div>
                      <div className="text-sm text-gray-600">Performance Improvement</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-purple-600">99.9%</div>
                      <div className="text-sm text-gray-600">Application Uptime</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Portfolio Showcase</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A curated selection of enterprise-grade applications demonstrating technical expertise and innovative
              problem-solving across web and mobile platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-3">
                    <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    <Badge
                      variant={project.type === "Web Application" ? "default" : "secondary"}
                      className={project.type === "Web Application" ? "bg-blue-600" : "bg-gray-600"}
                    >
                      {project.type === "Web Application" ? (
                        <Globe className="w-3 h-3 mr-1" />
                      ) : (
                        <Smartphone className="w-3 h-3 mr-1" />
                      )}
                      {project.type === "Web Application" ? "Web" : "Mobile"}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full inline-block">
                    {project.impact}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">{project.description}</p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-2">Technologies</h5>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs border-gray-300 text-gray-600">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Languages Section */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 mr-4 text-blue-600" />
                Academic Background
              </h2>
              <Card className="border-0 shadow-sm">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                  <CardTitle className="text-xl text-gray-900">
                    Bachelor of Science in Information Engineering Technology
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-700 font-medium">
                    University of Lahore, Pakistan
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600 font-medium">Duration</p>
                        <p className="text-gray-900">September 2022 - Present</p>
                      </div>
                      <div>
                        <p className="text-gray-600 font-medium">Current Status</p>
                        <p className="text-gray-900">6th Semester</p>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="font-semibold text-gray-900 mb-3">Specialized Coursework:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        <Badge variant="outline" className="justify-center py-2">
                          Mobile App Development
                        </Badge>
                        <Badge variant="outline" className="justify-center py-2">
                          Advanced Backend Systems
                        </Badge>
                        <Badge variant="outline" className="justify-center py-2">
                          Advanced Frontend Technologies
                        </Badge>
                        <Badge variant="outline" className="justify-center py-2">
                          Artificial Intelligence Fundamentals
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                <Languages className="w-8 h-8 mr-4 text-green-600" />
                Language Proficiency
              </h2>
              <div className="space-y-4">
                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-gray-900">Pashto</span>
                        <p className="text-sm text-gray-600">Native Language</p>
                      </div>
                      <Badge className="bg-green-600">Native / Fluent</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-gray-900">Urdu</span>
                        <p className="text-sm text-gray-600">National Language</p>
                      </div>
                      <Badge className="bg-blue-600">Fluent</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-sm">
                  <CardContent className="pt-6">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="font-semibold text-gray-900">English</span>
                        <p className="text-sm text-gray-600">Business & Technical</p>
                      </div>
                      <Badge variant="secondary" className="bg-gray-600 text-white">
                        Professional Working Proficiency
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Professional Contact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your next project or explore collaboration opportunities. Let's build something
              exceptional together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">+92 334 1122566</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">musmankhan759@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">Valencia Town, Lahore, Pakistan</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Professional Networks</h3>
                <div className="flex space-x-4">
                  <Link href="https://www.linkedin.com/in/m-usman-a989b233a" target="_blank">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      <Linkedin className="w-5 h-5 mr-2" />
                      LinkedIn
                    </Button>
                  </Link>
                  <Link href="https://github.com/usmankhan40691" target="_blank">
                    <Button variant="outline" size="lg" className="border-gray-300 bg-transparent">
                      <Github className="w-5 h-5 mr-2" />
                      GitHub
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-gray-100">
                <CardTitle className="text-xl">Send a Professional Inquiry</CardTitle>
                <CardDescription>I'll respond to your message within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Message Sent Successfully</h3>
                    <p className="text-gray-600 leading-relaxed">
                      Thank you for your inquiry. I'll review your message and respond within 24 hours.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Full Name *</label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your full name"
                          className="border-gray-300"
                        />
                      </div>
                      <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Email Address *</label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your.email@company.com"
                          className="border-gray-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Subject *</label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project inquiry, collaboration opportunity, etc."
                        className="border-gray-300"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold text-gray-700 mb-2 block">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Please provide details about your project requirements, timeline, and any specific technologies you'd like to discuss..."
                        rows={6}
                        className="border-gray-300"
                      />
                    </div>
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 py-3"
                      size="lg"
                    >
                      {isSubmitting ? (
                        "Sending Message..."
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Professional Inquiry
                        </>
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">MU</span>
              </div>
              <div className="text-left">
                <h3 className="text-xl font-semibold">Muhammad Usman</h3>
                <p className="text-gray-300 text-sm">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Delivering innovative web and mobile solutions with cutting-edge technologies. Committed to excellence in
              every project.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Link
                href="https://www.linkedin.com/in/m-usman-a989b233a"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/usmankhan40691"
                target="_blank"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link href="mailto:musmankhan759@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Muhammad Usman. All rights reserved. |
                <span className="ml-1">Crafted with precision and passion</span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
