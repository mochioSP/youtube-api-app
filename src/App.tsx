import "./style/App.css";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./components/router/router";
import { Header } from "./components/organism/layout/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
    </BrowserRouter>
  );
}

export default App;
