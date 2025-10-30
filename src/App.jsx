import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Header from "./component/Header";
import MainFooter from "./component/MainFooter";

const Student = lazy(() => import("./pages/Student"));
const Client = lazy(() => import("./pages/Client"));

const SuspenseLayout = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
  </Suspense>
);

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route element={<SuspenseLayout />}>
          <Route path="/" element={<Student />} />
          <Route path="/client" element={<Client />} />
        </Route>
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
