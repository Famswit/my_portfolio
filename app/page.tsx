import MainPage from "@/components/mainPage";
import About from "@/components/about";
import Skills from "@/components/Skills";
import Projects from "@/components/projects";
import Contact from "@/components/contacts";

export default function Home() {
  return (
   <main>
    <MainPage />
    <About />
    <Skills />
    <Projects />
    <Contact />
   </main>
  );
}
