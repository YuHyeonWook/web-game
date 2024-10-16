import GermsGame from "../pages/GermsGame";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/germs-game",
    element: <GermsGame />,
  },
];
