import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom";

// Async dynamic import
const Header = React.lazy(() => import("home/Header"));
// const Footer = React.lazy(() => import("home/Footer"));
import Footer from "home/Footer";

import "./index.scss";

const App = () => {
  const [showHeader, setShowHeader] = useState(true);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {showHeader && (
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
        </Suspense>
      )}
      <button>Show The Header</button>
      <div className="my-10">PDP Page Content</div>
      <Footer />
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
