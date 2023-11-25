import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { CategoryNav } from "./components/categoryNav";
import { SectionTitle } from "./components/sectionTitle";
import { Card } from "./components/card";
import { DynamicSection } from "./sections/dynamicSection";
import { Banner } from "./sections/banner";
import { burger, lavash, sandwich, shaurma } from "../test-data";

function App() {
  return (
    <div>
      <div className="container">
        <Nav />
        <main>
          <Banner />
          <CategoryNav />
          <DynamicSection title="Лаваш" data={lavash} />
          <DynamicSection title="Бургеры" data={burger} />
          <DynamicSection title="Клаб-Сэндвич" data={sandwich} />
          <DynamicSection title="Шаурма" data={shaurma} />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
