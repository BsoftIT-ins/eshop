import { createBrowserRouter } from "react-router-dom";
import Shop from "../pages/Shop/Shop";

// Create Public Route
const publicRoute = createBrowserRouter([
  {
    path: "/",
    element: <Shop />,
  }
]);

// Export Route
export default publicRoute;
