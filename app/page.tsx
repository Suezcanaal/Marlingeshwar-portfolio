"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaTools,
  FaLaptopCode,
  FaProjectDiagram,
  FaTrophy,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaPhone,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCode,
  FaDownload,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import { portfolioData } from "../data/portfolioData";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode !== null) {
      setDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, [darkMode, mounted]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setNavOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home', icon: FaHome },
    { id: 'about', label: 'About', icon: FaUser },
    { id: 'education', label: 'Education', icon: FaGraduationCap },
    { id: 'experience', label: 'Experience', icon: FaBriefcase },
    { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
    { id: 'skills', label: 'Skills', icon: FaTools },
    { id: 'certifications', label: 'Certifications', icon: FaCertificate },
    { id: 'competitions', label: 'Competitions', icon: FaTrophy },
    { id: 'achievements', label: 'Achievements', icon: FaTrophy },
    { id: 'connect', label: 'Connect', icon: FaCode },
  ];

  if (!mounted) {
    return null;
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white font-sans transition-colors duration-300">
        <Head>
          <title>{portfolioData.name} | Portfolio</title>
        </Head>

        {/* Navigation Toggle Button */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          className="fixed top-6 left-6 z-50 p-3 bg-gray-200 dark:bg-gray-700 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 lg:hidden"
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Side Navigation */}
        <nav className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-300 z-40 ${navOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
          <div className="p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Navigation</h3>
            <ul className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="w-full flex items-center gap-3 p-3 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                    >
                      <Icon className="text-blue-600 dark:text-blue-400" />
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>

        {/* Overlay */}
        {navOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={() => setNavOpen(false)}
          ></div>
        )}

        {/* Main Content */}
        <div className="lg:ml-64">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="fixed top-6 right-6 z-50 p-4 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? (
              <FaSun className="text-yellow-500 text-xl group-hover:rotate-180 transition-transform duration-300" />
            ) : (
              <FaMoon className="text-gray-700 text-xl group-hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          {/* ===== Header Section ===== */}
          <header id="home" className="bg-blue-600 dark:bg-slate-800 text-white py-16 shadow-lg text-center">
            <div className="mb-6">
              <img
                src={portfolioData.profileImage}
                alt={portfolioData.name}
                className="w-32 h-32 rounded-full mx-auto border-4 border-white shadow-lg object-cover"
              />
            </div>
            <h1 className="text-6xl font-bold mb-4">{portfolioData.name}</h1>
            <p className="text-xl mb-2">{portfolioData.education.degree}</p>
            <p className="text-lg mt-2 opacity-90">
              Computer Science undergraduate (2026) aspiring Software Developer
            </p>

            <div className="flex justify-center mt-8 flex-wrap gap-6 text-lg">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <FaEnvelope className="mr-2" /> Email
              </a>
              <a
                href={portfolioData.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <FaDownload className="mr-2" /> Resume
              </a>
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="flex items-center hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <FaPhone className="mr-2" /> Phone
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <FaLinkedin className="mr-2" /> LinkedIn
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <FaGithub className="mr-2" /> GitHub
              </a>
              <a
                href={portfolioData.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <SiLeetcode className="mr-2" /> LeetCode
              </a>
              <a
                href={portfolioData.contact.codechef}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-blue-200 transition-all duration-300 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm"
              >
                <SiCodechef className="mr-2" /> CodeChef
              </a>
            </div>
          </header>

          {/* ===== About Section ===== */}
          <section id="about" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <FaLaptopCode className="mr-3" /> About
            </h2>
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
              <p className="leading-relaxed text-gray-700 dark:text-gray-200 text-lg">
                Computer Science undergraduate (2026) aspiring Software Developer with a strong foundation in C/C++, 
                Data Structures and Algorithms. Hands-on experience in Object-Oriented Programming, Software Development 
                Life Cycle (SDLC), Linux environments, and version control using Git. Actively seeking software engineering 
                roles with opportunities to build scalable and efficient systems.
              </p>
            </div>
          </section>

          {/* ===== Education Section ===== */}
          <section id="education" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <FaGraduationCap className="mr-3" /> Education
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{portfolioData.education.degree}</h3>
                <p className="text-gray-600 dark:text-gray-300">{portfolioData.education.institution}</p>
                <p className="text-gray-600 dark:text-gray-300">{portfolioData.education.years}</p>
                <p className="text-blue-600 dark:text-blue-400 mt-3 font-medium">Current CGPA: {portfolioData.education.cgpa}</p>
              </div>
              {portfolioData.education.additional.map((edu, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{edu.level}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{edu.institution}</p>
                  <p className="text-gray-600 dark:text-gray-300">{edu.year}</p>
                  <p className="text-blue-600 dark:text-blue-400 mt-2 font-medium">{edu.score}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Experience Section ===== */}
          <section id="experience" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <FaBriefcase className="mr-3" /> Professional Experience
            </h2>
            <div className="space-y-8">
              {portfolioData.experience.map((exp, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.title}</h3>
                  <p className="text-blue-600 dark:text-blue-400">{exp.company}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{exp.duration}</p>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-200 space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Projects Section ===== */}
          <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <FaProjectDiagram className="mr-3" /> Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.projects.map((project, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">{project.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">{project.technologies}</p>
                  <p className="text-gray-700 dark:text-gray-200 mb-4">{project.summary}</p>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1 text-sm mb-4">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                    >
                      <FaGithub />
                      GitHub
                    </a>
                    {project.website && (
                      <a
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Skills Section ===== */}
          <section id="skills" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <FaTools className="mr-3" /> Skills
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Programming Languages</h3>
                <p className="text-gray-700 dark:text-gray-200">{portfolioData.skills.languages}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Technologies & Frameworks</h3>
                <p className="text-gray-700 dark:text-gray-200">{portfolioData.skills.techFrameworks}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Systems & Fundamentals</h3>
                <p className="text-gray-700 dark:text-gray-200">{portfolioData.skills.systemsConcepts}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Coursework</h3>
                <p className="text-gray-700 dark:text-gray-200">{portfolioData.skills.coursework}</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Soft Skills</h3>
                <p className="text-gray-700 dark:text-gray-200">{portfolioData.skills.softSkills}</p>
              </div>
            </div>
          </section>

          {/* ===== Certifications Section ===== */}
          <section id="certifications" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <FaCertificate className="mr-3" /> Certifications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{cert.name}</h3>
                      {cert.date && <p className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</p>}
                    </div>
                  </div>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-all duration-300"
                  >
                    View Certificate
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Competitions Section ===== */}
          <section id="competitions" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <FaTrophy className="mr-3" /> Competitions and Hackathons
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {portfolioData.competitions.map((comp, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-semibold text-gray-900 dark:text-white text-xl">{comp.title}</h3>
                    <span className="text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">{comp.date}</span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">{comp.location}</p>
                  <p className="text-gray-700 dark:text-gray-200">{comp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Achievements & Extracurricular Section ===== */}
          <section id="achievements" className="max-w-6xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 flex items-center">
              <FaTrophy className="mr-3" /> Achievements & Extracurricular
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.extracurricular.map((activity, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-3">{activity.title}</h3>
                  <p className="text-gray-700 dark:text-gray-200">{activity.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ===== Connect With Me Section ===== */}
          <section id="connect" className="max-w-4xl mx-auto px-6 py-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-8 text-center">Connect With Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 text-center">
              Let's collaborate on exciting projects or discuss opportunities
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <FaEnvelope className="text-3xl text-blue-600 dark:text-blue-400 mb-3" />
                <span className="font-medium text-gray-900 dark:text-white">Email</span>
              </a>
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <FaLinkedin className="text-3xl text-blue-600 dark:text-blue-400 mb-3" />
                <span className="font-medium text-gray-900 dark:text-white">LinkedIn</span>
              </a>
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <FaGithub className="text-3xl text-blue-600 dark:text-blue-400 mb-3" />
                <span className="font-medium text-gray-900 dark:text-white">GitHub</span>
              </a>
              <a
                href={portfolioData.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <SiLeetcode className="text-3xl text-blue-600 dark:text-blue-400 mb-3" />
                <span className="font-medium text-gray-900 dark:text-white">LeetCode</span>
              </a>
            </div>
          </section>

          {/* ===== Footer ===== */}
          <footer className="bg-gray-100 dark:bg-gray-800 text-center py-8 text-gray-600 dark:text-gray-300 text-sm border-t border-gray-200 dark:border-gray-700">
            © {new Date().getFullYear()} {portfolioData.name}. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
}