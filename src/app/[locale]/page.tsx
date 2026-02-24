import { Hero } from "@/components/Hero";
import { WhatIDo } from "@/components/WhatIDo";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { Background } from "@/components/Background";
import { BlogPreview } from "@/components/BlogPreview";
import { Contact } from "@/components/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatIDo />
      <Projects />
      <Skills />
      <Background />
      <BlogPreview />
      <Contact />
    </>
  );
}
