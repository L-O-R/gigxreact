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
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import ScrollToTop from "./ScrollToTop";

const Student = lazy(() => import("./pages/Student"));
const Client = lazy(() => import("./pages/Client"));

const SuspenseLayout = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Outlet />
  </Suspense>
);

function App() {
  return (
    <section className="flex flex-col min-h-screen">
      <Router>
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Routes>
            <Route element={<SuspenseLayout />}>
              <Route path="/" element={<Student />} />
              <Route path="/client" element={<Client />} />
              <Route
                path="/terms"
                element={<TermsCondition />}
              />
              <Route
                path="/privacy"
                element={<PrivacyPolicy />}
              />
              <Route
                path="/refund"
                element={<RefundPolicy />}
              />
              <Route
                path="/shipping"
                element={<ShippingPolicy />}
              />
            </Route>
          </Routes>
        </main>
        <MainFooter />
      </Router>
    </section>
  );
}

export default App;
