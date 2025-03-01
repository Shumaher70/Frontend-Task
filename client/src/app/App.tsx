import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./routes/app-routes";
import { Navbar } from "@/components/navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
