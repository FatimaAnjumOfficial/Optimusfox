import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./constants/routes";
import { HomePage } from "./pages/HomePage";

function App() {
  const router = createBrowserRouter(routes);
  return (
    <>
      <RouterProvider router={router} />
      <HomePage />
    </>
  );
}

export default App;