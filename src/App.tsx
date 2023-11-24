import "./style/App.css";
import { BrowserRouter } from "react-router-dom";

import { InputTextProvider } from "./provides/InputTextProvider";
import { MainPageRouters } from "./router/MainPageRouters";

function App() {
  return (
    <div style={{height: '100%', position: 'relative'}}>
      <InputTextProvider>
        <BrowserRouter>
          <MainPageRouters />
        </BrowserRouter>
      </InputTextProvider>
    </div>
  );
}

export default App;
