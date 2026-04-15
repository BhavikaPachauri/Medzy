"use client";
import { Suspense, lazy } from "react";
import AboutHero from "./AboutHero";

const AboutContent = lazy(() => import("./AboutContent"));
const DirectorSection = lazy(() => import("./DirectorSection"));

export default function About() {
 
  return (
    <main className=" min-h-screen" >
     <AboutHero/>
     <Suspense fallback={null}>
       <AboutContent/>
       <DirectorSection/>
     </Suspense>
    </main>
  );
}
