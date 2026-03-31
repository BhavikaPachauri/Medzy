"use client";
import AboutHero from "./AboutHero";
import AboutContent from "./AboutContent";
import DirectorSection from "./DirectorSection";
export default function About() {
 
  return (
    <main className="bg-[#F7FAFA] min-h-screen" >
     <AboutHero/>
     <AboutContent/>
     <DirectorSection/>   
    </main>
  );
}