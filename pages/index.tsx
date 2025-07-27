import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "@/pages/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      <Sidebar></Sidebar>

      <main className="min-h-screen bg-gray-900 text-white p-6 font-sans">
        <div className="max-w-4xl mx-auto space-y-8 overflow-y-scroll">
          <header id="contact-info" className="text-center">
            <h1 className="text-4xl font-bold">William Wells</h1>
            <p className="text-sm">GitHub: <a className="text-blue-400 hover:underline" href="https://github.com/RealWilliamWells">github.com/RealWilliamWells</a></p>
            <p className="text-sm">ItchIO: <a className="text-blue-400 hover:underline" href="https://realwilliamwells.itch.io">realwilliamwells.itch.io</a></p>
          </header>

          {/* Education */}
          <section id="education">
            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1">Education</h2>
            <p className="mt-2 font-medium">Bachelor of Software Engineering, Concordia University, Montréal, Québec (Sept. 2019 – Present)</p>
            <ul className="list-disc list-inside ml-4 text-sm text-gray-300">
              <li>Recipient of MacQuarries’ Technology Bursary</li>
              <li>Expected graduation in August 2025</li>
              <li>Instructing labs and tutorial periods for system hardware class</li>
            </ul>
          </section>

          {/* Relevant Experience */}
          <section id="experience">
            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1">Relevant Experience</h2>
            <div className="space-y-4">
              <Job title="Software Student" company="MDA Space" location="Sainte-Anne-de-Bellevue, Québec" dates="Sept. 2023 – Present" bullets={[
                "Develop and design real-time embedded software for operating in the high radiation environment of space",
                "Write detailed technical documentation such as interface control documents, manuals and design documents",
                "Conceptualize and develop automated test for the validation of satellite hardware",
              ]} />
              <Job title="Project Manager" company="Space Concordia Robotics Division" location="Montréal, Québec" dates="Jan. 2023 – Sept. 2023" bullets={[
                "Leading team designing and manufacturing a modular Mars rover",
                "Ensuring clear interfaces between subteams and maintaining team cohesion"
              ]} />
              <Job title="Technical Lead" company="Space Concordia Robotics Division" location="Montréal, Québec" dates="Sept. 2019 – Jan. 2023" bullets={[
                "Oversaw rover design, implementation, and testing",
                "Maintained technical documentation and user manuals",
                "Participated in European Rover Challenge 2022"
              ]} />
              <Job title="Software Co-Lead" company="Space Concordia Robotics Division" location="Montréal, Québec" dates="Sept. 2019 – Jan. 2023" bullets={[
                "Led sub-team focusing on autonomy: localization, mapping, vision, planning",
                "Programmed Teensy 3.6 microcontrollers, RS-485 bus",
                "Languages: C++, Python3.6+, Bash; Framework: ROS"
              ]} />
              <Job title="Software Engineer Intern" company="MDA Space" location="Halifax, Nova Scotia" dates="May – Aug. 2021" bullets={[
                "Developed NATO Maritime software with Spring Boot microservices",
                "Built backend with Java, frontend with JavaScript/TypeScript",
                "Practiced agile development with full unit test coverage"
              ]} />
              <Job title="Software Intern" company="Matrox" location="Dorval, Québec" dates="Jan. – Apr. 2022" bullets={[
                "Built tools for video stream quality evaluation and H265 parsing",
                "Designed user interfaces and testing infrastructure in C++, Bash"
              ]} />
            </div>
          </section>

          {/* Other Work */}
          <section id={"other-work"}>
            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1">Other Work</h2>
            <Job title="Lab & Tutorial Instructor" company="Concordia University" location="Montréal, Québec" dates="Jan. – May 2023" bullets={[
              "Instructed hardware labs and tutorials on digital logic"
            ]} />
            <Job title="Research Assistant" company="Concordia University" location="Montréal, Québec" dates="Nov. 2022 – Jan. 2023" bullets={[
              "Assisted research on autonomous robots for building inspection"
            ]} />
          </section>

          {/* Projects */}
          <section id={"projects"}>
            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1">Projects</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><strong>BEEP:</strong> Autonomous Mars rover using Jetson TX2 + Teensy 3.6; focus on control & autonomy</li>
              <li><strong>OSVEngine:</strong> 3D scene viewer in C++/OpenGL; runs on Linux, Windows, Switch, WebAssembly</li>
              <li><strong>Final Forest:</strong> RTS game for Ludum Dare 50; built with SFML/Box2D for Windows/Linux/Switch</li>
              <li><strong>Sea-Chip:</strong> Chip-8 emulator with SDL2 ported to Nintendo Switch as "Switch-Chip"</li>
            </ul>
          </section>

          {/* Technology Stack */}
          <section id={"tech-stack"}>
            <h2 className="text-2xl font-semibold border-b border-gray-700 pb-1">Technology Stack</h2>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <div>
                <strong>Languages:</strong> C++, Java, Python, TS, JS, C#, SQL, HTML/CSS
              </div>
              <div>
                <strong>Frameworks:</strong> ROS, SFML, SDL2, ExpressJS, Spring Boot, Angular, ReactJS
              </div>
              <div>
                <strong>Tools:</strong> Linux, CLion, CMake, Git, Docker, Jenkins, Vim, IntelliJ, etc.
              </div>
              <div>
                <strong>PM Tools:</strong> Jira, MS Project, GanttProject
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  )};

  type JobProps = {
    title: string,
    company: string,
    location: string,
    dates: string,
    bullets: string[]
  };

  function Job({ title, company, location, dates, bullets }: JobProps) {
    return (
        <div>
          <p className="font-medium">{title} @ {company} — <span className="text-gray-400">{location}</span></p>
          <p className="text-sm text-gray-400 mb-1">{dates}</p>
          <ul className="list-disc list-inside ml-4 text-sm text-gray-300">
            {bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
    )
}
