import "./App.css";
import { Fragment } from "react";
import Layout from "./components/layout/Layout";
import AuthForm from "./components/auth/AuthForm";
import { Route, Router, Routes } from "react-router-dom";
import Welcome from "./components/welcome/Welcome";

function App() {
  return (
    <Layout>
      <Router>
        <Routes>
          <div>Hello</div>
          {/* <Route path="/" element={<AuthForm />} />
          <Route path="/welcome" element={<Welcome />} /> */}
          {/* <Route path="*">
            <Redirect to="/" />
          </Route> */}
        </Routes>
      </Router>
    </Layout>
  );
}

export default App;

// dj
