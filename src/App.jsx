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
import Fixtures from "./components/Fixtures/Fixtures";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";
import { newsData } from "./utils/NewsData";
import { matchesData } from "./utils/fixtures";
import News from "./components/News/News";
import { players, coaches } from "./utils/slider";

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero2 />
      </div>

      <Title subTitle="Our Values" title="About Us" iddd="about-us" />
      <About setPlayState={setPlayState} />

      <Title subTitle="OUR FIRST TEAM" title="SQUAD" iddd="team" />
      <Team data={players} role="The First Team" />
      <Team data={coaches} role="The Coaching Staff" />

      <Title subTitle="Fixtures" title="Recent Matches" iddd="fixtures" />
      <Fixtures matches={matchesData} />

      <Title
        subTitle="Recent News "
        title="Recent News And Updates"
        iddd="recent-news"
      />
      <News news={newsData} />

      <Title subTitle="Our Club" title="Gallery" iddd="gallery" />
      <Gallery />

      <Title subTitle="Our Sponsers" iddd="companies" />
      <Companies />

      <Title subTitle="Our Contact" title="Connect With Us" iddd="contact-us" />
      <Contact />

      <Footer />
      <GetStarted />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
