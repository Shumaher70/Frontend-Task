import { BrowserRouter as Router } from "react-router-dom";

import { AppRoutes } from "./routes/app-routes";

function App() {
  return (
    <>
      <Router>
        <AppRoutes />
      </Router>
    </>
  );
}

export default App;
