import React from "react";

import WindowDimensionsProvider from "./components/WindowDimensionsProvider";

import Home from "./pages/Home";
import Layout from "./components/Layout";

function App() {
  return (
    <WindowDimensionsProvider>
      <Layout>
        <Home />
      </Layout>
    </WindowDimensionsProvider>
  );
}

export default App;
