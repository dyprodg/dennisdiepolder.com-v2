'use client';

import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { FaAws, FaDocker, FaGithub, FaNodeJs, FaPython, FaDatabase, FaChartLine, FaTasks, FaUsers, FaCogs, FaTools, FaHandshake, FaBriefcase, FaReact, FaLinux } from "react-icons/fa";
import { SiTerraform, SiTypescript, SiGo, SiVercel, SiNextdotjs, SiAstro, SiJenkins, SiStripe, SiRedis, SiClerk } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      // Scroll Progress Bar
      gsap.to("#progress-bar", {
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
        scaleY: 1,
        transformOrigin: "top",
      });

      // Hero - no scroll animations, just show it

      // Profile Section
      gsap.from("#profile-section", {
        scrollTrigger: {
          trigger: "#profile-section",
          start: "top top",
          end: "bottom center",
          scrub: 1,
          pin: true,
        },
        opacity: 0,
      });

      gsap.from("#profile-header", {
        scrollTrigger: {
          trigger: "#profile-section",
          start: "top top",
          end: "center center",
          scrub: 1,
        },
        x: -1000,
        opacity: 0,
      });

      gsap.from("#profile-text", {
        scrollTrigger: {
          trigger: "#profile-section",
          start: "top top",
          end: "center center",
          scrub: 1,
        },
        y: 200,
        opacity: 0,
      });

      // Competencies Section
      gsap.from("#competencies-section", {
        scrollTrigger: {
          trigger: "#competencies-section",
          start: "top top",
          end: "bottom center",
          scrub: 1,
          pin: true,
        },
        opacity: 0,
      });

      gsap.from("#competencies-header", {
        scrollTrigger: {
          trigger: "#competencies-section",
          start: "top top",
          end: "30% center",
          scrub: 1,
        },
        y: -200,
        opacity: 0,
      });

      // Competency tags fly in from different directions
      const competencyTags = document.querySelectorAll('.competency-tag');
      competencyTags.forEach((tag, index) => {
        const angle = (index * 360) / competencyTags.length;
        const distance = 800;
        const x = Math.cos(angle * Math.PI / 180) * distance;
        const y = Math.sin(angle * Math.PI / 180) * distance;

        gsap.from(tag, {
          scrollTrigger: {
            trigger: "#competencies-section",
            start: "top top",
            end: "60% center",
            scrub: 1,
          },
          x: x,
          y: y,
          rotation: 720,
          opacity: 0,
        });
      });

      // Experience Section
      gsap.from("#experience-section", {
        scrollTrigger: {
          trigger: "#experience-section",
          start: "top top",
          end: "bottom center",
          scrub: 1,
          pin: true,
        },
        opacity: 0,
      });

      gsap.from("#experience-header", {
        scrollTrigger: {
          trigger: "#experience-section",
          start: "top top",
          end: "20% center",
          scrub: 1,
        },
        scale: 0,
        rotation: -360,
        opacity: 0,
      });

      // Experience items cascade in
      const experienceItems = document.querySelectorAll('.experience-item');
      experienceItems.forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: "#experience-section",
            start: "top top",
            end: "70% center",
            scrub: 1,
          },
          x: index % 2 === 0 ? -1000 : 1000,
          y: -500 + (index * 100),
          rotation: index % 2 === 0 ? -180 : 180,
          opacity: 0,
        });
      });

      // Tech Stack Section - Use timeline for sequential animations
      const techTags = document.querySelectorAll('.tech-tag');
      const totalTags = techTags.length;

      // Create a timeline for all tech animations
      const techTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: "#tech-section",
          start: "top top",
          end: "+=300%",
          scrub: 1,
          pin: true,
        }
      });

      // Add section fade in
      techTimeline.from("#tech-section", {
        opacity: 0,
        duration: 0.1,
      }, 0);

      // Add header animation
      techTimeline.from("#tech-header", {
        y: -500,
        opacity: 0,
        duration: 0.2,
      }, 0.1);

      // Add tech items one by one
      techTags.forEach((tag, index) => {
        const angle = (index * 360) / totalTags;
        const distance = 800 + (index % 3) * 100;
        const x = Math.cos(angle * Math.PI / 180) * distance;
        const y = Math.sin(angle * Math.PI / 180) * distance;

        // Position in timeline: items start appearing after header (0.3) and spread across the rest (0.3 to 0.9)
        const startPosition = 0.3 + (index / totalTags) * 0.6;

        techTimeline.from(tag, {
          x: x,
          y: y,
          scale: 0,
          rotation: 720,
          opacity: 0,
          duration: 0.05, // Each item animates in quickly
        }, startPosition);
      });

      // Footer Section
      gsap.from("#footer-section", {
        scrollTrigger: {
          trigger: "#footer-section",
          start: "top top",
          end: "bottom center",
          scrub: 1,
          pin: true,
        },
        opacity: 0,
      });

      gsap.from("#footer-content", {
        scrollTrigger: {
          trigger: "#footer-section",
          start: "top top",
          end: "center center",
          scrub: 1,
        },
        y: 300,
        opacity: 0,
      });

    }, mainRef);

    return () => {
      ctx.revert();
      lenis.destroy();
    };
  }, []);

  return (
    <div ref={mainRef} className="bg-white">

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 right-0 w-1 h-screen z-50 bg-gray-200">
        <div
          id="progress-bar"
          className="w-full h-full bg-gradient-to-b from-teal-400 via-purple-400 to-pink-400 origin-top scale-y-0"
        ></div>
      </div>

      {/* Hero Section */}
      <section
        id="hero-section"
        className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-teal-50"
      >
        <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-[1fr_auto] gap-12 items-center w-full">
          <div>
            <h1
              id="hero-name"
              className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight"
            >
              Dennis Diepolder
            </h1>
            <p id="hero-subtitle" className="text-xl text-gray-700 leading-relaxed">
              Technical Operations & Service Delivery Manager<br />
              KPI-driven enterprise operations, cloud automation, and system thinking.
            </p>
          </div>
          <div id="hero-image" className="relative">
            <Image
              src="/profile.jpeg"
              alt="Dennis Diepolder"
              width={180}
              height={180}
              className="rounded-full border-4 border-teal-400 object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          id="scroll-indicator"
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-bounce"
        >
          <span className="text-gray-600 font-medium text-sm uppercase tracking-wider">
            Scroll for More
          </span>
          <svg
            className="w-6 h-6 text-teal-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </section>

      {/* Profile Section */}
      <section
        id="profile-section"
        className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-teal-50 via-white to-purple-50"
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 id="profile-header" className="text-5xl font-bold text-gray-900 mb-8 uppercase tracking-wider">
            Profile
          </h2>
          <p id="profile-text" className="text-2xl text-gray-800 leading-relaxed">
            Technical Operations Manager with strong experience in operational steering, SLA ownership,
            and KPI-based decision-making for enterprise customers (Swisscom).
            Combines leadership experience with hands-on cloud and automation skills.
          </p>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section
        id="competencies-section"
        className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="competencies-header" className="text-5xl font-bold text-gray-900 mb-12 text-center uppercase tracking-wider">
            Core Competencies
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="competency-tag border-3 border-teal-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaCogs className="text-2xl text-teal-500" />
              Operational Steering
            </span>
            <span className="competency-tag border-3 border-teal-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaTasks className="text-2xl text-teal-500" />
              Service Delivery
            </span>
            <span className="competency-tag border-3 border-teal-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaChartLine className="text-2xl text-teal-500" />
              KPI & SLA Management
            </span>
            <span className="competency-tag border-3 border-teal-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaUsers className="text-2xl text-teal-500" />
              Multisite Operations
            </span>
            <span className="competency-tag border-3 border-teal-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaChartLine className="text-2xl text-teal-500" />
              Forecasting & Capacity
            </span>
            <span className="competency-tag border-3 border-teal-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaTools className="text-2xl text-teal-500" />
              Process Automation
            </span>
            <span className="competency-tag border-3 border-teal-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaHandshake className="text-2xl text-teal-500" />
              Stakeholder Management
            </span>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience-section"
        className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-white via-teal-50 to-cyan-50"
      >
        <div className="max-w-4xl mx-auto px-6 w-full">
          <h2 id="experience-header" className="text-5xl font-bold text-gray-900 mb-12 text-center uppercase tracking-wider">
            Experience
          </h2>

          <div className="space-y-6">
            <div className="experience-item p-8 bg-white rounded-2xl shadow-xl border-l-4 border-teal-400">
              <div className="flex items-start gap-4">
                <FaBriefcase className="text-3xl text-teal-500 mt-1" />
                <div>
                  <strong className="text-2xl text-gray-900">Performance Manager – Project Swisscom</strong><br />
                  <span className="text-base text-gray-500">Capita Customer Service AG · 2025 – Present</span>
                  <p className="text-gray-800 leading-relaxed mt-3 text-lg">
                    Responsible for real-time operational steering across multiple sites.
                    Ownership of SLA performance, KPI tracking, and executive reporting.
                  </p>
                </div>
              </div>
            </div>

            <div className="experience-item p-8 bg-white rounded-2xl shadow-xl border-l-4 border-purple-400">
              <div className="flex items-start gap-4">
                <FaBriefcase className="text-3xl text-purple-500 mt-1" />
                <div>
                  <strong className="text-2xl text-gray-900">Junior Performance Manager</strong><br />
                  <span className="text-base text-gray-500">Capita Customer Service AG · 2025</span>
                </div>
              </div>
            </div>

            <div className="experience-item p-8 bg-white rounded-2xl shadow-xl border-l-4 border-pink-400">
              <div className="flex items-start gap-4">
                <FaBriefcase className="text-3xl text-pink-500 mt-1" />
                <div>
                  <strong className="text-2xl text-gray-900">IT Support / Customer Consultant (B2B)</strong><br />
                  <span className="text-base text-gray-500">Capita Customer Service AG · 2024</span>
                </div>
              </div>
            </div>

            <div className="experience-item p-8 bg-white rounded-2xl shadow-xl border-l-4 border-cyan-400">
              <div className="flex items-start gap-4">
                <FaBriefcase className="text-3xl text-cyan-500 mt-1" />
                <div>
                  <strong className="text-2xl text-gray-900">Freelancer – Web Development & DevOps</strong><br />
                  <span className="text-base text-gray-500">2023 – Present</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section
        id="tech-section"
        className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-cyan-50 via-white to-teal-50"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 id="tech-header" className="text-5xl font-bold text-gray-900 mb-12 text-center uppercase tracking-wider">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaAws className="text-3xl text-orange-500" />
              AWS
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FcGoogle className="text-3xl text-red-500" />
              Google Cloud
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <VscAzure className="text-3xl text-blue-600"/>
              Azure
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiTerraform className="text-3xl text-purple-600" />
              Terraform
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaDocker className="text-3xl text-blue-500" />
              Docker
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaGithub className="text-3xl text-gray-800" />
              GitHub Actions
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiJenkins className="text-3xl text-red-600" />
              Jenkins
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiNextdotjs className="text-3xl text-black" />
              Next.js
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaReact className="text-3xl text-cyan-500" />
              React
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiAstro className="text-3xl text-orange-600" />
              Astro
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiTypescript className="text-3xl text-blue-600" />
              TypeScript
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaNodeJs className="text-3xl text-green-600" />
              Node.js
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaPython className="text-3xl text-blue-500" />
              Python
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiGo className="text-3xl text-cyan-600" />
              Golang
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaLinux className="text-3xl text-yellow-600" />
              Linux
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <FaDatabase className="text-3xl text-cyan-600" />
              SQL / NoSQL
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiRedis className="text-3xl text-red-600" />
              Redis
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiVercel className="text-3xl text-black" />
              Vercel
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiStripe className="text-3xl text-purple-600" />
              Stripe
            </span>
            <span className="tech-tag border-3 border-cyan-400 bg-white rounded-xl px-6 py-4 text-lg text-gray-700 font-semibold shadow-lg flex items-center gap-3">
              <SiClerk className="text-3xl text-blue-600" />
              Clerk
            </span>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section
        id="footer-section"
        className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-teal-50 via-purple-50 to-pink-50"
      >
        <div id="footer-content" className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-gray-700 text-xl space-y-6">
            <div className="text-2xl font-semibold">
              Kreuzlingen, Switzerland
            </div>
            <div>
              <a
                href="mailto:info@dennisdiepolder.com"
                className="text-3xl text-teal-500 hover:text-teal-600 font-bold transition-colors duration-300"
              >
                info@dennisdiepolder.com
              </a>
            </div>
            <div className="flex gap-8 justify-center text-2xl">
              <a
                href="https://www.dennisdiepolder.com"
                className="text-teal-500 hover:text-teal-600 font-semibold transition-colors duration-300"
              >
                dennisdiepolder.com
              </a>
              <a
                href="https://github.com/dyprodg"
                className="text-teal-500 hover:text-teal-600 font-semibold transition-colors duration-300"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
