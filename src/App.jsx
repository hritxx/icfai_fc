import { Routes, Route } from "react-router-dom";
import "./App.css";
import PlayerProfile from "./Pages/PlayerProfile";
import Home from "./Pages/Home";
import GetStarted from "./components/GetStarted/GetStarted";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/icfai_fc" element={<Home />} />
        <Route
          path="/icfai_fc/playerProfile/:playerName"
          element={<PlayerProfile />}
        />
      </Routes>
      <GetStarted />
    </div>
  );
}

export default App;
