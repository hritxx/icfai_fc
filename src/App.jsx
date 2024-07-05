import "./App.css";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Team from "./components/Team/Team";
import Value from "./components/Value/Value";
import Hero2 from "./components/Hero2/Hero2";
import Title from "./components/Title/Title";
import About from "./components/AboutUs/About";
import Gallery from "./components/Gallery/Gallery";
import Fixtures from "./components/Fixtures/FIxtures";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero2 />
      </div>

      <Title subTitle="Our Values" title="About Us" />
      <About setPlayState={setPlayState} />
      <Title subTitle="OUR FIRST TEAM" title="SQUAD" iddd="team" />
      <Team role="The First Team" />
      <Team role="The Coaching Staff" />
      <Title subTitle="Our Club" title="Gallery" />
      <Gallery />

      <Title subTitle="Our Club" title="Gallery" />

      <Fixtures />

      <Title subTitle="Our Sponsers" title="Companies" />
      <Companies />
      <Title
        subTitle="Contact Us"
        title="Our Contact Us
"
      />

      <Contact />
      <Footer />
      <GetStarted />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
