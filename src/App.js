import { useEffect, useState } from "react";
import "./App.css";
import PageScroller from "./components/FullPageScroll/PageScroller";
import Page from "./components/FullPageScroll/Page";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Services from "./components/Services";
import ExpertSection from "./components/ExpertSection.js";
import Fund from "./components/Fund";
import Products from "./components/Products";

function App() {
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newSection = Math.floor(scrollY / window.innerHeight) + 1;
      setCurrentSection(newSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const sections = [<Banner />, <Services />, <ExpertSection />,<Fund/> ,<Products/>];

  return (
    <PageScroller style={{ display: "flex", flexDirection: "column" }}>
      {sections.map((section, index) => {
        return (
          <Page navTitle={`Num ${index + 1}`} classname="page-container">
            {!index && <Navbar />}
            {section}
          </Page>
        );
      })}
    </PageScroller>
  );
}

export default App;
