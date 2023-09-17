import "./style/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Anything } from "./components/organism/video/Anything";
import { Shiba } from "./components/organism/video/Shiba";
import { SiberianHusky } from "./components/organism/video/SiberianHusky";
import { ToyPoodle } from "./components/organism/video/ToyPoodle";
import { Layout } from "./components/template/Layout";
import { InputTextProvider } from "./provides/InputTextProvider";

function App() {
  return (
    <div>
      <InputTextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Shiba />} />
              <Route path="/husky" element={<SiberianHusky />} />
              <Route path="/poodle" element={<ToyPoodle />} />
              <Route path="/any" element={<Anything />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </InputTextProvider>
    </div>
  );
}

export default App;
