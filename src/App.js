import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import {useMoviesLister} from "./firebase/config";
import MyMovies from "./pages/MyMovies";
import NotFound from "./pages/NotFound";

function App() {
  useMoviesLister();
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/:movie_name" element={<MovieDetail />} />
        <Route
          path="/my-movies/:user_id"
          element={
            <ProtectedRoute>
              <MyMovies />
            </ProtectedRoute>
          }
        />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
