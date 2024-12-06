import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Destination from "./pages/Destination";
import DestinationDetails from "./components/DestinationDetails";
import Crew from "./pages/Crew";
import CrewDetails from "./components/CrewDetails";
import Technology from "./pages/Technology";
import TechnologyDetails from "./components/TechnologyDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Homepage />} />
          <Route path="destination" element={<Destination />}>
            <Route index element={<Navigate to="moon" replace />} />
            <Route path=":name" element={<DestinationDetails />} />
          </Route>
          <Route path="crew" element={<Crew />}>
            <Route index element={<Navigate to="h" replace />} />
            <Route path=":crew-name" element={<CrewDetails />} />
          </Route>
          <Route path="technology" element={<Technology />}>
            <Route index element={<Navigate to="h" replace />} />
            <Route path=":crew-name" element={<TechnologyDetails />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
