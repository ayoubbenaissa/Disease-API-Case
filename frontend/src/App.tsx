import { Route, Routes } from "react-router-dom";
import { GermanyInfo } from "./pages/GermanyInfo";
import { NoPage } from "./pages/NoPage";

import "./App.css";
import { Home } from "./pages/Home";
import { Cases } from "./pages/Cases";
import { RecentCases } from "./pages/RecentCases";
import { Deaths } from "./pages/Deaths";
import { RecentDeaths } from "./pages/RecentDeaths";
import { NavHeader } from "./components/NavHeader";

function App() {
  return (
    <>
      <NavHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/germany" element={<GermanyInfo />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/cases-per-days/:id" element={<RecentCases />} />
        <Route path="/deaths" element={<Deaths />} />
        <Route path="/deaths-per-days/:id" element={<RecentDeaths />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </>
  );
}

export default App;
