import Hero from "./hero";
import Navbar from "./navbar";
import Works from "./works";
import Lenis from "lenis";

function App() {
  const lenis = new Lenis();

  const raf = (time: number) => {
    lenis.raf(time);
    requestAnimationFrame(raf);
  };

  requestAnimationFrame(raf);
  return (
    <main className="bg-background text-text dm-sans relative overflow-x-clip">
      <Navbar />
      <Hero />
      <Works />
    </main>
  );
}

export default App;
