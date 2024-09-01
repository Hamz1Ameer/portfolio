"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import Clients from "@/components/Clients";
import Experiences from "@/components/Experiences";
import { Separator } from "@/components/ui/separator";
import Contact from "@/components/Contact";
const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Separator />
        <Grid />
        <Separator />
        <Experiences />
        <Separator />
        <RecentProjects />
        <Separator />
        <Clients />
        <Separator />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
