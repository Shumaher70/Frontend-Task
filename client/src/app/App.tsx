import { BrowserRouter as Router } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";

import { LayoutApp } from "./pages/layout";
import { Navbar } from "@/components/navbar";
import { AppRoutes } from "./routes/app-routes";

function App() {
  return (
    <>
      <Router>
        <Toaster />
        <Navbar />
        <LayoutApp>
          <AppRoutes />
        </LayoutApp>
      </Router>
    </>
  );
}

export default App;
