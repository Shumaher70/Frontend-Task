import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./routes/app-routes";
import { Navbar } from "@/components/navbar";
import { LayoutApp } from "./pages/layout";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <LayoutApp>
          <AppRoutes />
        </LayoutApp>
      </Router>
    </>
  );
}

export default App;
