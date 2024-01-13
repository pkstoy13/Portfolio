import { Nav } from "./components/Nav";
import { Overview } from "./components/Overview";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

export function App() {
  return (
    <div>
      <Nav />
      <Overview />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
}
