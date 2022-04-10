import React from "react";
import { BASE_ROUTES } from "./pages/index.routes";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <CssBaseline />
      <Router>
        <Routes>
          {BASE_ROUTES.map((route) => {
            const { path, Element } = route;
            return <Route key={path} path={path} element={<Element />} />;
          })}
        </Routes>
      </Router>
    </>
  );
};

export default App;
