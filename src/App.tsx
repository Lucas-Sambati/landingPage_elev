import { lazy, Suspense } from "react";
import Index from "./pages/Index";

const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const isHome = window.location.pathname === "/";

  return isHome ? (
    <Index />
  ) : (
    <Suspense fallback={null}>
      <NotFound />
    </Suspense>
  );
};

export default App;
