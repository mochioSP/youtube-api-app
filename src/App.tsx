import "./style/App.css";
import { BrowserRouter } from "react-router-dom";

import { Router } from "./router/router";
import { Header } from "./components/organism/layout/Header";
import { Search } from "./components/organism/search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Search />
      <Router />
    </BrowserRouter>
  );
}

export default App;
