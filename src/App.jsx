import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import SlideShow from "./pages/SlideShow";

const App = () => {
  return (
    <Router>
      <div>
        {/* Navigation links */}

        {/* Routes */}
        <Routes>
          {/* Define the home route with the `element` prop */}
          <Route path="/" element={<SlideShow />} />
          {/* Define the slideshow route with the `element` prop */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
