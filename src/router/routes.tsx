import Layout from "../layout/Layout";
import GermsGame from "../pages/GermsGame";
import Home from "../pages/Home";

export const routes = [
  {
    path: "/",
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/germs-game",
    element: (
      <Layout>
        <GermsGame />
      </Layout>
    ),
  },
];
